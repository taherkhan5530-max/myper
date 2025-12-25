import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { skills } from "@shared/schema";

async function seedDatabase() {
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

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
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
