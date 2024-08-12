

// import React, { useEffect, useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast'
// import { authService } from '../../services/auth'
// const Login = () => {
//     const navigate = useNavigate()

//     const checkRedirect = async () => {
//         if (authService.getToken() !== null && authService.isLoggedIn()) {
//             const userRole = authService.getUserRole();
//             if (userRole !== null) {
//                 if (userRole === "Admin") {
//                     navigate('/admin/dashboard');
//                 } else if (userRole === "User") {
//                     navigate('/user/dashboard');
//                 } else {
//                     toast.error("Something went wrong");
//                 }
//             }
//         }
//     };

//     useEffect(() => {
//         checkRedirect();
//     }, []);

//     const emailRef = useRef(null)
//     const passwordRef = useRef(null)
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value)
//         console.log(res.data);
//         if (res.status === 200) {
//             authService.setToken(res.data.accessToken)
//             toast.success("Welcome")
//             setTimeout(() => {
//                 checkRedirect();
//             }, 3000)

//         }
//     };
//     return (
//         <>
//             <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
//                 <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-orange-100' onSubmit={handleLogin}>
//                     <input type="email" ref={emailRef} placeholder='Email' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
//                     <input type="password" ref={passwordRef} placeholder='Password' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
//                     <button type="submit" className='w-[80%] bg-gradient-to-tr from-orange-600 to-orange-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40'>Login</button>
//                     <p>Don't have an account ? <span className='text-orange-500 cursor-pointer font-bold' onClick={() => navigate('/register')}> Register ! </span></p>
//                 </form>
//             </div>
//             <Toaster />
//         </>
//     )
// }

// // export default Login
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Import Link
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Login = () => {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [id]: value
//         }));
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.email) newErrors.email = 'Email is required';
//         if (!formData.password) newErrors.password = 'Password is required';
//         return newErrors;
//     };

//     const handleLogin = () => {
//         const newErrors = validateForm();
//         if (Object.keys(newErrors).length === 0) {
//             // Proceed to event page if validation passes
//             navigate('/Event');
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div className='h-screen w-full flex'>
//             {/* Left Side - Circle Image */}
//             <div className='hidden md:flex md:w-1/2 justify-center items-center bg-gray-200'>
//                 <img
//                     src='https://i.pinimg.com/564x/c6/56/00/c656008d9cefbb329208247bc3c1ea31.jpg'
//                     alt='Profile'
//                     className='w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg'
//                 />
//             </div>

//             {/* Right Side - Login Form */}
//             <div className='w-full md:w-1/2 flex justify-center items-center p-4'>
//                 <div className='w-full max-w-md'>
//                     <Card className="shadow-lg">
//                         <CardHeader className="space-y-1">
//                             <CardTitle className="text-2xl">Login</CardTitle>
//                             <CardDescription>
//                                 Enter your email below to login
//                             </CardDescription>
//                         </CardHeader>
//                         <CardContent className="grid gap-4">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">Email</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     placeholder="Enter email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     className={errors.email ? 'border-red-500' : ''}
//                                 />
//                                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                             </div>
//                             <div className="grid gap-2">
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     placeholder="Enter password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     className={errors.password ? 'border-red-500' : ''}
//                                 />
//                                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//                             </div>
//                         </CardContent>
//                         <CardFooter className="flex flex-col items-center">
//                             <Button className="w-full mb-2" onClick={handleLogin}>
//                                 Login
//                             </Button>
//                             <p className="text-sm text-gray-600">
//                                 Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
//                             </p>
//                         </CardFooter>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // export default Login;
//  import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Login = () => {
//     const [formData, setFormData] = useState({ email: '', password: '', role: '' });
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [id]: value
//         }));
//         setErrors({});
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.email) newErrors.email = 'Email is required';
//         if (!formData.password) newErrors.password = 'Password is required';
//         if (!formData.role) newErrors.role = 'Role is required';
//         if (formData.password && formData.password.length < 5) newErrors.password = 'Password must be at least 5 characters long';
//         return newErrors;
//     };

//     const handleLogin = async () => {
//         const newErrors = validateForm();
//         if (Object.keys(newErrors).length === 0) {
//             // Mock API call for login
//             // Replace with actual API call and logic as needed
//             const res = await mockLoginApi(formData.email, formData.password, formData.role);
//             if (res.status === 200) {
//                 // Navigate based on role
//                 switch (formData.role) {
//                     case 'User':
//                         navigate('/user/dashboard', { replace: true });
//                         break;
//                     case 'Admin':
//                         navigate('/admin/dashboard', { replace: true });
//                         break;
//                     // case 'Instructor':
//                     //     navigate('/instructor/dashboard', { replace: true });
//                     //     break;
//                     default:
//                         setErrors({ role: 'Invalid role selected' });
//                 }
//             } else {
//                 setErrors({ general: 'Login failed' });
//             }
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     const mockLoginApi = async (email, password, role) => {
//         // Replace with actual API call
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve({ status: 200, data: { accessToken: 'mockToken' } });
//             }, 1000);
//         });
//     };

//     return (
//         <div className='h-screen w-full flex'>
//             {/* Left Side - Circle Image */}
//             <div className='hidden md:flex md:w-1/2 justify-center items-center bg-gray-200'>
//                 <img
//                     src='https://i.pinimg.com/564x/c6/56/00/c656008d9cefbb329208247bc3c1ea31.jpg'
//                     alt='Profile'
//                     className='w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg'
//                 />
//             </div>

//             {/* Right Side - Login Form */}
//             <div className='w-full md:w-1/2 flex justify-center items-center p-4'>
//                 <div className='w-full max-w-md'>
//                     <Card className="shadow-lg">
//                         <CardHeader className="space-y-1">
//                             <CardTitle className="text-2xl">Login</CardTitle>
//                             <CardDescription>
//                                 Enter your email, password, and select your role to login
//                             </CardDescription>
//                         </CardHeader>
//                         <CardContent className="grid gap-4">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">Email</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     placeholder="Enter email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     className={errors.email ? 'border-red-500' : ''}
//                                 />
//                                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                             </div>
//                             <div className="grid gap-2">
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     placeholder="Enter password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     className={errors.password ? 'border-red-500' : ''}
//                                 />
//                                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//                             </div>
//                             <div className="grid gap-2">
//                                 <Label htmlFor="role">Role</Label>
//                                 <select
//                                     id="role"
//                                     value={formData.role}
//                                     onChange={handleInputChange}
//                                     className={errors.role ? 'border-red-500' : 'border-gray-300'}
//                                 >
//                                     <option value="">Select role</option>
//                                     <option value="User">User</option>
//                                     <option value="Admin">Admin</option>
//                                     {/* <option value="Instructor">Instructor</option> */}
//                                 </select>
//                                 {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
//                             </div>
//                         </CardContent>
//                         <CardFooter className="flex flex-col items-center">
//                             <Button className="w-full mb-2" onClick={handleLogin}>
//                                 Login
//                             </Button>
//                             {/* <Button className="w-full mb-2 bg-green-500 hover:bg-green-600" onClick={() => navigate('/add-admin')}>
//                                 Add New Admin User
//                             </Button> */}
//                             <p className="text-sm text-gray-600">
//                                 Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
//                             </p>
//                         </CardFooter>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '', role: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
        setErrors({});
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.role) newErrors.role = 'Role is required';
        if (formData.password && formData.password.length < 5) newErrors.password = 'Password must be at least 5 characters long';
        return newErrors;
    };

    const handleLogin = async () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            // Mock API call for login
            // Replace with actual API call and logic as needed
            const res = await mockLoginApi(formData.email, formData.password, formData.role);
            if (res.status === 200) {
                // Navigate based on role
                switch (formData.role) {
                    case 'User':
                        navigate('/user/dashboard', { replace: true });
                        break;
                    case 'Admin':
                        navigate('/admin/dashboard', { replace: true });
                        break;
                    case 'Instructor':
                        navigate('/instructor/dashboard', { replace: true });
                        break;
                    default:
                        setErrors({ role: 'Invalid role selected' });
                }
            } else {
                setErrors({ general: 'Login failed' });
            }
        } else {
            setErrors(newErrors);
        }
    };

    const mockLoginApi = async (email, password, role) => {
        // Replace with actual API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 200, data: { accessToken: 'mockToken' } });
            }, 1000);
        });
    };

    return (
        <div className='h-screen w-full flex'>
            {/* Left Side - Circle Image */}
            <div className='hidden md:flex md:w-1/2 justify-center items-center bg-gray-200'>
                <img
                    src='https://i.pinimg.com/564x/c6/56/00/c656008d9cefbb329208247bc3c1ea31.jpg'
                    alt='Profile'
                    className='w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg'
                />
            </div>

            {/* Right Side - Login Form */}
            <div className='w-full md:w-1/2 flex justify-center items-center p-4'>
                <div className='w-full max-w-md'>
                    <Card className="shadow-lg">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl">Login</CardTitle>
                            <CardDescription>
                                Enter your email, password, and select your role to login
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={errors.email ? 'border-red-500' : ''}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={errors.password ? 'border-red-500' : ''}
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="role">Role</Label>
                                <select
                                    id="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    className={errors.role ? 'border-red-500' : 'border-gray-300'}
                                >
                                    <option value="">Select role</option>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Instructor">Instructor</option>
                                </select>
                                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-center">
                            <Button className="w-full mb-2" onClick={handleLogin}>
                                Login
                            </Button>
                            <Button className="w-full mb-2 bg-green-500 hover:bg-green-600" onClick={() => navigate('/add-admin')}>
                                Add New Admin User
                            </Button>
                            <p className="text-sm text-gray-600">
                                Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;
