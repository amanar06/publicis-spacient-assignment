import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Input, Form, FormFeedback } from 'reactstrap'

function Filter({
    year,
    changeYear,
    launchStatus,
    landStatus,
    changeLaunchStatus,
    changeLandStatus,
    ...props
}) {
    const [inputYear, setInputYear] = useState('')
    const [invalid, setInvalid] = useState(false)
    const submitYear = (e) => {
        e.preventDefault()
        if((inputYear>2005 && inputYear<2021) || inputYear === '' ){
            setInvalid(false)
            changeYear(inputYear)
        }
        else{
            setInvalid(true)
        }
    }
    return (
        <div className="p-2">
            <Card>
                <CardBody>
                    <CardTitle className="d-flex justify-content-start">
                        FilteFs
                    </CardTitle>
                    <Form className="pb-2" onSubmit={(e)=>submitYear(e)}>
                        <Input type="text" placeholder="Launch Year" style={{borderWidth: "0 0 2px", borderColor: "#f4f4f4", boxShadow: "none" }} onChange={(e)=> setInputYear(e.target.value)} invalid={invalid}  />
                        <FormFeedback>Please Enter a valid year</FormFeedback>
                    </Form>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2006?'opacity-4':''}`} onClick={()=> year !== 2006?changeYear(2006):changeYear('')}>2006</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2007?'opacity-4':''}`} onClick={()=> year !== 2007?changeYear(2007):changeYear('')}>2007</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2008?'opacity-4':''}`} onClick={()=> year !== 2008?changeYear(2008):changeYear('')}>2008</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2009?'opacity-4':''}`} onClick={()=> year !== 2009?changeYear(2009):changeYear('')}>2009</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2010?'opacity-4':''}`} onClick={()=> year !== 2010?changeYear(2010):changeYear('')}>2010</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2011?'opacity-4':''}`} onClick={()=> year !== 2011?changeYear(2011):changeYear('')}>2011</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2012?'opacity-4':''}`} onClick={()=> year !== 2012?changeYear(2012):changeYear('')}>2012</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2013?'opacity-4':''}`} onClick={()=> year !== 2013?changeYear(2013):changeYear('')}>2013</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2014?'opacity-4':''}`} onClick={()=> year !== 2014?changeYear(2014):changeYear('')}>2014</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2015?'opacity-4':''}`} onClick={()=> year !== 2015?changeYear(2015):changeYear('')}>2015</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2016?'opacity-4':''}`} onClick={()=> year !== 2016?changeYear(2016):changeYear('')}>2016</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2017?'opacity-4':''}`} onClick={()=> year !== 2017?changeYear(2017):changeYear('')}>2017</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2018?'opacity-4':''}`} onClick={()=> year !== 2018?changeYear(2018):changeYear('')}>2018</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2019?'opacity-4':''}`} onClick={()=> year !== 2019?changeYear(2019):changeYear('')}>2019</Button></Col>
                    </Row>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${year !== 2020?'opacity-4':''}`} onClick={()=> year !== 2020?changeYear(2020):changeYear('')}>2020</Button></Col>
                    </Row>
                    <CardSubtitle className="pt-3 mb-2" style={{borderBottom: "2px solid #f4f4f4"}} >
                        Successful Launch
                    </CardSubtitle>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${launchStatus !== "true"?'opacity-4':''}`} onClick={()=>launchStatus !== 'true'?changeLaunchStatus('true'):changeLaunchStatus('')}>True</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${launchStatus !== "false"?'opacity-4':''}`} onClick={()=>launchStatus !== 'false'?changeLaunchStatus('false'):changeLaunchStatus('')}>False</Button></Col>
                    </Row>
                    <CardSubtitle className="pt-3 mb-2" style={{borderBottom: "2px solid #f4f4f4"}}>
                        Successful Landing
                    </CardSubtitle>
                    <Row className="pb-1">
                        <Col xs={6}><Button color="success" className={`shadow-none ${landStatus !== "true"?'opacity-4':''}`} onClick={()=>landStatus !== 'true' ? changeLandStatus('true'):changeLandStatus('')}>True</Button></Col>
                        <Col xs={6}><Button color="success" className={`shadow-none ${landStatus !== "false"?'opacity-4':''}`} onClick={()=>landStatus !== "false"?changeLandStatus('false'):changeLandStatus('')}>False</Button></Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default Filter
