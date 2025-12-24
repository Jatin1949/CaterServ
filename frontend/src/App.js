import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Team from './Pages/Team'
import Book from './Pages/Book'
import Event from './Pages/Event'
import Testimonials from './Pages/Testimonials'
import UsAbout from './Pages/UsAbout'
import PageNotFound from './Pages/PageNotFound'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import PaymentPage from './Pages/PaymentPage'
import CheckoutPage from './Pages/CheckoutPage'
import MyOrders from './Pages/MyOrders'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="UsAbout" element={<UsAbout/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="event" element={<Event/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="Shop" element={<Shop/>}/>
          <Route path="team" element={<Team/>}/>
          <Route path="book" element={<Book/>}/>
          <Route path="Cart" element={<Cart/>}/>
          <Route path="PageNotFound" element={<PageNotFound/>}/>
          <Route path="testimonials" element={<Testimonials/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
          <Route path="/checkout-page" element={<CheckoutPage/>} />
          <Route path="/checkout/payment/:orderId" element={<PaymentPage/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/my-orders" element={<MyOrders/>} />


          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
