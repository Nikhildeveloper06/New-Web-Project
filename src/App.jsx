import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Tours from './Pages/Tours'
import Gallery from './Pages/Gallery'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import ScrollToTop from "react-scroll-to-top";
import Preloader from './Pages/Preloader'  // 👈 Preloader

function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", padding: "80px" }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you’re looking for does not exist.</p>
        <a href="/home" style={{ color: "#EF4444" }}>Back to Home</a>
      </div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/', // 👈 first screen is Preloader
    element: <Preloader />
  },
  {
    path: '/home',
    element: <><Navbar /><Home /><Footer /></>
  },
  {
    path: '/tours',
    element: <><Navbar /><Tours /><Footer /></>
  },
  {
    path: '/gallery',
    element: <><Navbar /><Gallery /><Footer /></>
  },
  {
    path: '/about',
    element: <><Navbar /><About /><Footer /></>
  },
  {
    path: '/contact',
    element: <><Navbar /><Contact /><Footer /></>
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop
  smooth
  color="#EF4444"   // 👈 icon color (red)
  style={{
    backgroundColor: "#ffffff",  // white background
    borderRadius: "50%",         // circle shape
    width: "45px",
    height: "45px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
/>

    </>
  )
}

export default App
