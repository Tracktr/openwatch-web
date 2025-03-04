import { ArrowRight, PlayCircle, Tv2, Search, Key } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className='px-4'>
      <section className="flex justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Find where to watch your favorite movies
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            OpenWatch helps you discover where movies and TV shows are streaming across different services. Build with
            our API to create your own streaming guide.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container space-y-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Example Movie Card</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here&apos;s how movie information is displayed using our API
            </p>
          </div>
          <div className="mx-auto grid gap-8 md:max-w-[64rem]">
            <div className="grid gap-4 md:grid-cols-[400px,1fr]">
              <Card className="flex flex-col overflow-hidden h-fit">
                <div className="relative aspect-[2/3] overflow-hidden flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=450&width=300"
                    alt="Inception Movie Poster"
                    width={300}
                    height={450}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Inception (2010)</CardTitle>
                  <CardDescription>Sci-Fi, Action, Adventure</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <h3 className="font-medium">Available on:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Tv2 className="h-4 w-4 text-green-500" />
                        <span>Netflix</span>
                        <span className="ml-auto text-muted-foreground">Included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-blue-500" />
                        <span>Prime Video</span>
                        <span className="ml-auto text-muted-foreground">Rent $3.99</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>API Request</CardTitle>
                  <CardDescription>Try out the OpenWatch API to get movie streaming availability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-mono">
                        GET <span className="text-blue-500">https://api.openwatch.xyz/movies/27205</span>
                      </div>
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm">
                        {`{
  "id": 1,
  "title": "The Avengers",
  "releaseYear": 2011,
  "availability": [
    {
      "streamingService": {
        "id": 1,
        "name": "Netflix",
        "logoUrl": "logo.png"
      }
    }
  ]
}`}
                      </pre>
                    </div>
                    <Button className="w-full">
                      Try it yourself
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container space-y-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to build your own streaming guide
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <Search className="h-8 w-8 mb-4" />
                <CardTitle>Search</CardTitle>
                <CardDescription>
                  Search across multiple streaming services to find where to watch movies and TV shows.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Key className="h-8 w-8 mb-4" />
                <CardTitle>API Access</CardTitle>
                <CardDescription>
                  Build your own applications with our comprehensive API and documentation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Tv2 className="h-8 w-8 mb-4" />
                <CardTitle>Streaming Data</CardTitle>
                <CardDescription>Get real-time availability data from popular streaming services.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
