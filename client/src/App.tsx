import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import PageRender from './PageRender'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

import { Alert } from './components/alert/Alert'

import { refreshToken } from './redux/actions/authAction'
import { getHomeBlogs } from './redux/actions/blogAction'


export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
    dispatch(getHomeBlogs())
  },[dispatch])

  return (
  <div className="container">
    <Router>
      <Alert />
      <Header />
        <Routes>
          <Route path="/" element={<PageRender />} />
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:slug" element={<PageRender />} />
        </Routes>
      <Footer />
    </Router>
  </div>
  )
};

export default App