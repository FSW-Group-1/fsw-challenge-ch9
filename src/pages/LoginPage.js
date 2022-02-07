import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, Card, CardBody, CardTitle,Row, Col} from 'reactstrap';
import Navbar from './partials/Navbar'




function LoginPage() {
  return (
    <>
      <Navbar />
      <Row className='justify-content-center'>
        <Col xs='11' sm='8' xl='5' className='text-center'>
          <Card className='mt-sm-4'
            
            style={{
              borderRadius: '10px'
            }}
          >
            <CardBody className='p-5'>
              <CardTitle tag='h2'>
                Login
              </CardTitle>
              <Form className='mt-5' inline>
                <FormGroup>
                  <Label
                    for="exampleEmail"
                    hidden
                  >
                    Email
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </FormGroup>
                {' '}
                <FormGroup>
                  <Label
                    for="examplePassword"
                    hidden
                  >
                    Password
                  </Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </FormGroup>
                <Button>
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
  </>
  );
}


export default LoginPage; 