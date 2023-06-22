import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../api/album";
import './Mani.css'
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import Button from 'react-bootstrap/Button';



function AlbumsList() {
  const [post, setPost] = useState([]);
  
  function getAlbum() {
    api.get("/albums").then((response) => {
      // console.log(response.data)
      setPost(response.data);
    });
  }
  useEffect(() => {
    getAlbum();
  }, []);

  function handleUpdate(id,title) {
    localStorage.setItem("id",id);
    localStorage.setItem("title",title)
    
  }


  function handleDelete(id) {
    api.delete(`/albums/${id}`).then((response) => {
      console.log('Delete Album', response.data);
    });
  }
  return (
    <>

      <div className="App mt-3 mb-3" >
        <h1>Albums List</h1>
        <Link to="/add"><button className="btn btn-primary mx-auto" >Add Album</button></Link>
      </div>


      <div className="container mt-4">
        <div className="photo-gallery">
          {post.slice(0, 20).map((post, i) => {

            return (

              <div className="pic place" key={i}>
                <div className=' p-2 mt-5'>
                  <span className='id card-header h2 text-red'>{post.id}</span>
                  <div className='float-end shadow-sm me-2'>

                    <Link to="/update"> <Button variant='me-3'><FaPen className='icon' onClick={() =>  { handleUpdate(post.id,post.title) } } /></Button></Link>
                    <Button variant='me-3' > <IoTrashBin className='icon' onClick={() => { if (window.confirm(`Are you want to sure album delete ${post.id}`)) { handleDelete(post.id) } }} />  </Button>
                  </div>
                  <h5 className="mt-4  mb-3 ">{post.title}</h5>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>

  );
}

export default AlbumsList;
