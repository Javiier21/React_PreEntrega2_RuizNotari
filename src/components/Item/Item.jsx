import { Link } from "react-router-dom"

const Item = ({ id, name, img, price}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('item')
    }

    return (
        <div className="container my-3 border border-3 border-success-subtle rounded p-4">
            <div className="row">
                <div className="col-md-12" onClick={handleClick}>
                    <h2>{name}</h2>
                    <img src={img} style={{ width: 100 }}/>
                    <h3>${price}</h3>
                    <Link className="btn btn-outline-success mt-2" to={`/detail/${id}`}>Ver Detalle</Link>
                </div>  
            </div>
        </div>
    )
}

export default Item