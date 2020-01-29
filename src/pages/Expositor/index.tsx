import React from 'react'
import './styles.css'
import { Link } from '@reach/router'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Row } from 'react-bootstrap'
import { GroupRounded } from '@material-ui/icons'

const Expositor: React.FC = () => {
  return (
    <div className='content'>
      {/*   <Link to='/'>
        <Row className='justify-content-md-center Menuheader'>
          <GroupRounded className='menuIcons'></GroupRounded>
          <div className='box'>EXPOSITORES</div>
        </Row>
      </Link> */}
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
        <AccordionTab header='Plano Ferial' contentClassName='queesfiranHeader'>
          <h4 className='TitleExpositor'>Plano Ferial</h4>
          <div className='ContentExpositor'></div>
        </AccordionTab>
        <AccordionTab header='Brochure' contentClassName='queesfiranHeader'>
          <h4 className='TitleExpositor'>Brochure</h4>
          <div className='ContentExpositor'></div>
        </AccordionTab>
        {/*         <AccordionTab header='Manual del Expositor' contentClassName='queesfiranHeader'>
          <h4 className='TitleExpositor'>Manual del Expositor</h4>
          <div className='ContentExpositor'></div>
        </AccordionTab> */}
      </Accordion>
    </div>
  )
}

export default Expositor
