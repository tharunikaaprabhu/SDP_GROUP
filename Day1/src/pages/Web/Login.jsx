


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
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

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!username || !password) {
//       setError("Please fill in both fields.");
//       return;
//     }

//     // Mock authentication logic
//     if (username === "admin" && password === "password") {
//       // Redirect to the Admin Dashboard
//       navigate("/admin/dashboard");
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Username</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
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
//             </div>
//             {error && <p className="text-red-500">{error}</p>}
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-end">
//           <Button type="submit" onClick={handleLogin}>
//             Login
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Mock authentication logic
    if (username === "Admin" && password === "password") {
      navigate("/userpage"); // Redirect to user page for "Admin" username
    } else if (username === "kums") {
      navigate("/admin/dashboard"); // Redirect to admin dashboard for valid admin credentials
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input
                  id="name"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
