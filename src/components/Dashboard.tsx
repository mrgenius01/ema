// src/components/Dashboard.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PollutionMap from './PollutionMap'
import WasteTracker from './WasteTracker'
import LandUseAnalysis from './LandUseAnalysis'
import SettlementsMonitor from './SettlementsMonitor'
import UrbanGrowthPredictor from './UrbanGrowthPredictor'
import PolicyInsights from './PolicyInsights'

const Dashboard = () => {
  return (
    <Tabs defaultValue="pollution" className="w-full">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
        <TabsTrigger value="pollution">Pollution Levels</TabsTrigger>
        <TabsTrigger value="waste">Waste Management</TabsTrigger>
        <TabsTrigger value="landuse">Land Use Changes</TabsTrigger>
        <TabsTrigger value="settlements">Informal Settlements</TabsTrigger>
        <TabsTrigger value="growth">Urban Growth</TabsTrigger>
        <TabsTrigger value="policy">Policy Insights</TabsTrigger>
      </TabsList>
      
      <TabsContent value="pollution">
        <PollutionMap />
      </TabsContent>
      
      <TabsContent value="waste">
        <WasteTracker />
      </TabsContent>
      
      <TabsContent value="landuse">
        <LandUseAnalysis />
      </TabsContent>
      
      <TabsContent value="settlements">
        <SettlementsMonitor />
      </TabsContent>
      
      <TabsContent value="growth">
        <UrbanGrowthPredictor />
      </TabsContent>
      
      <TabsContent value="policy">
        <PolicyInsights />
      </TabsContent>
    </Tabs>
  )
}

export default Dashboard