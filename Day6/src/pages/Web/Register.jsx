



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// eslint-disable-next-line react/prop-types
const Register = ({ setEventDetails }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
      setError("Please fill in all fields.");
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    const event = { name, email, password, phone, date: new Date().toLocaleString() };
    setEventDetails(event);

    toast.success("Registered successfully!");
    navigate("/event-details");
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <ToastContainer />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 border rounded"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 border rounded"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 border rounded"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone no</Label>
                <Input
                  id="phone"
                  placeholder="Enter Phone no"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-2 border rounded"
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleRegister} className="bg-red-500 text-white py-2 px-4 rounded">
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;

