

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const isValidPhoneNumber = (phoneNumber) => {
//     // Simple regex for validating phone numbers (adjust based on your needs)
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !phone) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (!isValidPhoneNumber(phone)) {
//       setError("Please enter a valid phone number.");
//       return;
//     }

//     // Handle registration logic here
//     console.log("Registering with", { name, email, password, phone });

//     // Show success toast message
//     toast.success("Registered successfully!");

//     // Redirect to the desired page after registration
//     navigate("/welcome"); // Change to the desired route
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <ToastContainer />
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Register</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleRegister}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="phone">Phone no</Label>
//                 <Input
//                   id="phone"
//                   placeholder="Enter Phone no"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500">{error}</p>}
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-end">
//           <Button type="submit" onClick={handleRegister}>
//             Register
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Register;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// // eslint-disable-next-line react/prop-types
// const Register = ({ setEventDetails }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const isValidPhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !phone) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (!isValidPhoneNumber(phone)) {
//       setError("Please enter a valid phone number.");
//       return;
//     }

//     const event = { name, email, password, phone, date: new Date().toLocaleString() };
//     setEventDetails(event);

//     toast.success("Registered successfully!");
//     navigate("/event-details");
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <ToastContainer />
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Register</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleRegister}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="phone">Phone no</Label>
//                 <Input
//                   id="phone"
//                   placeholder="Enter Phone no"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500">{error}</p>}
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-end">
//           <Button type="submit" onClick={handleRegister} className="text-red-500 text-white py-2 px-4 rounded">
//             Register
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Register;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// // eslint-disable-next-line react/prop-types
// const Register = ({ setEventDetails }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const isValidPhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !phone) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (!isValidPhoneNumber(phone)) {
//       setError("Please enter a valid phone number.");
//       return;
//     }

//     const event = { name, email, password, phone, date: new Date().toLocaleString() };
//     setEventDetails(event);

//     toast.success("Registered successfully!");
//     navigate("/event-details");
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <ToastContainer />
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Register</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleRegister}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="phone">Phone no</Label>
//                 <Input
//                   id="phone"
//                   placeholder="Enter Phone no"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500">{error}</p>}
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-end">
//           <Button type="submit" onClick={handleRegister} className="bg-red-500 text-white py-2 px-4 rounded">
//             Register
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Register;


import { Link } from 'react-router-dom';

const imageData = [
  {
    url: "https://www.table-art.co.uk/wp-content/uploads/2018/04/1136px-x-675px-peachy-image.jpg",
    text: "Birthday",
    route: "/user-bookings", // Update with the appropriate route
  },
  {
    url: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg",
    text: "Wedding",
    route: "/user-bookings", // Update with the appropriate route
  },
  {
    url: "https://media.licdn.com/dms/image/D4D12AQFxuo8CWk6qIg/article-cover_image-shrink_720_1280/0/1681980612057?e=2147483647&v=beta&t=3UqUyScRpe57OfnfM_R1IiYRfooYgHhNCKykNPGVYeI",
    text: "Conference",
    route: "/user-bookings", // Update with the appropriate route
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL1RLFEzrUEfUgu7xkLMtKJsIrya6fzoQ8ELWKvOZoK7gIzSnam3fq3W1QhYJ0OdiT1s&usqp=CAU",
    text: "Party",
    route: "/user-bookings", // Update with the appropriate route
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8BowtVVFfWUn52DjJyDtMd1-RgKMufS_6Q&usqp=CAU",
    text: "DJ",
    route: "/event-booking", // Update with the appropriate route
  },
];

function Events() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden">
      <style>
        {`
          @keyframes zoomInRotate {
            0% {
              transform: scale(0.8) rotate(0deg) translateY(30px);
              opacity: 0;
            }
            50% {
              transform: scale(1.1) rotate(3deg) translateY(-10px);
              opacity: 0.5;
            }
            100% {
              transform: scale(1) rotate(0deg) translateY(0px);
              opacity: 1;
            }
          }
          .zoom-rotate-animation {
            animation: zoomInRotate 1s ease-in-out;
          }
        `}
      </style>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-400 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-gray-600 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-800 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>
      <div className="relative flex gap-4 perspective-1000">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="relative w-52 h-72 bg-cover bg-center cursor-pointer transition-transform duration-500 flex justify-center items-center zoom-rotate-animation"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <Link
              to={item.route} // Dynamic route based on event type
              className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 bg-transparent text-white text-xl font-bold px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition-colors duration-300"
            >
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
