import React from 'react'
import { Routes,Route, HashRouter } from 'react-router-dom';
import Navigation from '../src/components/Navigation';
import Home from '../src/components/Home';
import Watchlater from '../src/components/Watchlater';
import Trending from '../src/components/Trending'
import Videoplayer from '../src/components/Videoplayer';
// import Playbutton from './Playbutton';
function App  ()  {
  return (
    <div>
      <HashRouter>     
      <Navigation/>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/watchlater" element={<Watchlater/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/playit" element={<Videoplayer/>}/>
        </Routes>
        </HashRouter>
        </div>
  )
}

export default App
