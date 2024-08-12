import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminLayout from './layout/Adminlayout'
import HomeLayout from './layout/HomeLayout'

import AdminDashboard from './pages/Admin/AdminDashboard'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import NotFound from './pages/Shared/Notfound'
import Register from './pages/Shared/Register'
import AdminUsers from './pages/Admin/AdminUsers'
import Event from './pages/Shared/Event'
import BookingForm from './pages/Shared/BookingForm'
import Feedback from './pages/Shared/Feedback'

import UserDashboard from './pages/User/UserDashboard'
import UserUsers from './pages/User/UserUsers'
import UserLayout from './layout/Userlayout'
import ContactForm from './pages/Shared/ContactForm'


const App = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
         
                
                <Route path='/' element={<Home/>} /> 
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/event' element={<Event/>} /> 
                <Route path='/BookingForm' element={<BookingForm/>} /> 
                <Route path='/Home' element={<Home/>} /> 
                <Route path='/Feedback' element={<Feedback/>} />
                <Route path='/ContactForm' element={<ContactForm/>} />

            </Route>

           

            <Route element={<AdminLayout />}>
                <Route path='/admin/dashboard' element={<AdminDashboard />} />
                <Route path='/admin/users' element={<AdminUsers />} />
            </Route>


            <Route element={<UserLayout/>}>
                <Route path='/user/dashboard' element={<UserDashboard/>} />
                <Route path='/user/users' element={<UserUsers/>} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>


</>
    )
}

export default App