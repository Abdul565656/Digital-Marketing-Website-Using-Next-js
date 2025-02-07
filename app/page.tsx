import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "./components/MotionWrapper";
import React from "react"; // Explicit import


export default function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="font-sans bg-blue-50">
      <Navbar />
      <Hero />

      {/* --- SECTION: Projects --- */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Our Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <MotionWrapper
                key={i}
                className="overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-800">
                      Project Title {i}
                    </CardTitle>
                    <CardDescription>
                      Short description of the project
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Image
                      src={`/images/pro1.jpg`}
                      alt={`Project ${i}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button asChild variant="outline">
                      <Link href={`/projects/project-${i}`}>
                        <span>Learn More</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: Subscription Plans (Netflix Style) --- */}
      <section className="py-16 px-6 bg-blue-100 text-blue-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Unlock Premium Features with Our Subscriptions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Subscription Card 1 */}
            <MotionWrapper
              className="hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">Basic</CardTitle>
                  <CardDescription>Access to standard features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    $9.99<span className="text-sm">/month</span>
                  </div>
                  <ul className="list-disc list-inside mt-4">
                    <li>Limited support</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/subscription/basic">
                       <span>Choose Plan</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>

            {/* Subscription Card 2 */}
            <MotionWrapper
              className="hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">Premium</CardTitle>
                  <CardDescription>All Basic features + more</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    $19.99<span className="text-sm">/month</span>
                  </div>
                  <ul className="list-disc list-inside mt-4">
                    <li>Priority support</li>
                    <li>Exclusive content</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/subscription/premium">
                       <span>Choose Plan</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>

            {/* Subscription Card 3 */}
            <MotionWrapper
              className="hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">Enterprise</CardTitle>
                  <CardDescription>Custom solutions for your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">Contact Us</div>
                  <ul className="list-disc list-inside mt-4">
                    <li>Dedicated account manager</li>
                    <li>Advanced analytics</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/contacts">
                       <span>Contact Us</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* --- SECTION: Services --- */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card: Instagram Followers */}
            <MotionWrapper
              className="hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">
                    Instagram Followers
                  </CardTitle>
                  <CardDescription>
                    Boost your Instagram presence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Increase your reach and visibility with real, engaged
                    followers.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/InstagramFollowers">
                         <span>Learn More</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>

            {/* Service Card: YouTube Subscribers */}
            <MotionWrapper
              className="hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">
                    YouTube Subscribers
                  </CardTitle>
                  <CardDescription>Grow your YouTube channel</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Enhance your video's reach and authority with genuine
                    subscribers.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/YoutubeServices">
                        <span>Learn More</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>

            {/* Service Card: Envato Elements */}
            <MotionWrapper
              className="hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">Envato Elements</CardTitle>
                  <CardDescription>
                    Access millions of creative assets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Photos, templates, graphics, and more for your projects.</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/services/envato-elements">
                      <span>Learn More</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* --- SECTION: Frontend Templates --- */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Frontend Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Template Card 1 */}
            <MotionWrapper
              className="overflow-hidden hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">
                    Modern Portfolio Template
                  </CardTitle>
                  <CardDescription>Showcase your work with style</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Image
                    src="/images/portfolioweb.png"
                    alt="Template 1"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/templates/template-1">
                      <span>View Template</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>

            {/* Template Card 2 */}
            <MotionWrapper
              className="overflow-hidden hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">
                    E-commerce Template
                  </CardTitle>
                  <CardDescription>Start selling online today</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Image
                    src="/images/ecommerce=web.webp"
                    alt="Template 2"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/templates/template-2">
                       <span>View Template</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>

            {/* Template Card 3 */}
            <MotionWrapper
              className="overflow-hidden hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800">
                    Landing Page Template
                  </CardTitle>
                  <CardDescription>Get more conversions and leads</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Image
                    src="/images/landingweb.jpg"
                    alt="Template 3"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href="/templates/template-3">
                      <span>View Template</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* --- SECTION: Call to Action --- */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Contact us today to discuss your project and see how we can help.
          </p>
          <Button size="lg" asChild variant="default">
            <Link href="/contacts">
               <span>Contact Us</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* --- SECTION: Footer --- */}
      <footer className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} CöLab. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="#" className="text-blue-200 hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="text-blue-200 hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="text-blue-200 hover:text-white">
              LinkedIn
            </Link>
            <Link href="/terms" className="text-blue-200 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-blue-200 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}