import {Row, Card, Col, Form, Button} from 'react-bootstrap'


function SelectPark(){
    return(
        <select class="form-control" id="exampleFormControlSelect1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
    )
}

function Celdas(){
    return(
        <Row className="row-header">
                <Col sm="3" className="mt-5">
                    <Card className="celda">
                        <Card.Title align="center">Celda: 1</Card.Title>
                        <Card.Body>
                            <Card.Text><b>Placa:</b> YCP39E</Card.Text>
                            <Card.Text><b>Fecha:</b> 2020-01-08</Card.Text>
                            <Button type="button" className="btn btn-danger">Finalizar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="3" className="mt-5">
                    <Card className="celda">
                        <Card.Title align="center">Celda: 1</Card.Title>
                        <Card.Body>
                            <Card.Text><b>Placa:</b> YCP39E</Card.Text>
                            <Card.Text><b>Fecha:</b> 2020-01-08</Card.Text>
                            <Button type="button" className="btn btn-danger">Finalizar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="3" className="mt-5">
                    <Card className="celda">
                        <Card.Title align="center">Celda: 1</Card.Title>
                        <Card.Body>
                            <Card.Text><b>Placa:</b> YCP39E</Card.Text>
                            <Card.Text><b>Fecha:</b> 2020-01-08</Card.Text>
                            <Button type="button" className="btn btn-danger">Finalizar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="3" className="mt-5">
                    <Card className="celda">
                        <Card.Title align="center">Celda: 1</Card.Title>
                        <Card.Body>
                            <Card.Text><b>Placa:</b> YCP39E</Card.Text>
                            <Card.Text><b>Fecha:</b> 2020-01-08</Card.Text>
                            <Button type="button" className="btn btn-danger">Finalizar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="3" className="mt-5">
                    <Card className="celda">
                        <Card.Title align="center">Celda: 1</Card.Title>
                        <Card.Body>
                            <Card.Text><b>Placa:</b> YCP39E</Card.Text>
                            <Card.Text><b>Fecha:</b> 2020-01-08</Card.Text>
                            <Button type="button" className="btn btn-danger">Finalizar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="3" className="mt-5">
                    <Card className="celda">
                        <Card.Title align="center">Celda: 1</Card.Title>
                        <Card.Body>
                            <Card.Text><b>Placa:</b> YCP39E</Card.Text>
                            <Card.Text><b>Fecha:</b> 2020-01-08</Card.Text>
                            <Button type="button" className="btn btn-danger">Finalizar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    )
}
function Park(){
    return(
        <>
            <Row className="justify-content-md-center row-header">
                <Card className="objecto">
                    <Card.Title align="center">Bienvenidos al parqueadero central</Card.Title>
                    <Card.Body>
                        <Form>
                            <Form.Group as={Row} className="mb-4" controlId="FormPlaca">
                                <Form.Label column sm="2">Placa</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="type" placeholder="Placa" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-4" controlId="FormCelda">
                                <Form.Label column sm="2">Celda</Form.Label>
                                <Col sm="10">
                                    <SelectPark />
                                </Col>
                            </Form.Group>
                                <Button  align="center" variant="primary" type="submit">Agregar</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
            <Celdas/>
        </>
    );
}

export default Park;