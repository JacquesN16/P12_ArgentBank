


export default function Feature (props) {

    return (
        <div className="feature">
            <img src={props.image} alt="Icon" className="feature-icon" />
            <h3 className="feature__title">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}
