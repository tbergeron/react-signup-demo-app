import './App.css';
import { SignupForm } from './SignupForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center gx-5">
        <Col xs={12} lg={5}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="text-white">
              <h2 className="my-4">FUCK YOU, FUCK YOU, FUCK YOU, FUCK YOU, FUCK YOU, FUCK YOU!</h2>
              <p>Magna velit incididunt consequat commodo eiusmod veniam adipisicing do pariatur. Magna velit incididunt consequat commodo eiusmod veniam adipisicing do pariatur.</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
