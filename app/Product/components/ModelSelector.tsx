import style from "./ModelSelector.module.scss"
import ImageButton from "../../components/ImageButton"
import Picture, { PictureProps } from "../../components/Picture"

export interface ItemKeys{
    serial?: string,
    fileName: string,
}
export interface ItemValues{
    label: string,
    fileName: string,
    time: number | string,
    serial?: string,
    onClickEvent: (object : ItemKeys) => void,
}


const ModelSelector: React.FC<ItemValues> = ({label, fileName, time, serial, onClickEvent}) => {

    
    const props : PictureProps ={
        src: `/images/${fileName}.png`,
        alt: `${label}のBoothサムネイル画像`,
        skeleton: true,
    }

    const Caption : React.FC = () => {
        return(
            <>
                <cite className={`${style.cite}`}>{label}</cite>
                <small><time>{time}</time></small>
            </>
        )
    }

    return(
        <div onClick={ () => onClickEvent({serial, fileName}) }>
            <ImageButton key={fileName} Caption={<Caption />} Thumbnail={<Picture {...props} />} />
        </div>
    )
}
export default ModelSelector;