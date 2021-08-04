import { imgFolder } from './api/read'
import './css/SmallImages.css'
import { photoType, imgPositionType, setStateType } from './TypeDefinition';

interface SmallImagesTypes {
    eightPhoto        : Array<photoType>;
    imgPosition       : imgPositionType;
    setImgPosition    : setStateType;

    arrIndexFromImgId : (clickedId:number) => number;
}

export const SmallImages = ( { eightPhoto, arrIndexFromImgId, imgPosition, setImgPosition }: SmallImagesTypes ) => {

    const eightImgsDiv = () => {
        if ( !eightPhoto ) return;

        return eightPhoto.map( (img) => (
                    <div key={img.id}
                         style={{
                            color: 'white',
                            opacity: `${ arrIndexFromImgId(+img.id) === imgPosition.current ? 0.5 : 1}`,
                            backgroundImage: `url(${imgFolder}/${img.id}.jpg)` }}
                         onClick = { () => setImgPosition( old => ({ ...old, current: arrIndexFromImgId( +img.id ) }) )  }>
                        {img.id}
                    </div> ))
    }

    return (
        <header className="imgs">
            { eightImgsDiv() }
        </header>
    )
}