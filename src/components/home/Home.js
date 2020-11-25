import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'

import './Home.css'
import HomeTrending from './HomeTrending';

import carousel1 from '../../img/carousel-1.jpg';
import carousel2 from '../../img/carousel-2.1.jpg';
import carousel4 from '../../img/carousel-4.jpg';
import beauty1 from '../../img/beauty/beauty-1.png';
import beauty2 from '../../img/beauty/beauty-2.png';
import beauty3 from '../../img/products/product-1.png'
import product1 from '../../img/products/product-5.5.jpeg';
import product2 from '../../img/products/product-2.2.jpg';
import product3 from '../../img/products/product-9.jpg';
import product4 from '../../img/products/product-8.8.jpg';
import product5 from '../../img/products/product-6.jpg';
import brand from '../../img/brand.jpg'
import trending1 from '../../img/trending/trending-1.jpg';
import trending2 from '../../img/trending/trending-2.jpg';
import trending3 from '../../img/trending/trending-3.jpg';
import trending4 from '../../img/trending/trending-4.jpg';
import trending5 from '../../img/trending/trending-5.jpg';
import trending6 from '../../img/trending/trending-6.jpg';
import trending7 from '../../img/trending/trending-7.jpg';
import trending8 from '../../img/trending/trending-8.jpg';
import offerBanner from '../../img/offer-banner.jpg';





function Home() {
    const [screen, setScreen] = useState(window.innerWidth)

    const getSize = () => {
        setScreen(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', getSize)
    })
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
                                <button className='btn btn-outline-info btn-md mt-2'>Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item a" >
                        <div className="carousel-content" style={{ backgroundImage: `url(${carousel4})` }}>
                            <div className="carousel-text">
                                <h1> Fashion <span style={{ color: '#222', fontWeight: 'normal' }}>&</span> <span>Shop</span></h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum amet.</span>
                                <button className='btn btn-outline-info btn-md mt-2'>Comprar</button>
                            </div>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
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
                    <div className="home__news-imgs">
                        <div className="home__news-left">
                            <img className="home__news-left-img" src={product1} alt="" />
                        </div>
                        <div className="home__news-right">
                            <img className='home__news-right-img' src={product2} alt="..." />
                            <img className='home__news-right-img' src={product3} alt="..." />
                            <img className='home__news-right-img' src={product4} alt="..." />
                            <img className='home__news-right-img' src={product5} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__brand">
                <div className="home__brand-left p-4">
                    <h6>Moda hombre</h6>
                    <p>Lorem Ipsum is simply thedummy text of dummy text of the printing and typesetting industry</p>
                    <button className='btn'>comprar</button>
                </div>
                <div className="home__brand-right">
                    <img src={brand} alt="" />
                </div>
            </div>
            <div className='home__trending'>
                <h1 className="home__tending-title">Tendencias</h1>
                <div className='home__trending-product'>
                    <HomeTrending a={true} img={trending1} title='adipisci velit' price={22} pos_rating={5} neg_rating={0} btn='compar' id='1' />
                    <HomeTrending img={trending2} title='nulla pariatur' price={100} pos_rating={2} neg_rating={3} btn='compar' id='2' />
                    <HomeTrending img={trending3} title='autem vel eumiure' price={35} pos_rating={4} neg_rating={1} btn='compar' id='3' />
                    <HomeTrending img={trending4} title='vel illum qui dolorem' price={14} pos_rating={2} neg_rating={3} btn='compar' id='4' />
                    <HomeTrending img={trending5} title='eum iu' price={23} pos_rating={4} neg_rating={1} btn='compar' id='5' />
                    <HomeTrending img={trending6} title='Qure reprehenderit' price={33} pos_rating={5} neg_rating={0} btn='compar' id='6' />
                    <HomeTrending img={trending7} title='velit tur' price={40} pos_rating={3} neg_rating={2} btn='compar' id='7' />
                    <HomeTrending img={trending8} title='autem vel eum ' price={50} pos_rating={4} neg_rating={1} btn='compar' id='8' />
                </div>
            </div>

            <div className="home__offer-banner">
                <img className='home__offer-banner-img' src={offerBanner} alt="" />
                <form action="" className='home__newsletter'>
                    <div className='text-center my-3'>
                        <h4 className='home__newsletter-title'>Nuestro newsletter</h4>
                        <small className='text-muted'>Suscribirse para tener las ultimas ofertas</small>
                    </div>
                    <div>
                        <label htmlFor="input-name">Ingresa tu nombre</label>
                        <input className='form-control' type="text" id='input-name' />
                    </div>
                    <div className='my-2'>
                        <label htmlFor="input-email">Ingresa tu email</label>
                        <input className='form-control' type="text" id='input-email' />
                    </div>
                    <button className='btn btn-block my-2 text-uppercase text-light bg-primary'>suscribirse</button>
                </form>

            </div>

            <footer className=' bg-dark '>
                <div className='home__footer p-5 mt-5'>
                    <div className='home__footer-nav'>
                        <ul className='list-inline home__footer-items'>
                            <Link className='text-decoration-none' to='/'><li>Inicio</li></Link>
                            <Link className='text-decoration-none' to='/'><li>Belleza</li></Link>
                            <Link className='text-decoration-none' to='/'><li>Paginas</li></Link>
                            <Link className='text-decoration-none' to='/'><li>Tecnologías</li></Link>
                        </ul>
                    </div>
                    <div className='home__footer-contact my-4'>
                        <h4>Contacto</h4>
                        <div className="pt-1">
                            <p> <span>Email:</span> <em>loubyc2@gmail.com</em> </p>
                            <p> <span>Tel:</span> <em> +56 9 9946 6909</em> </p>
                        </div>
                    </div>
                    <div className='home__footer-socialMedia'>
                        <h4>Redes Sociales</h4>
                        <div className='home__footer-icons text-center pt-2'>
                            <FaIcons.FaFacebookF className='home__footer-icon mx-2' />
                            <FaIcons.FaTwitter className='home__footer-icon mx-2' />
                            <FaIcons.FaInstagram className='home__footer-icon mx-2' />
                        </div>
                    </div>
                </div>
                <p className='text-muted text-center'> © 2020 - Ecommerce Website design by Lb Design</p>
            </footer>
            {screen}
        </div>
    )
}

export default Home
