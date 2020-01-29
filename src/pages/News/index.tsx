import React from 'react'
import './styles.css'
import { Link } from '@reach/router'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Row } from 'react-bootstrap'
import { LibraryBooksRounded } from '@material-ui/icons'

const News: React.FC = () => {
  return (
    <div className='content'>
      <Link to='/'>
        <Row className='justify-content-md-center Menuheader'>
          <LibraryBooksRounded className='menuIcons' />
          <div className='box'>Noticias</div>
        </Row>
      </Link>

      <Accordion>
        <AccordionTab header='Noticias' contentClassName='queesfiranHeader'>
          <h4 className='TitleInformation'>Noticias</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
        <AccordionTab header='Productos' headerClassName='ubicacionHeader'>
          <h4 className='TitleInformation'>Productos</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
        <AccordionTab header='Momentos' headerClassName='fechasYhorariosHeader'>
          <h4 className='TitleInformation'>Momentos</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
      </Accordion>
    </div>
  )
}

export default News
