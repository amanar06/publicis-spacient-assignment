import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Input, Form, FormFeedback } from 'reactstrap'

function filter() {
    return (
        <div className="p-2">
            <Card>
                <CardBody>
                    <CardTitle className="d-flex justify-content-start">
                        Filters
                    </CardTitle>
                    <Form className="pb-2">
                        <Input type="text" placeholder="Enter Year" style={{borderWidth: "0 0 2px", borderColor: "#f4f4f4", boxShadow: "none" }} />
                        <FormFeedback>Please Enter a valid year</FormFeedback>
                    </Form>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">2006</Button></Col>
                        <Col sm={6}><Button color="success">2007</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">2007</Button></Col>
                        <Col sm={6}><Button color="success">2008</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">2009</Button></Col>
                        <Col sm={6}><Button color="success">2010</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">2011</Button></Col>
                        <Col sm={6}><Button color="success">2012</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">2013</Button></Col>
                        <Col sm={6}><Button color="success">2014</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">2015</Button></Col>
                        <Col sm={6}><Button color="success">2016</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">2017</Button></Col>
                        <Col sm={6}><Button color="success">2018</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">2019</Button></Col>
                        <Col sm={6}><Button color="success">2020</Button></Col>
                    </Row>
                    <CardSubtitle className="pt-1 mb-2" style={{borderBottom: "2px solid #f4f4f4"}} >
                        Successful Launch
                    </CardSubtitle>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">True</Button></Col>
                        <Col sm={6}><Button color="success">False</Button></Col>
                    </Row>
                    <CardSubtitle className="pt-1 mb-2" style={{borderBottom: "2px solid #f4f4f4"}}>
                        Successful Landing
                    </CardSubtitle>
                    <Row className="pb-1">
                        <Col sm={6}><Button color="success">True</Button></Col>
                        <Col sm={6}><Button color="success">False</Button></Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default filter
