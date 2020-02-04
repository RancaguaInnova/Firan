import React from 'react'
import './styles.sass'
import { Divider, Row } from 'antd'
import { Link } from '@reach/router'

const Home: React.FC = () => {
  return (
    <div className='container'>
      <Row>
        <img alt='Home Firan 2020' src='/resources/img/home.svg'></img>
      </Row>
      <Row>
        <img alt='Home Firan 2020' src='/resources/img/expositor1.svg'></img>
      </Row>
      <Row className='displayCircle'>
        <Link to='/expositores'>
          <div className='animatedCircle'>
            <span className='label'>EXPOSITORES</span>
            <span className='miniLabel'>AQUÍ</span>
          </div>
          <div className='animatedBackCircle' />
        </Link>
        <Divider className='divider' />
      </Row>

      <Row className='displayColaboradores'>
        <img alt='Home Firan 2020' src='/resources/img/expositor3.svg'></img>
      </Row>
    </div>
  )
}

export default Home
