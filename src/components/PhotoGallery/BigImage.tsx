import { useState, useEffect } from 'react'
import { imgFolder } from './api/read'
import './css/BigImages.css'
import { CategoryList } from './CategoryList'
import { photoType, imgPositionType, setStateType, categoryObjType } from './TypeDefinition';
import { Presentation } from './Presentation'
import { ChangeImage } from './ChangeImage'
import { InfoText } from './InfoText'

import { useRef } from 'react'

interface BigImageType {
    imgPosition    : imgPositionType;
    setImgPosition : setStateType;
    bigPhoto       : photoType;
    categoryObj    : categoryObjType;
    length         : number;
}

export const BigImage = ( {bigPhoto, imgPosition, setImgPosition, categoryObj, length}: BigImageType ) => {
    const [ fadeIn, setFadeIn ] = useState( 'main-img fade-in' )
    const mainRef = useRef<HTMLElement>(null)
    const bgImgCss = bigPhoto ? ({ backgroundImage: `url(${imgFolder}/${bigPhoto.id}b.jpg)` }) : ({})

    const imgSizeHandler = ():void => {
        if ( !mainRef.current ) return
        if ( !mainRef.current.style.backgroundImage ) return
        const url = mainRef.current.style.backgroundImage.split("\"")[1]
        const img = new Image();
        console.log( {url} )
        img.src = url;
        img.onload = () => {
            if ( !mainRef.current ) return
            const mainWidth = mainRef.current.offsetWidth
            const { width: imgWidth, height: imgHeight } = img
            const height  =  imgHeight * mainWidth /  imgWidth + 'px'
            mainRef.current.style.height = height
        } 
    }

    useEffect( () => {
            setFadeIn('main-img fade-in')
            setTimeout( () => setFadeIn('main-img'), 500  )
            imgSizeHandler()
    }, [bigPhoto])

    useEffect( () => {
        window.addEventListener('resize', imgSizeHandler)
        return () => window.removeEventListener('resize', imgSizeHandler)
    }, [] )

    return (
        <main ref={ mainRef } className={ fadeIn } style={bgImgCss} >
            <InfoText bigPhoto={bigPhoto} />
            <ChangeImage  setImgPosition={setImgPosition} length={length} imgPosition={imgPosition}  />
            <Presentation setImgPosition={setImgPosition} length={length} /> 
            <CategoryList setImgPosition={setImgPosition} categoryObj={categoryObj} />
        </main>
    )
}