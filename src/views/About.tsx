import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


type Props = {}
export default function About({ }: Props) {


    return (
        <>
            <Container className='custom-container'>
                <Row>
                    <Col className="custom-col" md={6}>
                        <Card style={{ width: '100%' }} className="mt-5 card bg-white-transparent">
                            <Card.Body>
                                <Card.Title style={{ color: '#792E2F' }} className='text-center'>R&K</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted text-center">40 years of quality</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="custom-col" md={6}>
                        <Card style={{ width: '100%' }} className="mt-5 card bg-white-transparent">
                            <Card.Body>
                                <Card.Title style={{ color: '#792E2F' }} className='text-center'>The Crew</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted text-center">Tenure that shows</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}