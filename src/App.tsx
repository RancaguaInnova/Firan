import React, { Suspense } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import Header from 'components/Header'
import Loading from 'components/Loading'
import * as Sentry from '@sentry/browser'
import Menu from 'components/Menu'

const Home = React.lazy(() => import('pages/Home'))
const Register = React.lazy(() => import('pages/Register'))
const News = React.lazy(() => import('pages/News'))
const Services = React.lazy(() => import('pages/Services'))

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://66358d8509bd4e13bc78e9f6b63e4eb5@sentry.io/1383062',
    debug: true
  })
  console.log('Sentry loaded!')
}

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Suspense fallback={<Loading />}>
        <Router>
          <RouterPage path='/' pageComponent={<Home />} default />
          <RouterPage path='/registro' pageComponent={<Register />} />
          <RouterPage path='/noticias' pageComponent={<News />} />
          <RouterPage path='/servicios' pageComponent={<Services />} />
        </Router>
      </Suspense>
      <Menu />
    </div>
  )
}

export default App

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) =>
  props.pageComponent
