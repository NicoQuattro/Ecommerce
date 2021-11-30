import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

const Item = ({id, titulo, imagen, precio}) =>{

    return(
        <Link to={`/item/${id}`}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>${precio}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
        </Link>
    )
}

export default Item;