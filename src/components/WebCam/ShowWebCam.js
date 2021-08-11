import { useState, useEffect } from 'react'
import { serverPath } from '../../api/serverPath.js'

export const ShowWebCam = ( { state: {day, hour, minute, isLiveImg} } ) => {

  const [ liveImgSrc, setLiveImgSrc ] = useState( `${serverPath}/kamera/archive/ip_kamera.jpg` )
  const [ getCamera, setGetCamera ] = useState( '' )

  const updateImage = () => {

    const updateImgLogic = (isLiveImg) => {
      if ( isLiveImg ) return null
      const randomId = new Date().getTime()
      const src = `${serverPath}/kamera/archive/ip_kamera.jpg?id=${randomId}`
      setLiveImgSrc( src )
      const iFrame = `<iframe src='${serverPath}/rekreace/get_ip_kamera.php?id=${randomId}' />`
      const iFrameDiv = <div style={{display: 'none'}} dangerouslySetInnerHTML={{ __html: `${iFrame}`}} />
      setGetCamera( iFrameDiv )
    }

    const interval = setInterval( () => updateImgLogic(), 5000)
    return () => clearInterval(interval)

  }

  const imgDateText = `${('0' + day).slice(-2)}-`
                    + `${('0' + hour).slice(-2)}-`
                    + `${('0' + minute).slice(-2)}`;

  useEffect( updateImage, [] )

    return (
      <>
        <div className="archive_cam">
	        <a href={ `${serverPath}/kamera/archive/ip_kamera_full_hd_${imgDateText}.jpg` }>
            { isLiveImg ? <img src={ liveImgSrc } alt="WebCam" />
                        : <img src={ `${serverPath}/kamera/archive/ip_kamera_${imgDateText}.jpg` } alt="WebCam" /> }
          </a>
        </div>
        { getCamera }
      </>
    )
}