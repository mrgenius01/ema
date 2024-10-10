// src/app/page.tsx
'use client'


import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Dashboard />
      </div>
    </main>
  )
}