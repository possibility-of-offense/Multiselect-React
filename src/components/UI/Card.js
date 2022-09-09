import './Card.css'

function Card(props) {
    const {width} = props.styling;



    return (
        <div className={`${props.className}`} style={{width: width + 'px'}}>
            {props.children}
        </div>
    )
}

export default Card;