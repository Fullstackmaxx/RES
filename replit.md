# Real Estate Investment Analyzer

## Overview

This is a full-stack real estate investment analyzer application built with React, Express, and PostgreSQL. The application allows users to upload property data via CSV files, analyze investment potential with automated calculations, and visualize property performance through interactive dashboards and comparisons.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Charts**: Recharts for data visualization
- **Theme**: Custom theme provider with light/dark mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: In-memory storage (MemStorage) with interface for future database implementation
- **File Processing**: Multer for CSV file uploads
- **Build**: Vite for development and esbuild for production

## Key Components

### Database Schema
- **Properties Table**: Comprehensive property data including address, price, bedrooms, bathrooms, square footage, and calculated investment metrics
- **Investment Metrics**: ROI, Cap Rate, Cash Flow, and Gross Yield calculations
- **Filtering**: Advanced search and filter capabilities

### API Endpoints
- `GET /api/properties` - Fetch properties with optional filters
- `GET /api/properties/:id` - Fetch single property
- `POST /api/properties` - Create new property
- `POST /api/properties/bulk` - Bulk create properties from CSV
- `POST /api/properties/:id/bookmark` - Toggle property bookmark status

### UI Components
- **Dashboard**: Main interface with analytics, property grid/table views
- **Property Cards**: Individual property display with key metrics
- **Comparison Modal**: Side-by-side property comparison
- **File Upload**: CSV file processing with validation
- **Analytics Dashboard**: Charts and metrics visualization
- **Filtering System**: Advanced property search and filtering

## Data Flow

1. **CSV Upload**: Users upload CSV files containing property data
2. **Data Processing**: CSV parser validates and transforms data
3. **Metric Calculation**: Investment calculations (ROI, Cap Rate, etc.) are performed
4. **Storage**: Properties are stored in database via Drizzle ORM
5. **Display**: Properties are fetched and displayed in grid or table format
6. **Analysis**: Users can filter, sort, compare, and analyze properties

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **@radix-ui/react-***: Headless UI components
- **recharts**: Data visualization library
- **wouter**: Lightweight routing
- **multer**: File upload handling
- **zod**: Schema validation

### Development Tools
- **Vite**: Development server and build tool
- **TypeScript**: Type safety and development experience
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Production build optimization

## Deployment Strategy

### Development
- **Server**: `npm run dev` starts Express server with hot reloading
- **Database**: Uses Drizzle Kit for schema management (`npm run db:push`)
- **Build**: Vite handles frontend development with HMR

### Production
- **Build Process**: `npm run build` creates optimized production bundle
- **Server**: `npm start` runs production Express server
- **Database**: PostgreSQL connection via environment variables
- **Static Assets**: Vite builds optimized frontend assets

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string
- **NODE_ENV**: Environment detection (development/production)
- **File Structure**: Clear separation of client, server, and shared code

The application follows a modern full-stack architecture with strong typing, efficient data handling, and a responsive user interface optimized for real estate investment analysis.