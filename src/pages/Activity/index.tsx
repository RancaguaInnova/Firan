import React from 'react'
import { Link } from '@reach/router'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Row } from 'react-bootstrap'

import './styles.css'
import { LibraryBooksRounded } from '@material-ui/icons'
const Activity: React.FC = () => {
  return (
    <div className='content'>
      <Link to='/'>
        <Row className='justify-content-md-center Menuheader'>
          <LibraryBooksRounded className='menuIcons' />
          <div className='box'>Actividades</div>
        </Row>
      </Link>
      <Accordion>
        <AccordionTab header='Paneles Conversatorios' contentClassName='queesfiranHeader'>
          <h4 className='TitleInformation'>Paneles Conversatorios</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
        <AccordionTab header='Show Musicales' headerClassName='ubicacionHeader'>
          <h4 className='TitleInformation'>Show Musicales</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
        <AccordionTab header='Charlas / Speakers' headerClassName='fechasYhorariosHeader'>
          <h4 className='TitleInformation'>Charlas / Speakers</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
        <AccordionTab header='Intervenciones Artisticas' headerClassName='entradasYvaloresHeader'>
          <h4 className='TitleInformation'>Intervenciones Artisticas</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
        <AccordionTab header='Concursos' headerClassName='planoFerialHeader'>
          <h4 className='TitleInformation'>Concursos</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
      </Accordion>
    </div>
  )
}

export default Activity
