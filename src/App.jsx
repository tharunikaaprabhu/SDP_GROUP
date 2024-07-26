import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminLayout from './layout/Adminlayout'
import HomeLayout from './layout/HomeLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'

import Home from './pages/Shared/Home'

import Login from './pages/Shared/Login'
import NotFound from './pages/Shared/Notfound'
import Register from './pages/Shared/Register'
import AdminUsers from './pages/Admin/AdminUsers'
import Events from './pages/Shared/Events'
import EventCard from './pages/Shared/Eventcard'

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/events' element={<Events/>} />
                <Route path='/eventcard' element={<Eventcard/>} />
               

            </Route>

           

            <Route element={<AdminLayout />}>
                <Route path='/admin/dashboard' element={<AdminDashboard />} />
                <Route path='/admin/users' element={<AdminUsers />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>


</>
    )
}

export default App