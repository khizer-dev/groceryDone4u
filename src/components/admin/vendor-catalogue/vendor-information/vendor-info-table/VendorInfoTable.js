import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./VendorInfoTable.style.css";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  Badge
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const VendorInfoTable = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Card>
        <CardHeader className="bg-green">Vendor Information</CardHeader>
        <CardBody>
          <div
            style={{
              maxWidth: "100%",
              overflowX: "scroll",
            }}
          >
            <Table bordered width="400">
              <thead>
                <tr>
                  <th>Check box</th>
                  <th>Seller code</th>
                  <th>Registerd by</th>
                  <th>Date of registration</th>
                  <th>User name</th>
                  <th>Business name</th>
                  <th>Company description</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Verified</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                  {['a','b','c'].map(r=> <tr>
                  <td>
                    <input type="checkbox" />
                    {"   "}Check me out
                  </td>
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
                  <td><Badge color="success">Success</Badge></td>
                  <td>
                    <FormControl className={classes.formControl}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        placeholder="select action"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Edit</MenuItem>
                        <MenuItem value={20}>View Full details</MenuItem>
                        <MenuItem value={30}>Warehouse details</MenuItem>
                        <MenuItem value={30}>Business details</MenuItem>
                        <MenuItem value={30}>Bank details</MenuItem>
                        <MenuItem value={30}>Allow forms</MenuItem>
                        <MenuItem value={30}>Vendor dispute</MenuItem>
                        <MenuItem value={30}>Categories details</MenuItem>
                        <MenuItem value={30}>Deactivate</MenuItem>
                        <MenuItem value={30}>Delete</MenuItem>
                        <MenuItem value={30}>Approve</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>)}
                
                {
                    // Edit

                    // View Full details
                    
                    // Warehouse details
                    
                    // Business details
                    
                    // Banks details
                    
                    // Allow forms
                    
                    // Vendors Dispute
                    
                    // Categories details
                    
                    // Products details
                    
                    // Deactivate
                    
                    // Delete
                    
                    // Approve
                    
                }
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default VendorInfoTable;
