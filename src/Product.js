import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Product() {

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


    const {productname} = useParams();
    const filteredProduct = products.find(Product => Product.name === productname);
    const [bannerImg, setBannerImg] = useState(filteredProduct.images[0]);
    console.log(filteredProduct);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="row">
                        <div className="col-sm-2">
                            {filteredProduct.images.map(img => (
                                <div className="mt-3">
                                    <img src={img} width={'60px'} alt="" onClick={() => setBannerImg(img)} />
                                </div>
                            ))}
                        </div>
                        <div className="col-sm-10">
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <h4>{filteredProduct.name}</h4>
                    <h4>{filteredProduct.price}</h4>
                    <ul>
                        {filteredProduct.specifications.map(specification => (
                            <li>{specification}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product;