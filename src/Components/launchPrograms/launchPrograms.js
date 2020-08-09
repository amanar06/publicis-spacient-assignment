import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardImg, CardTitle,  } from "reactstrap";
import Filter from './filter'
import axios from 'axios'

function LaunchPrograms() {
  const [spacexData, setSpacexData] = useState([])
  const [year, setYear] = useState('')
  const [launchStatus, setLaunchStatus] = useState('')
  const [landStatus, setLandStatus] = useState('')
  useEffect(()=>{
    axios(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchStatus}&land_success=${landStatus}&launch_year=${year}`).then(res => {
        console.log(res.data)
        setSpacexData(res.data)
    })
  },[year, launchStatus, landStatus])

  return (
    <div style={{maxWidth: "1440px", margin: "0 auto"}}>
        <h3 className="p-2" style={{float: "left"}}>SpacEx Launch Programs</h3>
        <Row style={{width: "100%"}}>
            <Col lg={3}>
                <Filter year={year} changeYear={setYear} launchStatus={launchStatus} landStatus={landStatus} changeLaunchStatus={setLaunchStatus} changeLandStatus={setLandStatus} />
            </Col>
            <Col lg={9}>
                <Row className="p-2">
                    {spacexData.length>0 && spacexData.map((data, i) => (
                        <Col lg={3} md={6} className="mb-2 pb-2" key={i}>
                            <Card>
                                <div className="m-2">
                                <CardImg top width="100%" style={{backgroundColor: "#f4f4f4"}} src={data.links.mission_patch_small} alt={`${data.rocket.rocket_name} img`} />
                                </div>
                                <CardTitle style={{color: "rgb(65, 83, 146)"}} className="px-2">
                                    {`${data.mission_name} #${data.flight_number}`}
                                </CardTitle>
                                <div className={`mx-2 d-flex justify-content-start ${data.mission_id.length>0?null:'pb-3'}`}><b>Mission Ids:</b></div>
                                <li className="mx-2 d-flex justify-content-start">
                                    {data.mission_id.map((item, i) => (
                                        <ul key={i}>{item}</ul>    
                                    ))}
                                </li>
                                <p className="mx-2 d-flex"><b>Launch Year: {data.launch_year}</b></p>
                                <p className="mx-2 d-flex"><b>Successful Launch: {data.launch_success === null?'':data.launch_success.toString()}</b></p>
                                <p className="mx-2 d-flex"><b>Successful Landing: {data.rocket.first_stage.cores[0].land_success === null? '': data.rocket.first_stage.cores[0].land_success.toString()}</b></p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </div>
  );
}

export default LaunchPrograms;
