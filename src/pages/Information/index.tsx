import React from 'react'
import { Menu } from 'evergreen-ui'
import { Link } from '@reach/router'
import { FaInfoCircle } from 'react-icons/fa'
import { Accordion, AccordionTab } from 'primereact/accordion'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './styles.css'

const Events: React.FC = () => {
  return (
    <div className='Events'>
      <Menu>
        <Link to='/'>
          <Menu.Item className='menuItems'>
            <FaInfoCircle className='menuIcons' />
            <span className='menuItem'>INFORMACIÓN</span>
          </Menu.Item>
        </Link>
      </Menu>
      <Accordion>
        <AccordionTab header='¿Que es firan?' contentClassName='queesfiranHeader'>
          ¿Que es firan?
        </AccordionTab>
        <AccordionTab header='Ubicación' headerClassName='ubicacionHeader'>
          Ubicación
        </AccordionTab>
        <AccordionTab header='Fechas y Horarios' headerClassName='fechasYhorariosHeader'>
          Fechas y Horarios
        </AccordionTab>
        <AccordionTab header='Entradas y Valores' headerClassName='entradasYvaloresHeader'>
          Entradas y Valores
        </AccordionTab>
        <AccordionTab header='Plano Ferial' headerClassName='planoFerialHeader'>
          Plano Ferial
        </AccordionTab>
        <AccordionTab header='Descarga Volante Ferial' headerClassName='descargaVolanteFerial'>
          Descarga volante ferial
        </AccordionTab>
      </Accordion>
    </div>
  )
}

export default Events
