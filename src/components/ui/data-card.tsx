// src/components/ui/data-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from "./card"

interface DataCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
}

export function DataCard({ title, value, description, icon, trend }: DataCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-gray-500">{description}</p>
        )}
        {trend && (
          <div className={`text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '+' : '-'}{trend.value}%
          </div>
        )}
      </CardContent>
    </Card>
  )
}