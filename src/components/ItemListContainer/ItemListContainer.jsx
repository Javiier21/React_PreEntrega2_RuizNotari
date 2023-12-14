import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    console.log(products)

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div onClick={() => console.log('container')}>
          <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <div className="item-list-container">
                    <p className="text-center">{greeting}</p>
                    <ItemList products={products}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ItemListContainer