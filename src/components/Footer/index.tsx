import React, { useState } from 'react'
import './styles.css'
import { Row, Col, Drawer } from 'antd'
import { Link } from '@reach/router'

const Footer: React.FC = () => {
  const [visibleFacebook, setVisibleFacebook] = useState(false)

  return (
    <Row className='footer' gutter={[16, 8]}>
      <Col className='footerImage' span={6}>
        <Link to='/'>
          <img src='/resources/img/Footer/iconos footer 2-04.png' alt=''></img>
        </Link>
      </Col>
      <Col className='footerImage' span={3}>
        <img
          src='/resources/img/Footer/iconos footer 2-01.png'
          alt=''
          onClick={() => setVisibleFacebook(true)}
        ></img>
        <Drawer
          width={'90%'}
          placement='right'
          closable={true}
          onClose={() => setVisibleFacebook(false)}
          visible={visibleFacebook}
        >
          <iframe
            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
            width='100%'
            title='Firan'
            style={{ border: 0, overflow: 'hidden', height: '90vh' }}
            scrolling='no'
            allow='encrypted-media'
          ></iframe>
        </Drawer>
      </Col>
      <Col className='footerImage' span={3}>
        <img src='/resources/img/Footer/iconos footer 2-02.png' alt=''></img>
      </Col>
      <Col className='footerImage' span={3}>
        <img src='/resources/img/Footer/iconos footer 2-03.png' alt=''></img>
      </Col>
      <Col className='footerImage' span={3}>
        <img src='/resources/img/Footer/iconos footer 2-05.png' alt=''></img>
      </Col>
      <Col className='footerImage' span={3}>
        <img src='/resources/img/Footer/iconos footer 2-06.png' alt=''></img>
      </Col>
      <Col className='footerImage' span={3}>
        <img src='/resources/img/Footer/iconos footer 2-07.png' alt=''></img>
      </Col>
    </Row>
  )
}

export default Footer
