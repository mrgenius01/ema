// src/lib/auth.ts
import { hash, compare } from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'mgR33l0ad3d'

export async function hashPassword(password: string) {
  return await hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword)
}

export function generateToken(userId: number) {
  return sign({ userId }, JWT_SECRET, { expiresIn: '1d' })
}

export function verifyToken(token: string) {
  try {
    return verify(token, JWT_SECRET) as { userId: number }
  } catch {
    return null
  }
}

// reset password
export function resetPassword() {
  // send email with token
  
}