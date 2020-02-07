import React from 'react'
import { Link } from '@reach/router'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Row, Container, Col } from 'react-bootstrap'
import { DefaultButton } from 'office-ui-fabric-react'

import './styles.css'
import { InfoRounded } from '@material-ui/icons'

const Events: React.FC = () => {
  return (
    <div className='content'>
      <Link to='/'>
        <Row className='justify-content-md-center Menuheader'>
          <InfoRounded className='menuIcons' />
          <div className='box'>INFORMACIÓN</div>
        </Row>
      </Link>
      <Accordion>
        <AccordionTab header='¿Que es FIRAN?' contentClassName='queesfiranHeader'>
          <Container>
            <Row>
              <Col className='justify-content-md-center text-center'>
                <h4 className='TitleInformation'>
                  ¿Que es <b>firan?</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className='ContentInformation'>
                Feria Internacional Rancagua 20220, tiene por objetivo mostrar todas las
                oportunidades y capacidades que ofrece la ciudad de Rancagua a sus habitantes y al
                mundo. Durante dos días de feria , se realizarán diversas actividades de tipo
                cultural y empresarial,charlas,exposiciones, intervenciones artísticas y más.
              </Col>
            </Row>

            <Row>
              <Col className='FooterInformation'>Te invitamos a ser protagonistas</Col>
            </Row>
            <Row>
              <Col className='FooterInformation2'>de FIRAN 2020</Col>
            </Row>
          </Container>
        </AccordionTab>
        <AccordionTab header='Ubicación' headerClassName='ubicacionHeader'>
          <Container>
            <Row>
              <Col className='justify-content-md-center text-center'>
                <h4 className='TitleInformation'>Ubicación</h4>
              </Col>
            </Row>
            <Row>
              <Col className='ContentInformation'>
                Av .España con German Ibara, Rancagua Región del Libertador Gral. Bernardo O'higgins
              </Col>
              <Col>
                <DefaultButton className='buttonOpenMaps'>Ver rutas en google maps</DefaultButton>
              </Col>
            </Row>
          </Container>
        </AccordionTab>
        <AccordionTab header='Fechas y Horarios' headerClassName='fechasYhorariosHeader'>
          <Container></Container>
          <h4 className='TitleInformation'>Fechas y Horarios</h4>
          <div className='ContentInformation'>
            <ul className='gridDisplay'>
              <li className='displayDireccion'>Viernes 7 - Sábado 8 de Noviembre 2020</li>
              <li className='displayDireccion'>Horario de 11:00 a 20:00 hrs</li>
              <li className='displayDireccion'>Evento apto para familia y todo público</li>

              <li className='displayDireccion'>
                <div className='direccion'>11:00 a 20:00 hrs</div>
                <div className='direccion'>imagenes de calendario</div>
              </li>
            </ul>
          </div>
        </AccordionTab>
        <AccordionTab header='Entradas y Valores' headerClassName='entradasYvaloresHeader'>
          <h4 className='TitleInformation'>Entradas y Valores</h4>
          <div className='ContentInformation'>
            Para aceder a entradas (e-tickets) debera descargar la APP RANCAGUA DIGITAL, y seguir
            los pasos para obtner tus tickets.
          </div>
          <div className='ContentInformation'>
            <ul className='gridDisplay'>
              <li className='displayDireccion'>Gratuita</li>
              <li className='displayDireccion'>App Rancagua Digital</li>
              <li className='displayDireccion'>Público General</li>
              <li className='displayDireccion'>Máximo 2 tickets por App</li>
            </ul>
          </div>
        </AccordionTab>
        <AccordionTab header='Plano Ferial' headerClassName='planoFerialHeader'>
          <h4 className='TitleInformation'>Plano Ferial</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
        <AccordionTab header='Descarga Volante Ferial' headerClassName='descargaVolanteFerial'>
          <h4 className='TitleInformation'>Descarga volante ferial</h4>
          <div className='ContentInformation'></div>
        </AccordionTab>
      </Accordion>
    </div>
  )
}

export default Events
