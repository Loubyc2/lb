import React from 'react';
import './Home.css'

import carousel1 from '../../img/carousel-1.jpg';
import carousel2 from '../../img/carousel-2.1.jpg';
import carousel4 from '../../img/carousel-4.jpg';
import beauty1 from '../../img/beauty/beauty-1.png';
import beauty2 from '../../img/beauty/beauty-2.png';
import beauty3 from '../../img/products/product-1.png'
import product1 from '../../img/products/product-5.jpeg';
import product2 from '../../img/products/product-2.jpg';
import product3 from '../../img/products/product-3.jpg';
import product4 from '../../img/products/product-4.jpg';
import product5 from '../../img/products/product-6.jpg';
import brand from '../../img/brand.jpg'




function Home() {
    return (
        <div className='home'>
            <div id='home-carousel' className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <div className="carousel-content" style={{ backgroundImage: `url(${carousel1}` }}>
                            <div className="carousel-text-tech">
                                <h1>nuevas tecnologias</h1>
                                <button className='btn btn-outline-light mt-3'>Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item a" >
                        <div className="carousel-content" style={{ backgroundImage: `url(${carousel2})` }}>
                            <div className="carousel-text">
                                <h1> Fashion <span style={{ color: '#222', fontWeight: 'normal' }}>&</span> <span>belleza</span></h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum amet.</span>
                                <button className='btn btn-outline-info btn-sm mt-2'>Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item a" >
                        <div className="carousel-content" style={{ backgroundImage: `url(${carousel4})` }}>
                            <div className="carousel-text">
                                <h1> Fashion <span style={{ color: '#222', fontWeight: 'normal' }}>&</span> <span>Shop</span></h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum amet.</span>
                                <button className='btn btn-outline-info btn-sm mt-2'>Comprar</button>
                            </div>
                        </div>
                    </div>

                </div>
                <a class="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className='home__promotions' >
                <div className="home__promotion mx-2" style={{ backgroundImage: `url(${beauty1})` }}>
                    <div className="home__promotion-text">
                        <h4>Promocion</h4>
                        <span>get</span>
                        <p>50% off</p>
                    </div>
                </div>
                <div className="home__promotion mx-2" style={{ backgroundImage: `url(${beauty3})` }}>
                    <div className="home__promotion-text">
                        <h4>mas vendido</h4>
                        <span>get</span>
                        <p>24% off</p>
                    </div>
                </div>
                <div className="home__promotion mx-2" style={{ backgroundImage: `url(${beauty2})` }}>
                    <div className="home__promotion-text">
                        <h4>Especial</h4>
                        <span>get</span>
                        <p>20% off</p>
                    </div>
                </div>
            </div>
            <div style={{ padding: '0 42px' }}>
                <div className="home__news">
                    <h1 className="home__news-title">Los nuevos</h1>
                    <div className="home__news-img">
                        <div className="home__news-img-left">
                            <img src={product1} alt="" />
                        </div>
                        <div className="home__news-img-right">
                            <figure>
                                <img src={product2} alt="" />
                                <img className='' src={product3} alt="" />
                            </figure>
                            <figure className="">
                                <img src={product4} alt="" />
                                <img className='' src={product5} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__brand">
                <div className="home__brand-left">
                    <h6>Moda hombre</h6>
                    <p>Lorem Ipsum is simply thedummy text of dummy text of the printing and typesetting industry</p>
                    <button className='btn'>comprar</button>
                </div>
                <div className="home__brand-right">
                    <img src={brand} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
