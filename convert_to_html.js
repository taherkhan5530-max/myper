import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';

async function convertToHtml(dir, outputDir) {
  const files = await readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory() && !['node_modules', '.git', 'dist', 'html_converted'].includes(file.name)) {
      await convertToHtml(fullPath, join(outputDir, file.name));
    } else if (['.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.css', '.html'].includes(extname(file.name)) && !file.name.endsWith('.zip')) {
      const content = await readFile(fullPath, 'utf-8');
      const lang = extname(file.name).slice(1);
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${file.name}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script>hljs.highlightAll();</script>
</head>
<body>
  <h1>${file.name}</h1>
  <pre><code class="${lang ? `language-${lang}` : ''}">${content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
</body>
</html>`;
      const outputPath = join(outputDir, file.name + '.html');
      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, htmlContent);
    }
  }
}

const inputDir = '.';
const outputDir = './html_converted_all';

await mkdir(outputDir, { recursive: true });
await convertToHtml(inputDir, outputDir);
console.log('Conversion complete');