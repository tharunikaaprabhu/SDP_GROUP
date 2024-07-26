
// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Web/Home'
import Login from './pages/Web/Login'
import Register from './pages/Web/Register'
import Adminlayout from './layout/Adminlayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Web/Notfound'
import Weblayout from './layout/Weblayout'
import AdminUsers from './pages/Admin/AdminUsers'
import EventTable from './pages/Web/EventTable'




const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Weblayout/>}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                         <Route path='*' element={<NotFound />} />
                         <Route path='/eventtable' element={<EventTable/>}/>
                    </Route>



                    <Route element={<Adminlayout/>}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                        <Route path='/admin/users' element={<AdminUsers/>} />
                    </Route>

                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App