import Header from 'components/Header/Header'
import LoadingFallback from 'components/NotiflixJs/NotiflixJs'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />
        <Suspense fallback ={<LoadingFallback/>}><Outlet/></Suspense>
        
        
    </>
  )
}

export default Layout
