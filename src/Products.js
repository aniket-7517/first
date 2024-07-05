import { Link } from "react-router-dom";

function Products() {

    const products = [
        {
            name : "iphone 13",
            imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
            price : 30000,
            images : [
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70&crop=false",
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70&crop=false",
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70&crop=false",
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/3/k/-original-imaghxcpnmh9y8ga.jpeg?q=70&crop=false"
            ],
            specifications : [
                "128 GB ROM",
                "15.49 cm (6.1 inch) Super Retina XDR Display",
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip, 6 Core Processor Processor",
                "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"
            ],
            isCart : true
        }, 
        {
            name : "iphone 14",
            imgSrc : "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
            price : 40000,
            specifications : [
                "128 GB ROM",
                "15.49 cm (6.1 inch) Super Retina XDR Display",
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip, 6 Core Processor Processor",
                "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"
            ],
            isCart : false
        },
        {
            name : "iphone 15",
            imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/r/5/-original-imagtc3kcmph6ax5.jpeg?q=70",
            price : 50000,
            specifications : [
                "128 GB ROM",
                "15.49 cm (6.1 inch) Super Retina XDR Display",
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip, 6 Core Processor Processor",
                "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"
            ],
            isCart : false
        }         
    ];

    const addtocart = (product) => {
        console.log(product);
    } 

    const gotocart = () => {
        window.alert('Navigate to cart');
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <h3>Filter</h3>
                </div>
                <div className="col-sm-10">
                    {products.map(((product, index) => (
                        <div className="row border-bottom my-4 py-4" key={index}>
                        <div className="col-sm-3">
                            <img src={product.imgSrc} width={170} />
                        </div>
                        <div className="col-sm-6">
                            <h3><Link to={`/product/${product.name}?productName=${product.name}&productPrice=${product.price}`}>{product.name}</Link></h3>
                            <ul>
                                {product.specifications.map((specification, index) => (
                                    <li key={index}>{specification}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>{product.price}</h3>
                            {product.isCart ? (
                                <button className="btn btn-warning" onClick={gotocart}>Go To Cart</button>
                            ) : (
                                <button className="btn btn-primary" onClick={() => addtocart(product)}>Add To Cart</button>
                            )}
                        </div>
                    </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Products;