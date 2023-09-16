import Card from "react-bootstrap/Card";
import Tags from "./Tags";


function Cardperros(props) {
    return (
        <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text> {props.description}</Card.Text>
            <Tags color={props.colorbtn} text={props.raza} />
        </Card.Body>
        </Card>
    );
}

export default Cardperros;