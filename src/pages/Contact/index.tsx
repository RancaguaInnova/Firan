import React from 'react'
import './styles.css'
import { Link } from '@reach/router'
import { DefaultButton, IIconProps } from 'office-ui-fabric-react'
import {
  ContactSupportRounded,
  MailRounded,
  PermPhoneMsgRounded,
  GroupRounded
} from '@material-ui/icons'
import { registerIcons } from '@uifabric/styling'
import { Row } from 'react-bootstrap'

registerIcons({
  icons: {
    MdMail: <MailRounded className='iconColor' />,
    MdPhone: <PermPhoneMsgRounded className='iconColor' />
  }
})

const MdMail: IIconProps = { iconName: 'MdMail' }
const MdPhone: IIconProps = { iconName: 'MdPhone' }

const Contact: React.FC = () => {
  return (
    <div className='content'>
      <Link to='/'>
        <Row className='justify-content-md-center Menuheader'>
          <ContactSupportRounded className='menuIcons'></ContactSupportRounded>
          <div className='box'>Contacto</div>
        </Row>
      </Link>
      <h4 className='Title'>Información de Contacto</h4>
      <div className='Content'>
        <DefaultButton iconProps={MdMail} className='buttonContact'>
          feria@smart.rancagua.cl
        </DefaultButton>
      </div>
      <div className='Content'>
        <DefaultButton iconProps={MdPhone} className='buttonContact'>
          (+56)72 2 605 385
        </DefaultButton>
      </div>
      <div className='Content'>
        <div className='rowflex'>
          <div className='ColumnIcon'>
            <div className='IconGroup '>
              <GroupRounded className='GrupIcon'></GroupRounded>
            </div>
          </div>
          <div className='ColumnText'>
            <div className='ItemContact'>
              <span className='ItemContactTitle'>Director Ejecutivo</span>
              <span className='ItemContactContent'>Cristian Urrutia Soto</span>
              <span className='ItemContactContent'>cristian@smart.rancagua.cl</span>
            </div>
            <div className='ItemContact'>
              <span className='ItemContactTitle'>Productora Ejecutiva</span>
              <span className='ItemContactContent'>Sara Ramírez Cruz</span>
              <span className='ItemContactContent'>sara@smart.rancagua.cl</span>
            </div>
            <div className='ItemContact'>
              <span className='ItemContactTitle'>Secretaria</span>
              <span className='ItemContactContent'>Franchesca Lumuscio Cuadra</span>
              <span className='ItemContactContent'>franchesca@smart.rancagua.cl</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
