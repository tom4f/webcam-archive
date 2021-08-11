import { useEffect, useState } from 'react';
import './css/App.css';
import { loadPicturesfromMySQL } from './../../api/photoGalleryPath'
import { SmallImages } from './SmallImages'
import { BigImage } from './BigImage'
import { photoType, categoryObjType } from './TypeDefinition';

export default function PhotoGallery() {
  const [ allPhoto, setAllPhoto ]       = useState<photoType[]>([])
  const [ imgPosition, setImgPosition ] = useState({ smallImgStart: 0, smallImgsSize: 8, current: 0, category: 99999 })

  useEffect( () => { ( async() => setAllPhoto( await loadPicturesfromMySQL ) )() }, [])

  const arrIndexFromImgId = (clickedImgId:number):number => filteredPhoto.findIndex( img => +img['id'] === clickedImgId )

  const filteredPhoto = imgPosition.category === 99999 
                      ? allPhoto
                      : allPhoto.filter( one => +one['typ'] === imgPosition.category )

  const eightPhoto = filteredPhoto.slice(imgPosition.smallImgStart, imgPosition.smallImgStart + imgPosition.smallImgsSize)
  
  const categoryObj = () => {
    const reducer = (sumPerCat: categoryObjType, oneEntry: {[key: string]: string}) => {
      sumPerCat[+oneEntry.typ] = (oneEntry.typ in sumPerCat)
                              ? sumPerCat[+oneEntry.typ] + 1
                              : 1
      return sumPerCat
    }
    return { 
        ...allPhoto.reduce(reducer, {}),
        99999 : allPhoto.length
    }
  }

  return (
    <div className="container">
      <div className="header">
          <a className="menu" href="./photo-gallery/" >Fotogalerie</a>
      </div>
      <SmallImages imgPosition={imgPosition} setImgPosition={setImgPosition} 
                   eightPhoto={ eightPhoto } arrIndexFromImgId={arrIndexFromImgId} />
      <BigImage imgPosition={imgPosition} setImgPosition={setImgPosition}
                bigPhoto={ filteredPhoto[imgPosition.current] }
                categoryObj={categoryObj()} length={filteredPhoto.length}  />
    </div>
  )
}