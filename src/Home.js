import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="ad" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Samsung Galaxy Tab S6 Lite 10.4', 64GB WiFi Tablet Oxford Gray - SM-P610NZAAXAR - S Pen Included"
                        price={343.58}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/718B6zl+b6L._AC_UL320_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Champion LIFE Men's Reverse Weave Pullover Hoodie"
                        price={48.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91TLujuwlOL._AC_UL320_.jpg"
                    />                    
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                        price={119.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Arlo Essential Spotlight Camera | Wire-Free, 1080p Video | Color Night Vision, 2-Way Audio, 6-Month Battery Life, Motion Activated, Direct to Wi-Fi, No Hub Needed | Works with Alexa | White"
                        price={128.26}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/31L79Ulfw6L._AC_SX184_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Playing with Fire: A Bad Boy College Romance"
                        price={14.39}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/515pitG4yqL.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
                        price={278.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
