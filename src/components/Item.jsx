import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({titulo, imagen, precio}) =>{

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>${precio}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}





export default Item;