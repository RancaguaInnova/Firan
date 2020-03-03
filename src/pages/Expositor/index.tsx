import React, { lazy, useState, useEffect } from 'react'

import { Col, Modal, Row } from 'antd'
import Expositores from './Lista'
import Stands from './Stands'
import Documents from './Documents'
import PorqueExponer from './PorqueExponer'

import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import './styles.sass'

AOS.init({ delay: 6 })
const Header = lazy(() => import('../../components/Header'))
const Footer = lazy(() => import('../../components/Footer'))

const Expositor: React.FC = () => {
  useEffect(() => {
    AOS.init({ delay: 6 })
  }, [])

  const [modal, setModal] = useState({
    open: false,
    asset: '',
    title: ''
  })

  const [modal1, setModal1] = useState({
    open: false,
    asset: '',
    title: ''
  })

  const [modal2, setModal2] = useState({
    open: false,
    asset: '',
    title: ''
  })

  const [modal3, setModal3] = useState({
    open: false,
    asset: 'plano-firan',
    title: ''
  })

  const [modal4, setModal4] = useState({
    open: false,
    asset: '',
    title: ''
  })

  const [modal5, setModal5] = useState({
    open: false,
    asset: '',
    title: ''
  })

  const handleClose = () => {
    setModal({ open: false, asset: '', title: '' })
  }

  const handleDownload = (asset: string) => {
    var tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = `/resources/img/${asset}.jpg`
    tempLink.setAttribute('download', `${asset}.jpg`)

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
    <div>
      <div>
        <Header></Header>
      </div>
      <div className='boxes'>
        <div
          className='boxExpositor animated  fadeInDown delay-0s'
          onClick={() => setModal({ open: true, asset: '', title: '' })}
        >
          <img src='/resources/img/por que_.png' alt='por que' className='boxImage'></img>
          <div className='textBoxExpositor'>Por qué Exponer ?</div>
        </div>

        <Modal
          title='¿Por qué Exponer?'
          centered
          visible={modal.open}
          onOk={() => setModal({ open: false, asset: '', title: '' })}
          okText='Cerrar'
          onCancel={() => setModal({ open: false, asset: '', title: '' })}
          cancelButtonProps={{ style: { display: 'none' } }}
        >
          <PorqueExponer></PorqueExponer>
        </Modal>

        <div
          className='boxExpositor animated  fadeInDown delay-1s'
          onClick={() => setModal1({ open: true, asset: '', title: '' })}
        >
          <img src='/resources/img/exponen.png' alt='quienes exponen' className='boxImage'></img>
          <div className='textBoxExpositor'>Quienes exponen?</div>
        </div>

        <Modal
          title='¿Quienes exponen?'
          centered
          visible={modal1.open}
          okText='Cerrar'
          onOk={() => setModal1({ open: false, asset: '', title: '' })}
          onCancel={() => setModal1({ open: false, asset: '', title: '' })}
          cancelButtonProps={{ style: { display: 'none' } }}
        >
          <div className='ExpositorCenter'>
            <Expositores />
          </div>
        </Modal>

        <div
          className='boxExpositor animated  fadeInDown delay-2s'
          onClick={() => setModal2({ open: true, asset: '', title: '' })}
        >
          <img src='/resources/img/stand.png' alt='Valores Stands' className='boxImage'></img>
          <div className='textBoxExpositor'>Valores Stands</div>
        </div>
        <Modal
          title='Valores Stands'
          centered
          visible={modal2.open}
          okText='Cerrar'
          onOk={() => setModal2({ open: false, asset: '', title: '' })}
          onCancel={() => setModal2({ open: false, asset: '', title: '' })}
          cancelButtonProps={{ style: { display: 'none' } }}
        >
          <div className='ExpositorCenter'>
            <Stands />
          </div>
        </Modal>

        <div
          className='boxExpositor  animated  fadeInDown delay-3s'
          onClick={() => setModal3({ open: true, asset: '', title: '' })}
        >
          <img src='/resources/img/plano.png' alt='Plano Ferial' className='boxImage'></img>
          <div className='textBoxExpositor'>Plano Ferial</div>
        </div>
        <Modal
          title='Plano Ferial'
          centered
          visible={modal3.open}
          onCancel={() => setModal3({ open: false, asset: '', title: '' })}
          onOk={() => handleDownload('plano-firan')}
          okText='Descargar Plano Firan'
          cancelText='Cerrar'
        >
          <div className='ExpositorCenter'>
            <Row>
              <Col xs={24}>
                <img
                  src='/resources/img/plano-firan.jpg'
                  alt='Plano firan 2020'
                  style={{ width: '100%', margin: '1rem 0', boxShadow: '2px 4px 3px gray' }}
                />
              </Col>
            </Row>
          </div>
        </Modal>

        <div
          className='boxExpositor  animated  fadeInDown delay-4s'
          onClick={() => setModal4({ open: true, asset: '', title: '' })}
        >
          <img src='/resources/img/descarga.png' alt='Documentos' className='boxImage'></img>
          <div className='textBoxExpositor'>Documentos</div>
        </div>
        <Modal
          title='Documentos'
          centered
          visible={modal4.open}
          onOk={() => setModal4({ open: false, asset: '', title: '' })}
          onCancel={() => setModal4({ open: false, asset: '', title: '' })}
          cancelButtonProps={{ style: { display: 'none' } }}
          okText='Cerrar'
        >
          <div className='ExpositorCenter'>
            <Documents />
          </div>
        </Modal>
        <div
          className='boxExpositor  animated  fadeInDown delay-5s '
          onClick={() => setModal5({ open: true, asset: '', title: '' })}
        >
          <img src='/resources/img/contáctanos.png' alt='Contáctanos' className='boxImage'></img>
          <div className='textBoxExpositor'>Contáctanos</div>
        </div>
        <Modal
          title='Contáctanos'
          centered
          visible={modal5.open}
          onOk={() => setModal5({ open: false, asset: '', title: '' })}
          onCancel={() => setModal5({ open: false, asset: '', title: '' })}
          cancelButtonProps={{ style: { display: 'none' } }}
          okText='Cerrar'
        >
          <div className='ExpositorCenter'>
            <Row gutter={[16, 16]} className='flexRow'>
              <Col span={24} className='contactoImage'>
                <img
                  src={`/resources/img/contacto FIRAN 2020-02.png`}
                  alt=''
                  style={{ width: '33%' }}
                ></img>
              </Col>
            </Row>
            <Row gutter={[16, 16]} className='flexRow'>
              <Col span={4}>
                <img
                  src={`/resources/img/iconos footer 2-06.png`}
                  alt=''
                  style={{ width: '80%' }}
                ></img>
              </Col>

              <Col span={20} className='contactoText'>
                <a href='mailto:feria@smart.rancagua.cl' target='_top'>
                  feria@smart.rancagua.cl
                </a>
              </Col>
            </Row>

            <Row gutter={[16, 16]} className='flexRow'>
              <Col span={4}>
                <img
                  src={`/resources/img/iconos footer 2-07.png`}
                  alt=''
                  style={{ width: '80%' }}
                ></img>
              </Col>

              <Col span={20} className='contactoText'>
                <a href='tel:+56722605385' target='_top'>
                  (+56) 72 2 605 385
                </a>
              </Col>
            </Row>

            {/* <Row gutter={[16, 16]} className='flexRow'>
              <Col span={24} className='titleContact'>
                Productora Ejecutiva
              </Col>
            </Row>
            <Row gutter={[16, 16]} className='flexRow'>
              <Col span={24} className='contactoTextCenter'>
                <a href='mailto:sara@smart.rancagua.cl' target='_top'>
                  Sara Ramirez Cruz
                </a>
              </Col>
            </Row>
            <Row gutter={[16, 16]} className='flexRow'>
              <Col span={24} className='contactoTextCenter'>
                <a href='mailto:sara@smart.rancagua.cl' target='_top'>
                  sara@smart.rancagua.cl
                </a>
              </Col>
            </Row> */}
          </div>
        </Modal>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Expositor
