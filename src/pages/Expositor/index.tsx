import React from 'react'
import './styles.sass'
import {
  PeopleRounded,
  AttachMoneyRounded,
  StoreRounded,
  CloudDownloadRounded
} from '@material-ui/icons'
import { Collapse, Icon, Modal } from 'antd'
import Stands from './stands'
import Home from '../Home/'
import Header from '../../components/Header'

const Expositor: React.FC = () => {
  const { Panel } = Collapse
  const [visible, setVisible] = React.useState(false)

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
            header='Por qué Exponer?'
            key='1'
            extra={<PeopleRounded className='iconExtra' />}
            className='panel1'
          >
            <h4 className='TitleExpositor'>Por qué Exponer?</h4>
            <div className='ContentExpositor'>
              Es la instancia en donde convergen las distintas áreas economicas y sociales de la
              región, en un espacio multisectorial potenciando sus capacidades de desarrollo y
              poroductos de alto nivel, oportunidad de presentar las novedades al mercado nacional e
              internaciona. Esta versión apuesta por la innovación, la virtud a la reutilización y a
              pontenciar las capacidades de la comunidad.
            </div>
            <div className='ExpositorCenter'>
              "Generar nuevas oportunidades de negocios y vínculos comerciales"
            </div>
            <img
              src='/resources/img/infografia.jpg'
              width='50%'
              alt='Infografia firan 2019'
              onClick={showModal}
            ></img>
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
            showArrow={true}
            header='Quienes exponen?'
            key='2'
            extra={<AttachMoneyRounded className='iconExtra' />}
            className='panel2'
          >
            <h4 className='TitleExpositor'>Quienes exponen?</h4>
            <div className='ContentExpositor'></div>
          </Panel>
          <Panel
            showArrow={true}
            header='Valores Stands'
            key='3'
            extra={<StoreRounded className='iconExtra' />}
            className='panel3'
          >
            <Stands></Stands>
          </Panel>
          <Panel
            showArrow={true}
            header='Plano Ferial'
            key='4'
            extra={<CloudDownloadRounded className='iconExtra' />}
            className='panel4'
          >
            <h4 className='TitleExpositor'>Plano Ferial</h4>
            <div className='ContentExpositor'></div>
          </Panel>
          <Panel
            showArrow={true}
            header='Brochure'
            key='5'
            extra={<CloudDownloadRounded className='iconExtra' />}
            className='panel5'
          >
            <h4 className='TitleExpositor'>Brochure</h4>
            <div className='ContentExpositor'></div>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Expositor
