import React, { lazy, useState } from 'react'
import './styles.sass'
import {
  PeopleRounded,
  AttachMoneyRounded,
  StoreRounded,
  CloudDownloadRounded
} from '@material-ui/icons'
import { Col, Collapse, Icon, Modal, Row } from 'antd'
import Expositores from './Lista'
import Stands from './Stands'
import Documents from './Documents'

const Header = lazy(() => import('../../components/Header'))

const Expositor: React.FC = () => {
  const { Panel } = Collapse
  const [modal, setModal] = useState({
    open: false,
    asset: '',
    title: ''
  })

  const customExpandIcon = (props: any) => {
    if (props.isActive) {
      return <Icon type='minus' />
    } else {
      return <Icon type='plus' />
    }
  }

  const handleClose = () => {
    setModal({ open: false, asset: '', title: '' })
  }

  const handleDownload = () => {
    var tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = `/resources/img/${modal.asset}.jpg`
    tempLink.setAttribute('download', `${modal.asset}.jpg`)

    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }

    document.body.appendChild(tempLink)
    tempLink.click()

    // Fixes "webkit blob resource error 1"
    setTimeout(function() {
      document.body.removeChild(tempLink)
      window.URL.revokeObjectURL(`/resources/img/${modal.asset}.jpg`)
    }, 0)
    handleClose()
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={{ span: 18, offset: 3 }}>
        <Header />
        <Row gutter={[64, 16]} style={{ marginTop: '2rem' }}>
          <Col xs={24} md={{ span: 18, offset: 3 }}>
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
                  poroductos de alto nivel, oportunidad de presentar las novedades al mercado
                  nacional e internaciona. Esta versión apuesta por la innovación, la virtud a la
                  reutilización y a pontenciar las capacidades de la comunidad.
                </div>
                <div className='ExpositorCenter' style={{ textDecoration: 'underline' }}>
                  "Generar nuevas oportunidades de negocios y vínculos comerciales"
                </div>
                <img
                  src='/resources/img/infografia.jpg'
                  width='50%'
                  alt='Infografia firan 2019'
                  style={{ margin: '1rem 0', boxShadow: '2px 4px 3px gray' }}
                  onClick={() =>
                    setModal({
                      open: true,
                      asset: 'infografia',
                      title: 'Estudio de Impacto Firan 2019'
                    })
                  }
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
                <Stands />
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
                      src='/resources/img/plano-firan.jpg'
                      alt='Plano firan 2020'
                      style={{ width: '100%', margin: '1rem 0', boxShadow: '2px 4px 3px gray' }}
                      onClick={() =>
                        setModal({
                          open: true,
                          asset: 'plano-firan',
                          title: 'Plano Firan 2020'
                        })
                      }
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
                <Documents />
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Col>
      <Modal
        title={modal.title}
        visible={modal.open}
        onOk={handleDownload}
        onCancel={handleClose}
        okText='Descargar'
        cancelText='Cerrar'
      >
        <img src={`/resources/img/${modal.asset}.jpg`} alt={`${modal.asset}`} width='100%'></img>
      </Modal>
    </Row>
  )
}

export default Expositor
