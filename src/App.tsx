import React, { lazy, Suspense } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import Loading from 'components/Loading'
import * as Sentry from '@sentry/browser'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'antd/dist/antd.css'

const Home = lazy(() => import('pages/Home'))
const Register = lazy(() => import('pages/Register'))
const News = lazy(() => import('pages/News'))
//const Contact = lazy(() => import('pages/Contact'))
const Information = lazy(() => import('pages/Information'))
const Expositor = lazy(() => import('pages/Expositor'))
const Activity = lazy(() => import('pages/Activity'))

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
      <Suspense fallback={<Loading />}>
        <Router>
          <RouterPage path='/' pageComponent={<Home />} default />
          <RouterPage path='/registro' pageComponent={<Register />} />
          <RouterPage path='/informacion' pageComponent={<Information />} />
          <RouterPage path='/expositores' pageComponent={<Expositor />} />
          <RouterPage path='/actividades' pageComponent={<Activity />} />
          <RouterPage path='/noticias' pageComponent={<News />} />
          {/* <RouterPage path='/contacto' pageComponent={<Contact />} /> */}
        </Router>
      </Suspense>
      {/*       <Menu />
       */}{' '}
    </div>
  )
}

export default App

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) =>
  props.pageComponent
