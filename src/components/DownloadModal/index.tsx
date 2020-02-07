import React from 'react'
import { Modal } from 'antd'

type Props = {
  visible: boolean
  handleVisible: any
  asset: string
}

const DownloadModal: React.FC<Props> = ({ visible, asset, handleVisible }) => {
  const handleDownload = () => {
    var tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = `/resources/img/${asset}`
    tempLink.setAttribute('download', `${asset}`)

    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }

    document.body.appendChild(tempLink)
    tempLink.click()

    // Fixes "webkit blob resource error 1"
    setTimeout(function() {
      document.body.removeChild(tempLink)
      window.URL.revokeObjectURL(`/resources/img/${asset}`)
    }, 0)
    handleVisible({ open: false, asset: '' })
  }

  return (
    <Modal
      title='Estudio de Impacto Firan 2019'
      visible={visible}
      onOk={handleDownload}
      onCancel={handleVisible({ open: false, asset: '' })}
      okText='Descargar'
      cancelText='Cerrar'
    >
      <img src={`/resources/img/${asset}`} alt='asset' width='100%'></img>
    </Modal>
  )
}

export default DownloadModal
