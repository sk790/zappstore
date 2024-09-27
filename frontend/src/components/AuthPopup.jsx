import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "../hooks/use-toast"

export function AuthPopup({ isOpen, onClose, type }) {
  const [authType, setAuthType] = useState(type)
  const [accountType, setAccountType] = useState("user")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    serviceType: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted", { authType, accountType, ...formData })
    toast({
      title: authType === "login" ? "Logged in successfully" : "Signed up successfully",
      description: `Welcome to ServiceHub${accountType === "provider" ? " as a service provider" : ""}!`,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{authType === "login" ? "Login" : "Sign Up"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {authType === "signup" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label>Account Type</Label>
                <RadioGroup defaultValue="user" onValueChange={(value) => setAccountType(value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="user" id="user" />
                    <Label htmlFor="user">User</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="provider" id="provider" />
                    <Label htmlFor="provider">Service Provider</Label>
                  </div>
                </RadioGroup>
              </div>
              {accountType === "provider" && (
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mechanic">Mechanic</SelectItem>
                      <SelectItem value="electrician">Electrician</SelectItem>
                      <SelectItem value="painter">Painter</SelectItem>
                      <SelectItem value="plumber">Plumber</SelectItem>
                      <SelectItem value="carpenter">Carpenter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {authType === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>
        <div className="text-center mt-4">
          {authType === "login" ? (
            <p>
              Don't have an account?{" "}
              <Button variant="link" onClick={() => setAuthType("signup")}>
                Sign up
              </Button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Button variant="link" onClick={() => setAuthType("login")}>
                Login
              </Button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
