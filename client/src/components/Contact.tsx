import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const mutation = useSendMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2 font-display">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-[#3498db] mx-auto rounded-full" />
          <p className="mt-4 text-gray-500">I'm currently available for freelance work and collaboration.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-[#3498db]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2c3e50]">Email Me</h3>
                <p className="text-gray-600 mt-1">taherkhan5530@gmail.com</p>
                <p className="text-gray-600">hello@taherkhan.dev</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-[#3498db]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2c3e50]">Call Me</h3>
                <p className="text-gray-600 mt-1">+880 1946-325530</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-[#3498db]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2c3e50]">Location</h3>
                <p className="text-gray-600 mt-1">Sylhet, Bangladesh</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#2c3e50] mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61582955453879" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:-translate-y-1 transition-transform" data-testid="link-facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/cxtaher?igsh=NjN0d3F2dWJldDN3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#285aeb] text-white flex items-center justify-center hover:-translate-y-1 transition-transform" data-testid="link-instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/+8801946325530" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:-translate-y-1 transition-transform" data-testid="link-whatsapp">
                  <Send size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100 shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#2c3e50] font-semibold">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="bg-white border-gray-200 focus:border-[#3498db] focus:ring-[#3498db]/20 h-12 rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#2c3e50] font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Email"
                          className="bg-white border-gray-200 focus:border-[#3498db] focus:ring-[#3498db]/20 h-12 rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#2c3e50] font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="bg-white border-gray-200 focus:border-[#3498db] focus:ring-[#3498db]/20 min-h-[150px] rounded-xl resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full h-14 bg-[#3498db] hover:bg-[#2980b9] text-white font-bold rounded-xl shadow-lg shadow-[#3498db]/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
