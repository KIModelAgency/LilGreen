import {
  type CateringInquiry,
  type InsertCateringInquiry,
  type ContactMessage,
  type InsertContactMessage,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Catering Inquiries
  createCateringInquiry(inquiry: InsertCateringInquiry): Promise<CateringInquiry>;
  getCateringInquiry(id: string): Promise<CateringInquiry | undefined>;
  getAllCateringInquiries(): Promise<CateringInquiry[]>;

  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessage(id: string): Promise<ContactMessage | undefined>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private cateringInquiries: Map<string, CateringInquiry>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.cateringInquiries = new Map();
    this.contactMessages = new Map();
  }

  // Catering Inquiries
  async createCateringInquiry(insertInquiry: InsertCateringInquiry): Promise<CateringInquiry> {
    const id = randomUUID();
    const inquiry: CateringInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.cateringInquiries.set(id, inquiry);
    return inquiry;
  }

  async getCateringInquiry(id: string): Promise<CateringInquiry | undefined> {
    return this.cateringInquiries.get(id);
  }

  async getAllCateringInquiries(): Promise<CateringInquiry[]> {
    return Array.from(this.cateringInquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  // Contact Messages
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessage(id: string): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
