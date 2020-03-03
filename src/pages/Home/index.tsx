import React from 'react'
import './styles.sass'
import { Row, Col } from 'antd'
import { Link } from '@reach/router'
import Footer from 'components/Footer'
const Home: React.FC = () => {
  return (
    <div>
      <Row>
        <Col xs={24} md={24}>
          <img alt='Home Firan 2020' src='/resources/img/home.svg'></img>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={24}>
          <Link to='/expositores'>
            <img
              alt='Home Firan 2020'
              src='/resources/img/portal expositores-01.png'
              style={{ width: '100%' }}
            ></img>
          </Link>
        </Col>
      </Row>
      {/* <Row className='displayCircle'>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
        
            <div className='animatedCircle'>
              <span className='label'>EXPOSITORES</span>
              <span className='miniLabel'>AQUÍ</span>
            </div>
         
          <Divider className='divider' />
        </Col>
      </Row>
 */}
      <Row className='displayColaboradores'>
        <Col xs={24} md={24}>
          <img src='/resources/img/logos/camion.gif' width='80%' alt='logo'></img>
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  )
}

export default Home
