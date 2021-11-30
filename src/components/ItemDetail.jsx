import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount'

const ItemDetail = (props) =>{
    const {id, titulo, imagen, descripcion, categoria, precio, stock} = props.item
    return(
            <div className="card mb-3 containerItemDetail">
            <div className="row g-0 cardDetail">
                <div className="col-md-4">
                <img src={imagen} className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <h5 className="card-text ">${precio}</h5>
                    <p className="card-text">{descripcion}</p>
                    <ItemCount stock={stock} initial={1}/>
                </div>
                </div>
            </div>
            </div>

    );
};
export default ItemDetail;
