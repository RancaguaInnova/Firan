import React from 'react'
import { Popover, Button, Menu } from 'evergreen-ui'
import './styles.css'
import { MdFingerprint } from 'react-icons/md'
import { FiUsers, FiUserCheck, FiList } from 'react-icons/fi'
import { GiNewspaper } from 'react-icons/gi'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { FaInfoCircle } from 'react-icons/fa'
import { Link } from '@reach/router'

const MenuComponent: React.FC = () => {
  return (
    <Popover
      minWidth='100%'
      position={'bottom'}
      content={
        <Menu>
          <Link to='/registro'>
            <Menu.Item className='menuItems'>
              <FiUserCheck className='menuIcons' />
              <span className='menuItem'>REGISTRATE</span>{' '}
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/informacion'>
            <Menu.Item className='menuItems'>
              <FaInfoCircle className='menuIcons' />
              <span className='menuItem'>INFORMACIÓN</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/expositores'>
            <Menu.Item className='menuItems'>
              <FiUsers className='menuIcons' />
              <span className='menuItem'>EXPOSITORES</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/actividades'>
            <Menu.Item className='menuItems'>
              <FiList className='menuIcons' />
              <span className='menuItem'>ACTIVIDADES</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/noticias'>
            <Menu.Item className='menuItems'>
              <GiNewspaper className='menuIcons' />
              <span className='menuItem'>NOTICIAS</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/contacto'>
            <Menu.Item className='menuItems'>
              <AiFillQuestionCircle className='menuIcons' />
              <span className='menuItem'>CONTACTO</span>
            </Menu.Item>
          </Link>
        </Menu>
      }
    >
      <Button className='ButtonMenu' height={64}>
        MENU <MdFingerprint className='iconButton'></MdFingerprint>
      </Button>
    </Popover>
  )
}

export default MenuComponent
