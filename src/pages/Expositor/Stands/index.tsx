import React from 'react'
import { Row, Col, Typography } from 'antd'
import './styles.sass'

const { Title } = Typography

const Stands = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} className='section'>
        <img
          style={{ maxWidth: '100%' }}
          src='/resources/img/tabla-valores.png'
          alt='Tabla de valores'
        />
      </Col>
      <Col span={24} className='section'>
        <Title level={4} style={{ color: '#006787' }}>
          TIPOS DE STAND:
        </Title>
        <img style={{ maxWidth: '100%' }} src='/resources/img/modulado.png' alt='Stand Modulado' />
      </Col>
      <Col span={24} className='section'>
        <img
          style={{ maxWidth: '100%' }}
          src='/resources/img/no-modulado.png'
          alt='Stand No Modulado'
        />
      </Col>
      <Col span={24} className='section'>
        <img style={{ maxWidth: '100%' }} src='/resources/img/especial.png' alt='Stand Especial' />
      </Col>
    </Row>
  )
}
export default Stands
