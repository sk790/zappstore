import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MountainIcon,
  WrenchIcon,
  ZapIcon,
  PaintbrushIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";
import { AuthPopup } from "../components/AuthPopup";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authType, setAuthType] = useState("login");
  const [searchQuery, setSearchQuery] = useState("");

  const openAuth = (type) => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const reviews = [
    {
      id: 1,
      name: "Alice Johnson",
      rating: 5,
      comment:
        "Found an excellent electrician through ServiceHub. Quick and professional service!",
      service: "Electrician",
    },
    {
      id: 2,
      name: "Bob Smith",
      rating: 4,
      comment:
        "Great platform for finding reliable mechanics. Saved me a lot of time and hassle.",
      service: "Mechanic",
    },
    {
      id: 3,
      name: "Carol Davis",
      rating: 5,
      comment:
        "The painters I hired through ServiceHub did an amazing job. Highly recommended!",
      service: "Painter",
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex justify-between items-center">
            <Link className="flex items-center justify-center" to="/">
              <MountainIcon className="h-6 w-6 mr-2" />
              <span className="font-bold text-lg">ZappStore</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                to="#features"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                to="#services"
              >
                Services
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                to="#about"
              >
                About
              </Link>
              <ModeToggle />
              <Button variant="ghost" onClick={() => openAuth("login")}>
                Login
              </Button>
              <Button onClick={() => openAuth("signup")}>Sign Up</Button>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Find the Right Service Provider
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    From electricians to mechanics, find skilled professionals
                    for all your needs in one place.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form onSubmit={handleSearch} className="flex space-x-2">
                    <Input
                      type="search"
                      placeholder="Search for a service..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-grow"
                    />
                    <Button type="submit">
                      <SearchIcon className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </form>
                </div>
                <div className="space-x-4">
                  <Button onClick={() => openAuth("signup")}>
                    Get Started
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <WrenchIcon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Mechanics</h3>
                  <p className="text-muted-foreground">
                    Expert auto repair and maintenance services.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ZapIcon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Electricians</h3>
                  <p className="text-muted-foreground">
                    Professional electrical installation and repair.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <PaintbrushIcon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Painters</h3>
                  <p className="text-muted-foreground">
                    Transform your space with our skilled painters.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          >
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Why Choose ServiceHub
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="h-12 w-12 mb-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">
                    Verified Professionals
                  </h3>
                  <p className="text-muted-foreground">
                    All our service providers are thoroughly vetted.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="h-12 w-12 mb-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Quick Booking</h3>
                  <p className="text-muted-foreground">
                    Book services with just a few clicks.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="h-12 w-12 mb-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="text-muted-foreground">
                    We ensure quality service or your money back.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="rounded-full bg-primary h-12 w-12 flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {review.service}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill={i < review.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <footer className="border-t">
          <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 ServiceHub. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link
                className="text-sm hover:underline underline-offset-4"
                to="/terms"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                to="/privacy"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
        <AuthPopup
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          type={authType}
        />
      </div>
    </ThemeProvider>
  );
}
