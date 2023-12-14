import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
    }, [productId])


    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Detalle de producto</h1>
                        <ItemDetail {...product}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer