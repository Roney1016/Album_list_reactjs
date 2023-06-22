import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState ,useEffect } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import axios from "axios";

function StaticExample() {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const navigate =useNavigate();
  
    useEffect(()=>{
     setId(localStorage.getItem("id"))
     setTitle(localStorage.getItem("title"))
    },[])
     // ************************   handle Input *******************************///
     const handleChange = (e) => {  
      const {name, value} = e.target
      if(name === "id"){
          setId(value)
      }
      else{
          setTitle(value)
      }
  }
    const handleUpdate = (e) => {
      e.preventDefault() 
      axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`,{
        id:id,
        title:title
      }).then(()=>{
        alert("Update Album");
         navigate("/");
      })
      setId(' ')
      setTitle(' ')
    }
    return (
        <div
            className="modal show" style={{ display: 'block', position: 'initial' }}
        >
              <div className="App mt-3 mb-3" >
        <h1>Update Album</h1>
        <Link to="/"><button className='btn btn-primary' >Home Page</button></Link>
        
      </div>
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title className='text-primary'>Update Album</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <div className="form-group">
            <label className='text-primary'>I'd</label>
            <input type="number" className="form-control mt-2 mb-3"value = {id} onChange = {handleChange} name="id" />
          </div>
          <div className="form-group">
            <label className='text-primary'>Title</label>
            <textarea rows="3" className="form-control mt-2 mb-3"value = {title} onChange = {handleChange} name="title"></textarea>
          </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update Album
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default StaticExample;