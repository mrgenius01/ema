// src/components/SettlementsMonitor.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), { ssr: false })

const settlementData = [
  { area: 'Epworth', authorized: 3000, unauthorized: 1500 },
  { area: 'Chitungwiza', authorized: 5000, unauthorized: 800 },
  { area: 'Norton', authorized: 2000, unauthorized: 400 },
  { area: 'Ruwa', authorized: 1500, unauthorized: 300 },
]

const SettlementsMonitor = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Informal Settlements Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-[500px]">
          <Map />
        </CardContent>
      </Card>
      <div className="col-span-3 space-y-4">
        <Alert variant="destructive">
          <AlertTitle>New Informal Settlement Detected</AlertTitle>
          <AlertDescription>
            Rapid growth of unauthorized structures observed in Epworth district
          </AlertDescription>
        </Alert>
        <Card>
          <CardHeader>
            <CardTitle>Settlement Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={settlementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="authorized" fill="#82ca9d" name="Authorized Settlements" />
                <Bar dataKey="unauthorized" fill="#ff8042" name="Unauthorized Settlements" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SettlementsMonitor