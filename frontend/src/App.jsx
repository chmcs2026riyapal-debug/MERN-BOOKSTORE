import React from 'react'
import {Route, Routes } from "react-router"
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import BookDetailPage from './pages/BookDetailPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
     
    </div>
  )
}

export default App
