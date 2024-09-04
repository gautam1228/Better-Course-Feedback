import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function connectDB() {
    try {
      await prisma.$connect();
      console.log("DB connected successfully !!");
    } catch (error) {
      console.error("DB connection failed:", error);
      process.exit(1); // Exit process if connection fails
    }
}

module.exports = { prisma, connectDB }