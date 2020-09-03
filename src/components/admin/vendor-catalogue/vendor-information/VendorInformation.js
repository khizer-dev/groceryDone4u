import React, { Fragment } from "react";
import { Container, Row,Col ,  Button, Card } from "reactstrap";
import vendorInfoTable from "./vendor-info-table/VendorInformationTable";

const VendorInformation = () => {
  return (
    <Fragment>
      <Container>
        <Card>
          <Row>
            <Row>
              <Col>
                <Button>Add vendor</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <VendorInformation />
              </Col>
            </Row>
          </Row>
        </Card>
      </Container>
    </Fragment>
  );
};

export default VendorInformation;
