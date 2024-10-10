import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PolicyInsights = () => {
    const insights = [
      {
        category: "Air Quality",
        recommendation: "Implement stricter vehicle emission standards in urban areas",
        impact: "Could reduce urban air pollution by 25% within 2 years",
        priority: "High"
      },
      {
        category: "Waste Management",
        recommendation: "Introduce mandatory waste sorting at household level",
        impact: "Could increase recycling rates by 40% and reduce landfill usage",
        priority: "Medium"
      },
      {
        category: "Urban Planning",
        recommendation: "Establish green corridors in new urban developments",
        impact: "Would maintain 30% green space in expanding urban areas",
        priority: "High"
      },
      {
        category: "Informal Settlements",
        recommendation: "Develop regularization program for existing settlements",
        impact: "Could improve living conditions for 50,000 residents",
        priority: "Medium"
      }
    ]
  
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {insights.map((insight, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>{insight.category}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  insight.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {insight.priority} Priority
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Recommendation:</h3>
              <p className="mb-4">{insight.recommendation}</p>
              <h3 className="font-semibold mb-2">Potential Impact:</h3>
              <p>{insight.impact}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
  
  export default PolicyInsights