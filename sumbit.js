import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Submit() {
  const location = useLocation();
  const { name, email, message } = location.state;

  return (
    <Container className="mt-5">
      <h1>Thank you, {name}!</h1>
      <center><p>Your message has been sent successfully.</p></center>
      <p>Details:</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </Container>
  );
}

export default Submit;