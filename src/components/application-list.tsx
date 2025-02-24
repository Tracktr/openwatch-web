"use client"

import { useEffect, useState } from "react"
import { Copy, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Application {
  id: string
  name: string
  apiKey: string
}

export function ApplicationList() {
  const [applications, setApplications] = useState<Application[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchApplications() {
      try {
        const response = await fetch("/applications")
        const data = await response.json()
        setApplications(data)
      } catch (error) {
        console.error("Error fetching applications:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchApplications()
  }, [])

  const copyApiKey = (apiKey: string) => {
    navigator.clipboard.writeText(apiKey)
    // toast({
    //   title: "API Key copied",
    //   description: "The API key has been copied to your clipboard.",
    // })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (applications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No applications</CardTitle>
          <CardDescription>You haven&apos;t created any applications yet.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="grid gap-4">
      {applications.map((app) => (
        <Card key={app.id}>
          <CardHeader>
            <CardTitle>{app.name}</CardTitle>
            <CardDescription>Application ID: {app.id}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{app.apiKey}</code>
              <Button variant="outline" size="icon" onClick={() => copyApiKey(app.apiKey)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Use this API key to authenticate requests to the OpenWatch API.
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

