// src/components/WasteTracker.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), { ssr: false })

const wasteData = [
  { area: 'Harare CBD', general: 4000, recyclable: 2400, hazardous: 2400 },
  { area: 'Mbare', general: 3000, recyclable: 1398, hazardous: 2210 },
  { area: 'Borrowdale', general: 2000, recyclable: 9800, hazardous: 2290 },
  { area: 'Chitungwiza', general: 2780, recyclable: 3908, hazardous: 2000 },
]

const WasteTracker = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Waste Accumulation Sites</CardTitle>
        </CardHeader>
        <CardContent className="h-[500px]">
          <Map />
        </CardContent>
      </Card>
      <div className="col-span-3 space-y-4">
        <Alert variant="destructive">
          <AlertTitle>Critical Alert</AlertTitle>
          <AlertDescription>
            3 new illegal dumping sites detected in Mbare area
          </AlertDescription>
        </Alert>
        <Card>
          <CardHeader>
            <CardTitle>Waste Distribution by Area</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="general" fill="#8884d8" name="General Waste" />
                <Bar dataKey="recyclable" fill="#82ca9d" name="Recyclable" />
                <Bar dataKey="hazardous" fill="#ffc658" name="Hazardous" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default WasteTracker