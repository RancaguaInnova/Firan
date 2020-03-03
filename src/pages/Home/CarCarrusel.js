import React from 'react'
import { Row, Col, Typography } from 'antd'
import Carousel from 'react-material-ui-carousel'
import './carrusel.sass'

const { Title } = Typography
const Car = () => {
  const items = [
    {
      name: 'Random Name #1',
      imagen: `/resources/img/logos/1.svg`
    },
    {
      name: 'Random Name #2',
      imagen: `/resources/img/logos/2.png`
    }
  ]
  return (
    <Row>
      <Col span={24} className='section'>
        <Carousel
          indicators={false}
          autoPlay={true}
          interval={2000}
          animation='fade'
          className='CamionBack'
        >
          {items.map(item => {
            return (
              <img
                className='imagenCarrusel'
                key={item.name}
                src={item.imagen}
                alt={item.name}
              ></img>
            )
          })}
        </Carousel>
      </Col>
    </Row>
  )
}
export default Car
