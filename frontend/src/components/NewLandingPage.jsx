import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Youtube, Phone } from "lucide-react";
import { FaWhatsapp, FaAppStore, FaGooglePlay } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wrench,
  Briefcase,
  PaintBucket,
  Scissors,
  Truck,
  Star,
  CheckCircle,
  Search,
  Users,
  Calendar,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle"; // Import the ModeToggle component

export default function NewLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-900 shadow-sm z-10 relative">
        <Link className="flex items-center justify-center" href="#">
          <Wrench className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 text-xl font-bold text-blue-900 dark:text-blue-200">
            ServiceHub
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-blue-900 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium text-blue-900 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-blue-900 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#"
          >
            For Providers
          </Link>
          <Link
            className="text-sm font-medium text-blue-900 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#"
          >
            Contact
          </Link>
        </nav>
        {/* Dark Mode Toggle */}
        <ModeToggle />
      </header>
      <main className="flex-1">
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-blue-900 dark:bg-gray-700">
          <img
            src="../images/banner.jpg"
            alt="Banner background"
            className="absolute inset-0 z-0 opacity-20 w-full h-full object-cover"
          />

          <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your One-Stop Solution for Local Services
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Connect with trusted professionals for all your home and business
              needs.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              Find a Service
            </Button>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900 dark:text-blue-200">
              Popular Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Briefcase,
                  name: "Electricians",
                  description: "Expert electrical solutions for your property.",
                },
                {
                  icon: PaintBucket,
                  name: "Painters",
                  description:
                    "Transform your space with professional painting.",
                },
                {
                  icon: Scissors,
                  name: "Hairdressers",
                  description: "Get a fresh look from skilled stylists.",
                },
                {
                  icon: Truck,
                  name: "Movers",
                  description:
                    "Reliable moving services for a smooth relocation.",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-blue-900 dark:text-blue-200">
                      <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <span>{service.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900 dark:text-blue-200">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Search,
                  title: "Search",
                  description: "Browse our wide range of services",
                },
                {
                  icon: Users,
                  title: "Connect",
                  description: "Choose from our vetted professionals",
                },
                {
                  icon: Calendar,
                  title: "Book",
                  description: "Schedule your service with ease",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <div className="bg-blue-100 dark:bg-gray-700 p-3 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900 dark:text-blue-200">
              Featured Providers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  service: "Electrician",
                  rating: 4.9,
                  jobs: 127,
                  experience: "5 years",
                  responseTime: "Under 2 hours",
                },
                {
                  name: "Jane Smith",
                  service: "Plumber",
                  rating: 4.8,
                  jobs: 98,
                  experience: "7 years",
                  responseTime: "Under 1 hour",
                },
                {
                  name: "Mike Johnson",
                  service: "Painter",
                  rating: 4.7,
                  jobs: 156,
                  experience: "3 years",
                  responseTime: "Same day",
                },
              ].map((provider, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="rounded-full bg-blue-100 dark:bg-gray-700 w-16 h-16 flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {provider.name[0]}
                        </span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200">
                          {provider.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {provider.service}
                        </p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        {provider.rating} rating
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {provider.jobs} jobs completed
                      </li>
                      <li className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-gray-500" />
                        {provider.experience} experience
                      </li>
                      <li className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-blue-600" />
                        {provider.responseTime} response time
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-900 text-white dark:bg-blue-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Are You a Service Provider?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 dark:text-blue-200 md:text-xl">
                  Join our platform to reach more customers and grow your
                  business.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  className="w-full bg-white text-blue-900 hover:bg-blue-50 transition-colors dark:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800"
                  size="lg"
                >
                  Sign Up as a Provider
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white shadow-md mt-auto dark:bg-gray-900">
          <div className="container mx-auto px-6 py-10">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Branding and Copyright */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  ServiceHub Inc.
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © 2024 ServiceHub Inc. All rights reserved.
                </p>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center md:flex-row gap-6">
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>

            {/* Social Media and Contact Links */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Contact and Support Links */}
              <div className="text-center md:text-left">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  Get in Touch
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <Link
                    href="mailto:contact@servicehub.com"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    contact@servicehub.com
                  </Link>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <Link
                    href="tel:+1234567890"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    +123 456 7890
                  </Link>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex items-center gap-2">
                  <FaWhatsapp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <Link
                    href="https://wa.me/1234567890"
                    target="_blank"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    WhatsApp Us
                  </Link>
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-6">
                <Link
                  href="https://www.linkedin.com/company/servicehub"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/ServiceHub"
                  target="_blank"
                >
                  <Youtube className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
                </Link>
              </div>
            </div>
            

            {/* App Links */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  Get the App
                </h4>
                <div className="mt-4 flex space-x-4">
                  <Link
                    href="https://www.youtube.com/channel/ServiceHub"
                    target="_blank"
                  >
                    <FaAppStore className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors " />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/ServiceHub"
                    target="_blank"
                  >
                    <FaGooglePlay className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
