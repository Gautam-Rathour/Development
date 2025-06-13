
import "./Product.css"



function Product({ title, price, features }) {
    // const list = features.map((feature) => <li> {feature} </li>);
    let isDiscount = price > 30000;
    let styles = { backgroundColor: isDiscount ? "pink" : "" };

        return (
        <div className="Product" style={styles}>
            <h3>Product: { title }</h3>
            <h5>Price: { price }</h5>
            {isDiscount && <p>Discount of 5%</p>}
        </div>
    );
    
}


export default Product;


