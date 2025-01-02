import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.202028225266!2d91.7185034759975!3d22.496602035750076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2777a615585d%3A0xdcf908f6e4f3a713!2sInternational%20Islamic%20University%20Chittagong!5e0!3m2!1sen!2sbd!4v1719245354963!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              QuantsOfficial@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              01306704292
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              IIUC kumira, chittagong bangladesh 
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;