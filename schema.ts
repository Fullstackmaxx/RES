import { pgTable, text, serial, integer, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  price: decimal("price", { precision: 12, scale: 2 }).notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: decimal("bathrooms", { precision: 3, scale: 1 }).notNull(),
  squareFeet: integer("square_feet").notNull(),
  yearBuilt: integer("year_built").notNull(),
  propertyType: text("property_type").notNull(),
  monthlyRent: decimal("monthly_rent", { precision: 10, scale: 2 }),
  yearlyTaxes: decimal("yearly_taxes", { precision: 10, scale: 2 }),
  yearlyInsurance: decimal("yearly_insurance", { precision: 10, scale: 2 }),
  maintenancePercentage: decimal("maintenance_percentage", { precision: 5, scale: 2 }),
  vacancyRate: decimal("vacancy_rate", { precision: 5, scale: 2 }),
  roi: decimal("roi", { precision: 5, scale: 2 }),
  capRate: decimal("cap_rate", { precision: 5, scale: 2 }),
  cashFlow: decimal("cash_flow", { precision: 10, scale: 2 }),
  grossYield: decimal("gross_yield", { precision: 5, scale: 2 }),
  imageUrl: text("image_url"),
  isBookmarked: boolean("is_bookmarked").default(false),
});

export const insertPropertySchema = createInsertSchema(properties).omit({
  id: true,
  roi: true,
  capRate: true,
  cashFlow: true,
  grossYield: true,
});

export const propertyFilters = z.object({
  search: z.string().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  propertyType: z.string().optional(),
  location: z.string().optional(),
  minBedrooms: z.number().optional(),
  minBathrooms: z.number().optional(),
  minROI: z.number().optional(),
  minCashFlow: z.number().optional(),
});

export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;
export type PropertyFilters = z.infer<typeof propertyFilters>;
