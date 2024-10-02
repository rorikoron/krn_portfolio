import PictureFrame, { PictureProps } from "./PictureFrame";
import style from "./PictureList.module.scss"

const NotFoundWarning : React.FC = () =>{
    return(
        <div>Loading...</div>
    )
}

const PictureList: React.FC<{ blobs: PictureProps[] }> = ({ blobs }) => {
    if (blobs.length === 0)
        return <NotFoundWarning />;
    

    return (

        <div className={`${style.list}`}>
        {blobs.map((blob) => (
                <PictureFrame key={blob.fileName} {...blob} />
            ))}
        </div>
    );
};

export default PictureList;
