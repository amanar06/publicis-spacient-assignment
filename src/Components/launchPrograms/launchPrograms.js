import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Filter from './filter'

function launchPrograms() {
  return (
    <div>
        <h3 className="p-2" style={{float: "left"}}>SpacEx Launch Programs</h3>
        <Row style={{width: "100%"}}>
            <Col lg={3}>
                <Filter />
            </Col>
        </Row>
    </div>
  );
}

export default launchPrograms;
