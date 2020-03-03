import React from 'react'
import { Row, Col } from 'antd'

import './styles.sass'

const PorqueExponer = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} className='section'>
          <div className='ExpositorCenter'>
            Es la instancia en donde convergen las distintas áreas economicas y sociales de la
            región, en un espacio multisectorial potenciando sus capacidades de desarrollo y
            poroductos de alto nivel, oportunidad de presentar las novedades al mercado nacional e
            internaciona. Esta versión apuesta por la innovación, la virtud a la reutilización y a
            pontenciar las capacidades de la comunidad.
          </div>
          <div className='ExpositorCenter' style={{ textDecoration: 'underline' }}>
            "Generar nuevas oportunidades de negocios y vínculos comerciales"
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24} className='section'>
          <div className='ExpositorCenter'>
            <img src='resources/img/infografia/2.svg' alt='IMAGES'></img>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24} className='section'>
          <div className='ExpositorCenter'>
            <img src='resources/img/infografia/1.svg' alt='IMAGES'></img>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24} className='section'>
          <div className='ExpositorCenter'>
            <img src='resources/img/infografia/3.svg' alt='IMAGES'></img>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24} className='section'>
          <div className='ExpositorCenter'>
            <img src='resources/img/infografia/4.svg' alt='IMAGES'></img>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default PorqueExponer
