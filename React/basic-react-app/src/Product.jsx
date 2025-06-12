
import "./Product.css"



function Product({ title, price, features }) {

    return (
        <div className="Product" >
            <h3>Product: { title }</h3>
            <h5>Price: { price }</h5>
            <p>{features}</p>
        </div>
    );
}


export default Product;