import Carousel from 'react-bootstrap/Carousel';
import img1 from '/src/assets/images/12.jpg';
import img2 from '/src/assets/images/30.jpg';
import img3 from '/src/assets/images/35.jpg';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

type Props = {}
export default function Gallery({}: Props) {

    useEffect(() => {
        document.body.classList.add('gallery-page');
        return () => {
          document.body.classList.remove('gallery-page');
        };
      }, []);

  return (
    <Container fluid style={{minHeight: '100vh', minWidth: '100vh', padding: '0', margin: '0' }}>
        <h1 style={{ color: '#792E2F' }} className='p-1 text-center'>Check out our work</h1>
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block mx-auto img-fluid rounded"
            src={img1}
            alt="First slide"
            style={{ maxWidth: '70%' }}
            />
            <Carousel.Caption>
            {/* <h3>Beams</h3>
            <p>Can put a caption here if we want to put a caption here</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block mx-auto img-fluid rounded"
            src={img2}
            alt="Second slide"
            style={{ maxWidth: '70%' }}
            />
            <Carousel.Caption>
            {/* <h3>Kitchen</h3>
            <p>Can put a caption here if we want to put a caption here</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block mx-auto img-fluid rounded"
            src={img3}
            alt="Third slide"
            style={{ maxWidth: '70%' }}
            />
            <Carousel.Caption>
            {/* <h3>Bathroom</h3>
            <p>Can put a caption here if we want to put a caption here</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </Container>
  )
}