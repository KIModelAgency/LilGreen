import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertCateringInquirySchema,
  insertContactMessageSchema,
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // POST /api/catering - Submit catering inquiry
  app.post("/api/catering", async (req, res) => {
    try {
      const validatedData = insertCateringInquirySchema.parse(req.body);
      const inquiry = await storage.createCateringInquiry(validatedData);
      
      // In a real application, you would send an email notification here
      console.log("New catering inquiry:", inquiry);
      
      res.status(201).json({ 
        success: true, 
        message: "Catering inquiry submitted successfully",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating catering inquiry:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // GET /api/catering - Get all catering inquiries (for admin purposes)
  app.get("/api/catering", async (req, res) => {
    try {
      const inquiries = await storage.getAllCateringInquiries();
      res.json({ success: true, data: inquiries });
    } catch (error) {
      console.error("Error fetching catering inquiries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // POST /api/contact - Submit contact message
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real application, you would send an email notification here
      console.log("New contact message:", message);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact message submitted successfully",
        id: message.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // GET /api/contact - Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
