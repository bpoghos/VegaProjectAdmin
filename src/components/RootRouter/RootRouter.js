import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage'
import PostsPage from '../PostsPage'
import AddPost from '../AddPost'

export default function RootRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </div>
  )
}
