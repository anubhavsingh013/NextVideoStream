import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>
        We value your feedback and are here to assist you with any questions or concerns you may have. 
        Please use the form below to get in touch with us.
      </p>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
