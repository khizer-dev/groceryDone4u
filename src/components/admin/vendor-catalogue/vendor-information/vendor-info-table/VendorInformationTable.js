import React,{Fragment} from 'react';
import {Container , Row , Col, Table , Card , CardBody} from 'reactstrap';
import './VendorInformationTable.style.css';

const VendorInformationTable = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="scroll-x-auto">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <td>Check box</td>
                                    <td>Seller code</td>
                                    <td>Registerd by</td>
                                    <td>Date of registration</td>
                                    <td>User name</td>
                                    <td>Business name</td>
                                    <td>Company description</td>
                                    <td>Email</td>
                                    <td>Password</td>
                                    <td>Verified</td>
                                    <td>Image</td>
                                    <td>Status</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default VendorInformationTable
