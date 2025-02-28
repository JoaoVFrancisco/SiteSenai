import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Foto = () => {
  return (
    <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src="https://cbic.org.br/wp-content/uploads/2024/07/foto-renata-mello-scaled.jpg" thumbnail />
      </Col>
    </Row>
  </Container>
  )
}

export default Foto
