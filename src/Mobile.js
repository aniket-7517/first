import { useState } from "react";
import { useParams } from "react-router-dom";

function Mobile() {

    const mobiles = [
        {
            name: 'Apple iPhone 15',
            price: '70000',
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false',
            images: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/p/n/-original-imagtc5fxzdrdvyc.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/m/3/-original-imagtc5ffhbausfy.jpeg?q=70&crop=false'
            ],
            specifications: [
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                '48MP + 12MP | 12MP Front Camera',
                'A16 Bionic Chip, 6 Core Processor Processor'
            ]
        },
        {
            name: 'OnePlus 11R 5G',
            price: '44000',
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/w/l/11r-5g-5011102527-oneplus-original-imagn3bq8t4ja5rx.jpeg?q=70&crop=false',
            images: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/w/l/11r-5g-5011102527-oneplus-original-imagn3bq8t4ja5rx.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/8/r/a/11r-5g-5011102527-oneplus-original-imagn3bqjaczgvct.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/u/t/11r-5g-5011102527-oneplus-original-imagn3bqhnhgudtu.jpeg?q=70&crop=false'
            ],
            specifications: [
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                '48MP + 12MP | 12MP Front Camera',
                'A16 Bionic Chip, 6 Core Processor Processor'
            ]
        },
        {
            name: 'Google Pixel 7',
            price: '50000',
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/u/3/-original-imaggsuddwubypxp.jpeg?q=70&crop=false',
            images: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/u/3/-original-imaggsuddwubypxp.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/f/k/k/-original-imaggsudjdhdpmk7.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/g/6/-original-imaggsudsvb6hwuv.jpeg?q=70&crop=false'
            ],
            specifications: [
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                '48MP + 12MP | 12MP Front Camera',
                'A16 Bionic Chip, 6 Core Processor Processor'
            ]
        }
    ]

    const { mobileName } = useParams();
    const filteredMobile = mobiles.find(mobile => mobile.name === mobileName);
    const [bannerImg, setBannerImg] = useState(filteredMobile.images[0]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-2">
                            <div>
                                {filteredMobile.images.map(img => (
                                    <div className="border text-center py-2">
                                        <img src={img} width={'50px'} height={'80px'} onClick={() => setBannerImg(img)} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-sm-9 ms-5">
                            <img src={bannerImg} width={'250px'} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h3 className="ms-3">{filteredMobile.name}</h3>
                    <h4 className="ms-3 mt-3">{filteredMobile.price}</h4>
                    <ul className="mt-4">
                        {filteredMobile.specifications.map(specification => (
                            <li className="mt-2">{specification}</li>
                        ))}
                    </ul>
                    <div className="row">
                        <div className="col-sm-3">
                            <button className="btn btn-success">Buy Now</button>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-warning">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile;