import { z } from "zod";
import { ReceiptExtractionSchema } from "./receipt";

export const SplitAssignmentSchema = z.object({
  contactName: z.string(),
  assignedItemIds: z.array(z.string()),
  calculatedShare: z.number().min(0),
});

export type SplitAssignment = z.infer<typeof SplitAssignmentSchema>;

export const ExpenseStatusSchema = z.enum([
  "pending_review",
  "committed",
  "synced_offline"
]);

export type ExpenseStatus = z.infer<typeof ExpenseStatusSchema>;

export const ExpenseSchema = z.object({
  id: z.string().optional(),
  imageUrl: z.string().optional(),
  extraction: ReceiptExtractionSchema,
  status: ExpenseStatusSchema.default("pending_review"),
  splits: z.array(SplitAssignmentSchema).optional().default([]),
  createdAt: z.string().or(z.date()).optional(),
  updatedAt: z.string().or(z.date()).optional(),
});

export type Expense = z.infer<typeof ExpenseSchema>;
