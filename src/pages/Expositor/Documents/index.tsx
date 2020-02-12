import React from 'react'
import { Row, Col, Typography } from 'antd'
import DownloadButton from './DownloadButton'

const { Title } = Typography

const Documents: React.FC = () => (
  <div>
    <Row type='flex' justify='space-around' align='middle' className='paddedRow'>
      <Col xs={24} className='docTypeTitle'>
        <Title level={4}>BROCHURE</Title>
      </Col>
      <Col xs={24}>
        <img
          style={{ maxWidth: '100%' }}
          src='/resources/img/brochure.png'
          alt='Portada Brochure Firan'
        />
      </Col>
      <Col xs={24} style={{ marginTop: '1rem' }}>
        <DownloadButton label='DESCARGA BROCHURE' />
      </Col>
    </Row>
    <Row type='flex' justify='space-around' align='middle' className='paddedRow'>
      <Col xs={24} style={{ marginTop: '2rem', marginBottom: '-1rem' }}>
        <Title level={4}>MANUAL</Title>
      </Col>
      <Col xs={24}>
        <img
          style={{ maxWidth: '90%' }}
          src='/resources/img/manual.png'
          alt='Portada Manual Firan'
        />
      </Col>
      <Col xs={24}>
        <DownloadButton label='DESCARGA MANUAL' />
      </Col>
    </Row>
  </div>
)

export default Documents
