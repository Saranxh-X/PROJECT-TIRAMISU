import { z } from "zod";

export const LineItemSchema = z.object({
  id: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be non-negative"),
  quantity: z.number().positive().default(1),
  category: z.string().optional(),
  assignedTo: z.array(z.string()).default([]),
});

export type LineItem = z.infer<typeof LineItemSchema>;

export const ReceiptCategorySchema = z.enum([
  "Dining & Drinks",
  "Groceries",
  "Shopping",
  "Travel & Transportation",
  "Entertainment",
  "Utilities & Bills",
  "Services",
  "Other"
]);

export type ReceiptCategory = z.infer<typeof ReceiptCategorySchema>;

export const ReceiptExtractionSchema = z.object({
  merchantName: z.string().default("Unknown Merchant"),
  date: z.string().optional().describe("ISO date string YYYY-MM-DD"),
  totalAmount: z.number().min(0).default(0),
  taxAmount: z.number().min(0).optional().default(0),
  tipAmount: z.number().min(0).optional().default(0),
  category: ReceiptCategorySchema.default("Other"),
  paymentMethod: z.string().optional().default("Credit Card"),
  lineItems: z.array(LineItemSchema).default([]),
  rawText: z.string().optional(),
  confidenceScore: z.number().min(0).max(1).default(0.9),
  uncertain_fields: z.array(z.string()).default([]).describe("Keys of fields that AI is uncertain about"),
});

export type ReceiptExtraction = z.infer<typeof ReceiptExtractionSchema>;
