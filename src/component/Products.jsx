import { Link } from "react-router-dom";
function Products({list}){
return(
    <>
    <h1>Product List</h1>
    <div className="product-list">
    {
        list.map((product) => (
            <div key={product.id} className="product-item">
                <h3>{product.name}</h3>
                
                <img src={'${import.meta.env.Base_URL}${product.image}'}
                alt={product.price} />

                <Link to={`/productlist/${product.id}`}>View Details</Link>
            </div>
            
        ))
        
    }
    </div>
    </>
)
}

export default Products;