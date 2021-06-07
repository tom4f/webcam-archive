import React from 'react';
import { imgFolder } from './imgFolder.js'

export const ShowWebCam = ( { state: {day, hour, minute} } ) => {

  const imgDateText = `${('0' + day).slice(-2)}-${('0' + hour).slice(-2)}-${('0' + minute).slice(-2)}`;

    return (
        <div className="archive_cam">
	        <a    href={ `${imgFolder}/ip_kamera_full_hd_${imgDateText}.jpg` }>
            <img src={ `${imgFolder}/ip_kamera_${imgDateText}.jpg` } alt="WebCam" />
          </a>
        </div>
    )
}