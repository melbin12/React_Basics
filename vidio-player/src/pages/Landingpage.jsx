import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function Landingpage() {
  return (
    <>
    <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
    <Col></Col>
      <Col lg={5}>
        <h3>Welcom to <span className='text-warning'>Media Player</span></h3>
        <p className='mt-3' style={{textAlign:'justify'}}>The word 'lorem', for example, isn't a real Latin word, it's a shortened version of the word 
        'dolorem', meaning pain. This makes the current dummy text impossible to translate into English</p>
        <button className='mt-5 btn btn-warning'>Get Started<i class="fa-solid fa-arrow-right ms-2"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
      </Col>
    </Row>

    <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column'>
      <h3 className='mb-5'>Featueres</h3>
      <div className='cards d-flex justify-content-evenly align-items-center w-100'>
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Vidio</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='p-4'  style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Vidio</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{height:'300px',width:'100%'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Wtch Historty</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    </>
  )
}
