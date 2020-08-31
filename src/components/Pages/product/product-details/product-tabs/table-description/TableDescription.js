import React, { Fragment } from "react";
import { Table } from "reactstrap";
import './TableDescription.style.css'

const TableDescription = () => {
  return (
    <Fragment>
      <Table hover responsive>
        <tbody>
          <tr>
            <td > Brand Name: <span>Lenovo B41-80 Black 14" Core i5</span></td>
            {/* <td>Dimensions: <span>385 x 271 x 25.8 mm</span></td> */}
          </tr>
          <tr>
            <td> Port: <span>Card Reader,1*USB3.1 Type-C,HDMI,3.5 mm Mic</span></td>
            {/* <td> Feature: <span>Camera,Backlit keyboard</span></td> */}
          </tr>
          <tr>
            <td> Average Battery Life(in hours): <span>2-5</span></td>
            {/* <td> Graphics Card Type: <span>Dedicated Card</span></td> */}
          </tr>
          <tr>
            <td> Processor Main Frequency: <span>2.80GHz</span></td>
            {/* <td> Graphics Card Brand: <span>Nvidia</span></td> */}
          </tr>
          <tr>
          <td> Graphics Card Brand: <span>Nvidia</span></td>
            {/* <td> Graphics Card Brand: <span>Nvidia</span></td> */}
          </tr>
          <tr>
            <td> Processor Main Frequency: <span>2.80GHz</span></td>
            {/* <td> Graphics Card Brand: <span>Nvidia</span></td> */}
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default TableDescription;
