import React from 'react'
import { Row } from 'antd'
import { ReactComponent as Agroindustria } from './icons/agroindustria.svg'
import { ReactComponent as Artesania } from './icons/artesania.svg'
import { ReactComponent as Automotriz } from './icons/automotriz.svg'
import { ReactComponent as Conectividad } from './icons/conectividad.svg'
import { ReactComponent as Construccion } from './icons/construccion.svg'
import { ReactComponent as Educacion } from './icons/educacion.svg'
import { ReactComponent as FFAA } from './icons/ffaa.svg'
import { ReactComponent as Gastronomia } from './icons/gastronomia.svg'
import { ReactComponent as MetalMecanica } from './icons/metalmecanica.svg'
import { ReactComponent as Mineria } from './icons/mineria.svg'
import { ReactComponent as ONG } from './icons/ong.svg'
import { ReactComponent as Salud } from './icons/salud.svg'
import { ReactComponent as SBasicos } from './icons/servicios-basicos.svg'
import { ReactComponent as SPublicos } from './icons/servicios-publicos.svg'
import { ReactComponent as Sustentabilidad } from './icons/sustentabilidad.svg'
import { ReactComponent as Turismo } from './icons/turismo.svg'
import DescriptiveIcon from 'components/DescriptiveIcon'

const Expositores: React.FC = () => {
  return (
    <Row type='flex' justify='space-around' align='middle' gutter={{ xs: 32 }}>
      <DescriptiveIcon component={<Agroindustria />} text='AGROINDUSTRIA' />
      <DescriptiveIcon component={<Artesania />} text='ARTESANÍA Y EMPRENDIMIENTO' />
      <DescriptiveIcon component={<Automotriz />} text='AUTOMOTRIZ' />
      <DescriptiveIcon component={<Conectividad />} text='CONECTIVIDAD' />
      <DescriptiveIcon component={<Construccion />} text='INMOBILIARIA Y CONSTRUCCIÓN' />
      <DescriptiveIcon component={<Educacion />} text='EDUCACIÓN' />
      <DescriptiveIcon component={<FFAA />} text='FUERZAS ARMADAS Y DE ORDEN' />
      <DescriptiveIcon component={<Gastronomia />} text='gastronomía' />
      <DescriptiveIcon component={<MetalMecanica />} text='metalmecánica' />
      <DescriptiveIcon component={<Mineria />} text='minería' />
      <DescriptiveIcon component={<ONG />} text='salud' />
      <DescriptiveIcon component={<Salud />} text='salud' />
      <DescriptiveIcon component={<SBasicos />} text='servicios basicos' />
      <DescriptiveIcon component={<SPublicos />} text='servicios públicos' />
      <DescriptiveIcon component={<Sustentabilidad />} text='sustentabilidad' />
      <DescriptiveIcon component={<Turismo />} text='Turismo' />
    </Row>
  )
}

export default Expositores
