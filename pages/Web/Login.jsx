
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { authService } from '@/services/auth'
const Login = () => {
    const navigate = useNavigate()

    const checkRedirect = async () => {
        if (authService.getToken() !== null && authService.isLoggedIn()) {
            const userRole = authService.getUserRole();
            if (userRole !== null) {
                if (userRole === "Admin") {
                    navigate('/admin/dashboard');
                } else if (userRole === "User") {
                    navigate('/login');
                } else {
                    toast.error("Something went wrong");
                }
            }
        }
    };

    useEffect(() => {
        checkRedirect();
    }, []);

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value)
        if (res.status === 200) {
            authService.setToken(res.data.accessToken)
            toast.success("Welcome")
            console.log(res.data.accessToken)
            console.log(authService.getToken())

            setTimeout(() => {
                checkRedirect();
            }, 3000)

        }
    };
    return (
        <>
        <div style={{backgroundImage:'https://plus.unsplash.com/premium_photo-1661342434748-e8d1486582f9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}>
            <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col' >
                <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-gray-900' onSubmit={handleLogin}>
                    <input type="email" ref={emailRef} placeholder='Email' className='bg-gray-400 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
                    <input type="password" ref={passwordRef} placeholder='Password' className='bg-gray-400 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-red-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
                    <button type="submit" className='w-[80%] bg-gradient-to-tr from-red-600 to-red-300 text-white p-2 rounded-sm font-bold mt-4 shadow-sm shadow-red-500/40'>Login</button>
                    <p>Don't have an account ? <span className='text-red-500 cursor-pointer font-bold' onClick={() => navigate('/register')}> Register ! </span></p>
                </form>
            </div>
            <Toaster />
            </div>
        </>
    )
}

export default Login