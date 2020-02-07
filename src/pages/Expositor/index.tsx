import React, { lazy, useState } from 'react'
import './styles.sass'
import {
  PeopleRounded,
  AttachMoneyRounded,
  StoreRounded,
  CloudDownloadRounded
} from '@material-ui/icons'
import { Col, Collapse, Icon, Row, Typography } from 'antd'
import Expositores from './Lista'
import Stands from './stands'
import DownloadModal from 'components/DownloadModal'

const { Text, Title } = Typography

const Header = lazy(() => import('../../components/Header'))

const Expositor: React.FC = () => {
  const { Panel } = Collapse
  const [modal, setModal] = useState({ open: false, asset: '' })

  const customExpandIcon = (props: any) => {
    if (props.isActive) {
      return <Icon type='minus' />
    } else {
      return <Icon type='plus' />
    }
  }

  return (
    <div>
      <Header />

      <div className='container'>
        <Collapse
          defaultActiveKey={['1']}
          expandIconPosition='right'
          expandIcon={(props: any) => customExpandIcon(props)}
          accordion
        >
          <Panel
            showArrow
            header='¿Por qué Exponer?'
            key='1'
            extra={<PeopleRounded className='iconExtra' />}
            className='panel1'
          >
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
            <img
              src='/resources/img/infografia-firan-2019.jpg'
              width='50%'
              alt='Infografia firan 2019'
              style={{ margin: '1rem 0' }}
              onClick={() => setModal({ open: true, asset: 'infografia-firan-2019.jpg' })}
            />
          </Panel>
          <Panel
            showArrow
            header='¿Quienes exponen?'
            key='2'
            extra={<AttachMoneyRounded className='iconExtra' />}
            className='panel2'
          >
            <div className='ContentExpositor'>
              <Expositores />
            </div>
          </Panel>
          <Panel
            showArrow
            header='Valores Stands'
            key='3'
            extra={<StoreRounded className='iconExtra' />}
            className='panel3'
          >
            <Stands></Stands>
          </Panel>
          <Panel
            showArrow
            header='Plano Ferial'
            key='4'
            extra={<CloudDownloadRounded className='iconExtra' />}
            className='panel4'
          >
            <Row>
              <Col xs={24}>
                <img
                  style={{ maxWidth: '100%' }}
                  src='/resources/img/plano-feria.jpg'
                  alt='Plano Firan 2020'
                />
              </Col>
            </Row>
          </Panel>
          <Panel
            showArrow
            header='Documentación'
            key='5'
            extra={<CloudDownloadRounded className='iconExtra' />}
            className='panel5'
          >
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
                <Row type='flex' justify='space-around' align='middle' className='downloadButton'>
                  <Col xs={8} className='downloadIcon'>
                    <Icon type='cloud-download' theme='outlined' />
                  </Col>
                  <Col xs={16} className='buttonLabel'>
                    <Text strong>DESCARGA BROCHURE</Text>
                  </Col>
                </Row>
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
                <Row type='flex' justify='space-around' align='middle' className='downloadButton'>
                  <Col xs={8} className='downloadIcon'>
                    <Icon type='cloud-download' theme='outlined' />
                  </Col>
                  <Col xs={16} className='buttonLabel'>
                    <Text strong>DESCARGA MANUAL</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Expositor
