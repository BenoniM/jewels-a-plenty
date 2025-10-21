import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { 
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from 'react-router'

import Home from './pages/Home.jsx'
import Loading from './pages/Loading.jsx'
import Layout from './components/Layout.jsx'
import Shop , {loader as jewelsLoader} from './pages/Shop/Shop.jsx'
import Shopdetail from './pages/Shop/Shopdetail.jsx'
import About from './pages/About.jsx'
import Login from './pages/Authenticate/Login.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Loading />}/>
    <Route path='home' element={<Home />}/>
    <Route path='shop' element={<Shop />} loader={jewelsLoader}/>
    <Route path='shop/:id' element={<Shopdetail />}/>
    <Route path='login' element={<Login />}></Route>
    <Route path='about' element={<About />}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
