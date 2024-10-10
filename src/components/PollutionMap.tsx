// src/components/PollutionMap.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Map = dynamic(() => import('./Map'), { ssr: false })

const pollutionData = [
  { month: 'Jan', PM25: 35, PM10: 50, NO2: 40 },
  { month: 'Feb', PM25: 28, PM10: 48, NO2: 38 },
  { month: 'Mar', PM25: 40, PM10: 55, NO2: 45 },
  { month: 'Apr', PM25: 32, PM10: 52, NO2: 42 },
]

const PollutionMap = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Urban Pollution Hotspots</CardTitle>
        </CardHeader>
        <CardContent className="h-[500px]">
          <Map />
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Air Quality Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={pollutionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="PM25" stroke="#8884d8" name="PM2.5" />
              <Line type="monotone" dataKey="PM10" stroke="#82ca9d" name="PM10" />
              <Line type="monotone" dataKey="NO2" stroke="#ffc658" name="NO2" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default PollutionMap