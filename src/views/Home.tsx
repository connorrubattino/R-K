import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

type HomeProps = {}

export default function Home({}: HomeProps) {
  return (
    <Card className="card bg-white-transparent border-0 text-center mt-5 text-dark font-weight-bold">
      <Card.Header><h1 style={{ color: '#792E2F' }} >Welcome to R&K Construction</h1></Card.Header>
      <Card.Body>
        <Card.Title ><h3>Sonoma County's premium high end interior finishers</h3></Card.Title>
        <Card.Text className='pb-5' >
          Check out our gallery of some of our previous projects and feel free to reach out with inquiries.
        </Card.Text>
        <Link to={`/gallery`}><Button className='w-75' variant="dark">View Gallery</Button></Link>
      </Card.Body>
    </Card>
  )
}