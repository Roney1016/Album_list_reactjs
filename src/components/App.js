import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import './Mani.css';
import AddAlbum from './AddAlbum';
import AlbumsList from './AlbumsList';
import UpdateAlbum from './UpdateAlbum';

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path="/" element={<AlbumsList />}  ></Route>
        <Route path="/add" element={ <AddAlbum />} ></Route>
        <Route path="/update" element={ <UpdateAlbum />}></Route>
        
      </Routes>
     
    </div>
  )
}

export default App