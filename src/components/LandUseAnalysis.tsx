// src/components/LandUseAnalysis.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), { ssr: false })

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE']

const landUseData = [
  { name: 'Urban Infrastructure', area: 400 },
  { name: 'Green Spaces', area: 300 },
  { name: 'Agricultural Land', area: 200 },
  { name: 'Water Bodies', area: 100 },
]

const LandUseAnalysis = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Land Use Changes - Harare Metropolitan</CardTitle>
        </CardHeader>
        <CardContent className="h-[500px]">
          <Map />
        </CardContent>
      </Card>
      <div className="col-span-3 space-y-4">
        <Alert>
          <AlertTitle>Critical Land Use Change</AlertTitle>
          <AlertDescription>
            20% reduction in green spaces detected in Borrowdale area over the last 6 months
          </AlertDescription>
        </Alert>
        <Card>
          <CardHeader>
            <CardTitle>Current Land Use Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={landUseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="area"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {landUseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LandUseAnalysis