import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Web/Home"
import Login from "./pages/Web/Login"
import Register from "./pages/Web/Register"
import Notfound from "./pages/Web/Notfound"
import Weblayout from "./layout/Weblayout"
import Adminlayout from "./layout/Adminlayout"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import AdminUser from "./pages/Admin/AdminUser"
import Event from "./pages/Web/Event"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Weblayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/event' element={<Event/>}/>

        <Route path='*' element={<Notfound/>}/>

        </Route>

        <Route element={<Adminlayout/>}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                        <Route path='/admin/users' element={<AdminUser/>} />

                    </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App