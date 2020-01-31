import React from 'react'
import './styles.sass'
import { Row } from 'antd'
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
      <Row className='DisplayCircle'>
        <Link to='/expositores'>
          <div className='Circle'>
            <span>Expositores</span>
          </div>
        </Link>
        <div className='CircleExtern'> </div>
      </Row>

      <Row className='DisplayColaboradores'>
        <img alt='Home Firan 2020' src='/resources/img/expositor3.svg'></img>
      </Row>
    </div>
  )
}

export default Home
