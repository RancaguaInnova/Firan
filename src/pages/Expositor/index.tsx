import React from 'react'
import './styles.css'
import { Menu } from 'evergreen-ui'
import { Link } from '@reach/router'
import { FiUsers } from 'react-icons/fi'
import { Accordion, AccordionTab } from 'primereact/accordion'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
const Expositor: React.FC = () => {
  return (
    <div className='content'>
      <Menu>
        <Link to='/'>
          <Menu.Item className='menuItems'>
            <FiUsers className='menuIcons' />
            <span className='menuItem'>EXPOSITORES</span>
          </Menu.Item>
        </Link>
      </Menu>
      <Accordion>
        <AccordionTab header='Por qué Exponer?' contentClassName='queesfiranHeader'>
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
        </AccordionTab>
        <AccordionTab header='Quienes exponen?' contentClassName='queesfiranHeader'>
          <h4 className='TitleExpositor'>Quienes exponen?</h4>
          <div className='ContentExpositor'></div>
        </AccordionTab>
        <AccordionTab header='Valores Stands' contentClassName='queesfiranHeader'>
          <h4 className='TitleExpositor'>Valores Stands</h4>
          <div className='ContentExpositor'></div>
        </AccordionTab>
        <AccordionTab header='Valores Stands' contentClassName='queesfiranHeader'>
          <h4 className='TitleExpositor'>Plano Ferial</h4>
          <div className='ContentExpositor'></div>
        </AccordionTab>
        <AccordionTab header='Valores Stands' contentClassName='queesfiranHeader'>
          <h4 className='TitleExpositor'>Brochure</h4>
          <div className='ContentExpositor'></div>
        </AccordionTab>
        <AccordionTab header='Valores Stands' contentClassName='queesfiranHeader'>
          <h4 className='TitleExpositor'>Manual del Expositor</h4>
          <div className='ContentExpositor'></div>
        </AccordionTab>
      </Accordion>
    </div>
  )
}

export default Expositor
