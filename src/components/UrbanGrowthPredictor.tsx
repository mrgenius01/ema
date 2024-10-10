// src/components/UrbanGrowthPredictor.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), { ssr: false })

const growthData = [
  { year: '2020', actual: 2.5, predicted: 2.5 },
  { year: '2021', actual: 2.7, predicted: 2.8 },
  { year: '2022', actual: 3.0, predicted: 3.1 },
  { year: '2023', actual: 3.2, predicted: 3.4 },
  { year: '2024', actual: null, predicted: 3.7 },
  { year: '2025', actual: null, predicted: 4.0 },
]

const UrbanGrowthPredictor = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Predicted Urban Expansion</CardTitle>
        </CardHeader>
        <CardContent className="h-[500px]">
          <Map />
        </CardContent>
      </Card>
      <div className="col-span-3 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Urban Growth Trends & Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual Growth" />
                <Line type="monotone" dataKey="predicted" stroke="#82ca9d" name="Predicted Growth" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Population expected to grow by 15% in next 5 years</li>
              <li>Urban area likely to expand by 10km² annually</li>
              <li>Increased pressure on existing infrastructure expected</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default UrbanGrowthPredictor