import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { skills } from "@shared/schema";

async function seedDatabase() {
  if (!db) {
    console.log("Skipping database seeding (no database connection)");
    return;
  }
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    await db.insert(skills).values([
      { name: "Web Design & Dev", category: "Tech", icon: "FaCode" },
      { name: "Logo Design", category: "Design", icon: "FaPaintBrush" },
      { name: "Computer Assemble", category: "Hardware", icon: "FaDesktop" },
      { name: "Shopify Store Design", category: "Tech", icon: "FaShopify" },
      { name: "T-shirt Design", category: "Design", icon: "FaTshirt" },
      { name: "Cyber Security (Basic)", category: "Tech", icon: "FaShieldAlt" },
      { name: "Python", category: "Tech", icon: "FaPython" },
      { name: "Java", category: "Tech", icon: "FaJava" },
    ]);
  }
}

async function sendTelegramMessage(name: string, email: string, message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Telegram bot credentials not configured");
    return;
  }

  const telegramMessage = `📩 New Contact Form Submission\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    console.log("Sending to Telegram...");
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error("Telegram API Error:", responseData);
    } else {
      console.log("Message sent to Telegram successfully");
    }
  } catch (error) {
    console.error("Error sending Telegram message:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database
  await seedDatabase();

  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // Test Telegram connection
  app.get("/api/test-telegram", async (req, res) => {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return res.status(400).json({ error: "Telegram credentials not configured" });
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/getMe`
      );
      const data = await response.json();
      
      res.json({
        status: "success",
        bot: data,
        chatId: chatId,
      });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      
      // Send to Telegram bot
      await sendTelegramMessage(input.name, input.email, input.message);
      
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
