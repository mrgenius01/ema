import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword, hashPassword, verifyToken } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const { currentPassword, newPassword, token } = await request.json()

    const payload = verifyToken(token)
    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const isValid = await verifyPassword(currentPassword, user.password)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 400 }
      )
    }

    const hashedPassword = await hashPassword(newPassword)
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    })

    return NextResponse.json({ message: 'Password updated successfully' })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
