import React from 'react'
import './styles.css'
import { Link } from '@reach/router'

const Loading: React.FC = () => {
  return (
    <Link to='/'>
      <img width='100%' src='/resources/img/header1.svg' alt='Firan 2020'></img>
    </Link>
  )
}

export default Loading
