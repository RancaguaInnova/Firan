import React, { lazy, useState } from 'react'
import './styles.sass'
import {
  PeopleRounded,
  AttachMoneyRounded,
  StoreRounded,
  CloudDownloadRounded
} from '@material-ui/icons'
import { Col, Collapse, Divider, Icon, Modal, Row, Typography } from 'antd'
import Expositores from './Lista'
import Stands from './stands'

const { Text, Title } = Typography

const Header = lazy(() => import('../../components/Header'))

const Expositor: React.FC = () => {
  const { Panel } = Collapse
  const [visible, setVisible] = useState(false)

  const customExpandIcon = (props: any) => {
    if (props.isActive) {
      return <Icon type='minus' />
    } else {
      return <Icon type='plus' />
    }
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  const handleDownload = () => {
    var tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = '/resources/img/infografia.jpg'
    tempLink.setAttribute('download', 'infografia firan 2019.jpg')

    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }

    document.body.appendChild(tempLink)
    tempLink.click()

    // Fixes "webkit blob resource error 1"
    setTimeout(function() {
      document.body.removeChild(tempLink)
      window.URL.revokeObjectURL('/resources/img/infografia.jpg')
    }, 0)
    setVisible(false)
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
              src='/resources/img/infografia.jpg'
              width='50%'
              alt='Infografia firan 2019'
              style={{ margin: '1rem 0' }}
              onClick={showModal}
            />
            <Modal
              title='Estudio de Impacto Firan 2019'
              visible={visible}
              onOk={handleDownload}
              onCancel={handleClose}
              okText='Descargar'
              cancelText='Cerrar'
            >
              <img
                src='/resources/img/infografia.jpg'
                alt='Infografia firan 2019'
                width='100%'
              ></img>
            </Modal>
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
            <div className='ContentExpositor'></div>
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
