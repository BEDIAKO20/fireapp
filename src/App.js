
import './App.css';
import {Nav,Navbar,Container, Row, Col} from  "react-bootstrap"
import BookList from './components/BookList';
import AddBook from './components/AddBook';


function App() {
  return (
    <div>
   <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
          <AddBook/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Col>
        <BookList/>
        </Col>
      </Container>

    </div>
  );
}

export default App;
