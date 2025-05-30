"use server"

import { z } from "zod"
import { sql, executeQuery } from "@/lib/db"
import { revalidatePath } from "next/cache"

// Define validation schema for form data
const UserFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(255),
  email: z.string().email({ message: "Invalid email address" }).max(255),
  phone: z.string().min(5, { message: "Phone number is too short" }).max(20),
  course: z.string().min(1, { message: "Please select a course" }).max(100),
  message: z.string().optional(),
})

export type UserFormData = z.infer<typeof UserFormSchema>

export async function registerUser(formData: UserFormData) {
  // Validate form data
  const validationResult = UserFormSchema.safeParse(formData)

  if (!validationResult.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validationResult.error.flatten().fieldErrors,
    }
  }

  const { name, email, phone, course, message } = validationResult.data

  // Check if user with this email already exists
  const { data: existingUser, error: checkError } = await executeQuery(async () => {
    const result = await sql`SELECT id FROM users WHERE email = ${email}`
    return result[0]
  }, "Error checking existing user")

  if (checkError) {
    return { success: false, message: checkError }
  }

  if (existingUser) {
    return { success: false, message: "User with this email already exists" }
  }

  // Insert new user
  const { data, error } = await executeQuery(async () => {
    const result = await sql`
        INSERT INTO users (name, email, phone, course, message)
        VALUES (${name}, ${email}, ${phone}, ${course}, ${message || ""})
        RETURNING id
      `
    return result[0]
  }, "Error registering user")

  if (error) {
    return { success: false, message: error }
  }

  // Revalidate the page to reflect the new data
  revalidatePath("/")

  return {
    success: true,
    message: "Registration successful! We will contact you soon.",
    userId: data?.id,
  }
}

export async function getRegisteredUsers() {
  const { data, error } = await executeQuery(async () => {
    return await sql`
        SELECT id, name, email, phone, course, status, created_at
        FROM users
        ORDER BY created_at DESC
      `
  }, "Error fetching registered users")

  if (error) {
    return { success: false, message: error, users: [] }
  }

  return { success: true, users: data || [] }
}
