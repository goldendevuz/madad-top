import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

// Create a SQL client with the Neon connection
export const sql = neon(process.env.DATABASE_URL!)

// Create a Drizzle client for more structured queries
export const db = drizzle(sql)

// Helper function to safely execute database queries with error handling
export async function executeQuery<T>(
  queryFn: () => Promise<T>,
  errorMessage = "Database error occurred",
): Promise<{ data: T | null; error: string | null }> {
  try {
    const result = await queryFn()
    return { data: result, error: null }
  } catch (error) {
    console.error(`Database error: ${error instanceof Error ? error.message : String(error)}`)
    return { data: null, error: errorMessage }
  }
}
