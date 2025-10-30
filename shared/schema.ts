import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Catering Inquiry Table
export const cateringInquiries = pgTable("catering_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  eventDate: text("event_date").notNull(),
  guestCount: text("guest_count").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCateringInquirySchema = createInsertSchema(cateringInquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(1, "Telefonnummer ist erforderlich"),
  name: z.string().min(2, "Name ist erforderlich"),
  eventDate: z.string().min(1, "Veranstaltungsdatum ist erforderlich"),
  guestCount: z.string().min(1, "Anzahl der Gäste ist erforderlich"),
});

export type InsertCateringInquiry = z.infer<typeof insertCateringInquirySchema>;
export type CateringInquiry = typeof cateringInquiries.$inferSelect;

// Contact Form Table
export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  name: z.string().min(2, "Name ist erforderlich"),
  subject: z.string().min(2, "Betreff ist erforderlich"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// TypeScript interfaces for static data (stored in JSON files)
export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  category: 'bowls' | 'salads' | 'smoothies' | 'bakery' | 'coffee';
  labels: ('vegan' | 'glutenfrei' | 'no-refined-sugar')[];
  image?: string;
}

export interface DailySpecial {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  date: string;
  labels: ('vegan' | 'glutenfrei' | 'no-refined-sugar')[];
}

export interface OpeningHours {
  day: string;
  dayEn: string;
  open: string;
  close: string;
}

export interface Location {
  id: string;
  city: string;
  address: string;
  zip: string;
  hours: OpeningHours[];
  phone: string;
  gmapsUrl: string;
  transport?: string;
  transportEn?: string;
  parking?: string;
  parkingEn?: string;
}
