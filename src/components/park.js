import {Row, Card, Col, Form, Button} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';

import {useHistory} from 'react-router-dom';

function SelectPark({onSubmit, data}){

    //Colocar las celdas que estan libres
    let valores = data? data.map(e=> e.celda): []
    let matriz = Array.apply(null, {length: 29}).map(Number.call, Number).map(e=>e+1)
    
    let options = matriz.filter(x=> !valores.includes(x))
    let printOptions = options.map((e)=> {
        return( <option value={e} key={e}>{e}</option>)
    })

    return(
        <select className="form-control" id="exampleFormControlSelect1" onChange={(e)=>onSubmit(e.target.value)} >
            <option>Seleciona la celda</option>
            {printOptions}
        </select>
    )
}


function Celdas(props){
    let History = useHistory()


   
    let hadleFinish = (celda)=>{
        console.log('click');
        History.push(`/factura/${celda}`)
    }
    if(props.data){
        let printAllData = props.data.map((vehiculo)=> {
            return(
                <Col sm="3" className="mt-5" key={vehiculo.celda}>
                        <Card className="celda">
                            <Card.Title align="center">Celda: {vehiculo.celda}</Card.Title>
                            <Card.Body>
                                <Card.Text><b>Placa:</b> {vehiculo.placa}</Card.Text>
                                <Card.Text><b>Fecha:</b> {vehiculo.fecha}</Card.Text>
                            </Card.Body>
                            <Button type="button" className="btn btn-danger" onClick={()=> hadleFinish(vehiculo.celda)}>Finalizar</Button>
                        </Card>
                    </Col>
            )
        })
        return(
            <Row className="row-header">
                    {printAllData}
                </Row>
        )
    }
    else{
        return(<FaSpinner/>)
    }
    
}


function Park(){
    const [celda, setCelda] = useState(0)
    const [placa, setPlaca] = useState('')
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



    function handleSubmit(){
        if(placa.length>0){

            let data = {'celda': celda, 'placa': placa}
            postData(data)
        
        }
        else{
            alert("No ingresó la placa")
        }
        
    }
   
    return(
        <>
            <Row className="justify-content-md-center row-header">
                <Card className="objecto">
                    <Card.Title align="center">Bienvenidos al parqueadero central</Card.Title>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className="mb-4" controlId="FormPlaca" >
                                <Form.Label column sm="2">Placa</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="type" placeholder="Placa" onChange={(e)=> setPlaca(e.target.value)} value={placa}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-4" controlId="FormCelda">
                                <Form.Label column sm="2">Celda</Form.Label>
                                <Col sm="10">
                                    <SelectPark onSubmit={setCelda} data={data}/>
                                </Col>
                            </Form.Group>
                                <Button  className="btn btn-primary btn-block" variant="primary" type="submit">Agregar</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
            <Celdas data={data}/>
        </>
    );
}

export default Park;