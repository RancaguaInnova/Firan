import React from 'react'
import { Popover, Button, Menu } from 'evergreen-ui'
import './styles.css'
import { MdFingerprint } from 'react-icons/md'
import {
  HowToRegRounded,
  InfoRounded,
  PeopleRounded,
  FormatListBulletedRounded,
  LibraryBooksRounded,
  ContactSupportRounded
} from '@material-ui/icons'
import { Link } from '@reach/router'

const MenuComponent: React.FC = () => {
  return (
    <Popover
      minWidth='100%'
      position={'bottom'}
      content={({ close }) => (
        <Menu>
          <Link to='/registro' onClick={close}>
            <Menu.Item className='menuItems'>
              <HowToRegRounded className='menuIcons' width={48} />
              <span className='menuItem'>REGISTRATE</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/informacion' onClick={close}>
            <Menu.Item className='menuItems'>
              <InfoRounded className='menuIcons' />
              <span className='menuItem'>INFORMACIÓN</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/expositores' onClick={close}>
            <Menu.Item className='menuItems'>
              <PeopleRounded className='menuIcons' />
              <span className='menuItem'>EXPOSITORES</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/actividades' onClick={close}>
            <Menu.Item className='menuItems'>
              <FormatListBulletedRounded className='menuIcons' />
              <span className='menuItem'>ACTIVIDADES</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/noticias' onClick={close}>
            <Menu.Item className='menuItems'>
              <LibraryBooksRounded className='menuIcons' />
              <span className='menuItem'>NOTICIAS</span>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to='/contacto' onClick={close}>
            <Menu.Item className='menuItems'>
              <ContactSupportRounded className='menuIcons' />
              <span className='menuItem'>CONTACTO</span>
            </Menu.Item>
          </Link>
        </Menu>
      )}
    >
      <Button className='ButtonMenu' height={64}>
        MENU <MdFingerprint className='iconButton'></MdFingerprint>
      </Button>
    </Popover>
  )
}

export default MenuComponent
