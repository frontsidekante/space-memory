export default function Tile(props) {

    return (
        <div className="image-container">
            <a href={props.photo.img_src} target="_blank" rel="noreferrer">
                {/* <img className="image" alt="" src={props.photo.img_src && props.photo.img_src}/> */}
                <div className="image" style={{backgroundImage: `url(${props.photo.img_src})`}}></div>
            </a>
        </div>   
    )
}