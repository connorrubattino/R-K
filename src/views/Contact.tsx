import Card from 'react-bootstrap/Card';


type Props = {}


export default function Contact({}: Props) {
  return (
    <>
    <Card className='card mt-5 card bg-white-transparent'>
      <Card.Header style={{ color: '#792E2F' }} className='text-center font-weight-bold' as="h2">Contact Us</Card.Header>
      <Card.Body>
        <Card.Title>Email</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Card.Title>Phone</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Card.Title>Houzz</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}