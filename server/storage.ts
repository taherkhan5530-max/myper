import { db } from "./db";
import { skills, messages, type InsertMessage, type Skill, type Message } from "@shared/schema";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    if (!db) throw new Error("Database not available");
    return await db.select().from(skills);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    if (!db) throw new Error("Database not available");
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }
}

export class InMemoryStorage implements IStorage {
  private skills: Skill[] = [
    { id: 1, name: "Web Design & Dev", category: "Tech", icon: "FaCode" },
    { id: 2, name: "Logo Design", category: "Design", icon: "FaPaintBrush" },
    { id: 3, name: "Computer Assemble", category: "Hardware", icon: "FaDesktop" },
    { id: 4, name: "Shopify Store Design", category: "Tech", icon: "FaShopify" },
    { id: 5, name: "T-shirt Design", category: "Design", icon: "FaTshirt" },
    { id: 6, name: "Cyber Security (Basic)", category: "Tech", icon: "FaShieldAlt" },
    { id: 7, name: "Python", category: "Tech", icon: "FaPython" },
    { id: 8, name: "Java", category: "Tech", icon: "FaJava" },
  ];
  private messages: Message[] = [];
  private messageIdCounter = 1;

  async getSkills(): Promise<Skill[]> {
    return this.skills;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.messageIdCounter++,
      ...insertMessage,
      createdAt: new Date(),
    };
    this.messages.push(message);
    return message;
  }
}

export const storage: IStorage = db ? new DatabaseStorage() : new InMemoryStorage();
