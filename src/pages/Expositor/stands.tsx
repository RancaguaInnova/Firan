import React from 'react'
import { Row, Col } from 'antd'
const Stands = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h4 className='TitleExpositor'>Valores Stants</h4>
          <Row>
            <Col span={12} className='celesteTitle'>
              Dimensiones
            </Col>
            <Col span={12} className='celesteTitle'>
              Valores Uf *
            </Col>
          </Row>
          <Row className='celeste'>
            <Col span={12}>Stand 6mt&#178;</Col>
            <Col span={12}>Valores Uf</Col>
          </Row>
          <Row className='celeste'>
            <Col span={12}>Dimensiones</Col>
            <Col span={12}>Valores Uf</Col>
          </Row>
        </Col>
        <Col span={12}>
          {' '}
          <h4 className='TitleExpositor'>Tipos Stants</h4>
        </Col>
      </Row>
    </div>
  )
}
export default Stands
