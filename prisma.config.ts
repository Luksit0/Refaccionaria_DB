import "dotenv/config";
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Aquí solo ponemos el NOMBRE de la variable que está en el archivo .env
    url: process.env.DATABASE_URL, 
  },
});