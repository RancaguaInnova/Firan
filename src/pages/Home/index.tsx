import React from 'react'
import './styles.sass'
import { Divider, Row, Col } from 'antd'
import { Link } from '@reach/router'

const Home: React.FC = () => {
  return (
    <div className='container'>
      <Row>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
          <img alt='Home Firan 2020' src='/resources/img/home.svg'></img>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
          <img alt='Home Firan 2020' src='/resources/img/expositor1.svg'></img>
        </Col>
      </Row>
      <Row className='displayCircle'>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
          <Link to='/expositores'>
            <div className='animatedCircle'>
              <span className='label'>EXPOSITORES</span>
              <span className='miniLabel'>AQUÍ</span>
            </div>
            {/* <div className='animatedBackCircle' /> */}
          </Link>
          <Divider className='divider' />
        </Col>
      </Row>

      <Row className='displayColaboradores'>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
          <img alt='Home Firan 2020' src='/resources/img/expositor3.svg'></img>
        </Col>
      </Row>
    </div>
  )
}

export default Home
