import PictureFrame, { PictureProps } from "./PictureFrame";
import style from "./PictureList.module.scss"

const PictureList: React.FC<{ blobs: PictureProps[] }> = ({ blobs }) => {

    return (
        <div className={`${style.list}`}>
            {blobs.map((blob) => (
                    <PictureFrame key={blob.fileName} {...blob} />
            ))}
        </div>
    );
};

export default PictureList;
