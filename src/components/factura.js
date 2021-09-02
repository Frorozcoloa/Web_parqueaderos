
import {Row, Col, Card, ListGroup, Button} from 'react-bootstrap'
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { FaSpinner } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';



function Factura(props){
    const[data, setData] = useState(null)
    const { id } = props.match.params;
    let History = useHistory()
    const retirarHandle = (id) =>{
        deleteVehi(id)
    }
    const deleteVehi= async(celda)=>{
        await axios.delete(`http://localhost:8000/${celda}`, {'celda': celda})
        .then(res=> History.push('/'))
        }
    
    const getPrecio= async()=>{
        await axios.get(`http://localhost:8000/precio/${id}`)
        .then(res=> setData(res.data))
        }
    useEffect(()=>{
        getPrecio()
    },[])
    if(data){
        return(
            <Row >
                <Col sm={8} className="facura">
                    <Card style={{ width: '30rem', margin: "10rem 15rem"}}>
                        <ListGroup variant="flush">
                            <ListGroup.Item><h5>Parqueadero el centro</h5></ListGroup.Item>
                            <ListGroup.Item>Placa: {data.placa} </ListGroup.Item>
                            <ListGroup.Item>Celda: {id}</ListGroup.Item>
                            <ListGroup.Item>Fecha Ingreso: {data.fecha_in}</ListGroup.Item>
                            <ListGroup.Item>Fecha Salida: {data.fecha_out} </ListGroup.Item>
                            <ListGroup.Item><h6>Total: ${data.total}</h6></ListGroup.Item>
                        </ListGroup>
                        <Button type="button" className="btn btn-success" onClick={()=>retirarHandle(id)}>Retirar</Button>
                    </Card>   
                </Col>
            </Row>
    )
    }
    else{
        return(
            <Row>
                 <Col sm={8} className="facura">
                    <FaSpinner />
                </Col>
            </Row>    
        )
    }
    
}
export default Factura;