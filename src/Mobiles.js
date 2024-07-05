import { Link } from "react-router-dom";

function Mobiles() {

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
    ];

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-2">
                    <h3>Filter</h3>
                </div>
                <div className="col-sm-10">
                    {mobiles.map(mobile => (
                        <div className="row border-bottom py-3">
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img src={mobile.imgSrc} width={'auto'} height={'200px'} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h3><Link to={`/mobile/${mobile.name}`}>{mobile.name}</Link></h3>
                                <ul>
                                    {mobile.specifications.map(specification => (
                                        <li>{specification}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <h4>{mobile.price}</h4>
                                <button className="btn btn-warning">Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mobiles;