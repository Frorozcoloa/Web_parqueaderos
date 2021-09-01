
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Park from './components/park'


function App() {
  const[data, setData] = useState(null)
 

  const getData = async () => {
      await axios.get('http://localhost:8000/')
      .then(res => setData(res.data) )
      .catch(err=> console.log(err))
    }

  const postData = async (data) =>{
    await axios.post("http://localhost:8000/", data)
    .catch(err=> console.log(err))
    }

  useEffect(()=> {
    getData()
    }, [])

  return (
    <Container>
      <Park data={data}  postData={postData}/>
    </Container>
  );
}

export default App;
