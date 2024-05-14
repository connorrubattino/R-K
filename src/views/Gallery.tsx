import Carousel from 'react-bootstrap/Carousel';
import img1 from '/src/assets/images/12.jpg';
import img2 from '/src/assets/images/30.jpg';
import img3 from '/src/assets/images/35.jpg';
import { Container } from 'react-bootstrap';

type Props = {}
export default function Gallery({}: Props) {
  return (
    <Container fluid style={{ backgroundColor: 'gray', minHeight: '100vh', minWidth: '100vh', padding: '0', margin: '0' }}>
        <h1 className='text-center text-white p-1'>Check out our work</h1>
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block mx-auto img-fluid"
            src={img1}
            alt="First slide"
            style={{ maxWidth: '70%' }}
            />
            <Carousel.Caption>
            <h3>Beams</h3>
            <p>Can put a caption here if we want to put a caption here</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block mx-auto img-fluid"
            src={img2}
            alt="Second slide"
            style={{ maxWidth: '70%' }}
            />
            <Carousel.Caption>
            <h3>Kitchen</h3>
            <p>Can put a caption here if we want to put a caption here</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block mx-auto img-fluid"
            src={img3}
            alt="Third slide"
            style={{ maxWidth: '70%' }}
            />
            <Carousel.Caption>
            <h3>Bathroom</h3>
            <p>Can put a caption here if we want to put a caption here</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </Container>
  )
}