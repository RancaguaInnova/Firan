import React from 'react'
import { isMobile } from 'mobile-device-detect'
import { Col, Typography } from 'antd'

const { Title, Text } = Typography

type Props = {
  component: any
  text: string
}

const DescriptiveIcon: React.FC<Props> = ({ component, text }) => {
  const capitalized = text.toUpperCase()
  return (
    <Col xs={12} md={8} lg={6} style={{ textAlign: 'center', padding: '20px 0' }}>
      <div style={{ width: '50%', margin: 'auto', marginBottom: '1em' }}>{component}</div>
      {isMobile ? (
        <Text strong style={{ color: '#006787' }}>
          {capitalized}
        </Text>
      ) : (
        <Title level={4} style={{ color: '#006787' }}>
          {capitalized}
        </Title>
      )}
    </Col>
  )
}

export default DescriptiveIcon
