import React from 'react'
import { Col, Row, Icon, Typography } from 'antd'
import './styles.sass'

const { Text } = Typography

type Props = {
  label: string
}

const DownloadButton: React.FC<Props> = ({ label }) => {
  const handleClick = () => console.log('SDFASDF')

  return (
    <Row
      type='flex'
      justify='space-around'
      align='middle'
      className='downloadButton'
      onClick={handleClick}
    >
      <Col xs={8} className='downloadIcon'>
        <Icon type='cloud-download' theme='outlined' />
      </Col>
      <Col xs={16} className='buttonLabel'>
        <Text strong>{label}</Text>
      </Col>
    </Row>
  )
}

export default DownloadButton
