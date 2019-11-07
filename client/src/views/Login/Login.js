import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import axios from 'axios';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Login() {
  
  const classes = useStyles();
  
  const email = "imu@i.com";
  const password = "123";
  
  
  function submit() {

    // call api to register user
    axios.post('http://localhost:3000/auth/login', {email: email, password: password})
      .then(res => {
		  
		console.log("--- Login Response ---");
		console.log(res.data);
		setToken(res.data.token);
		
		//const persons = res.data;
        //this.setState({ persons });
        
      })

  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} >
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Login</h4>
              <p className={classes.cardCategoryWhite}>Login to buy or sell!</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
               
               
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email address"
                    id="email"
                    inputProps={{ 
                      type: 'email'
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    inputProps={{ 
                      type: 'password'
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                
               
              </GridContainer>
              
              
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={submit}>Login</Button>
            </CardFooter>
          </Card>
        </GridItem>


      </GridContainer>
    </div>
  );
}
