import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
         <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>      
          {/* Product*/}
          {/* Product*/}
         <div className="home__row">
                 <Product
                  id="-1"
                  title="Microsoft Surface Pro 7 – 12.3' Touch-Screen - 10th Gen Intel Core i5 - 8GB Memory - 128GB SSD (Latest Model) – Platinum (VDV-00001)'"
                  price={11.45}
                  rating={5}
                 image="https://m.media-amazon.com/images/I/71kBlSKi3eL._AC_UL320_.jpg"
                 />
                <Product
                  id="1252"
                  title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard,"
                  price={11.45}
                  rating={4}
                 image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL320_.jpg" 
                 />
         
         </div>

         <div className="home__row">
                 <Product
                  id="1234"
                  title="Rolex Sky Dweller Champagne Dial GMT 18kt Yellow Gold Mens Watch 326938CAO"
                  price={54950.00}
                  rating={5}
                 image="https://m.media-amazon.com/images/I/611tvg2GZYL._AC_UL320_.jpg" 
                 />
                <Product
                  id="1234"
                  title="Apple Mac Pro MD878LLA, Intel Xeon E5 Six Core 3.5GHz, 32GB RAM, 1TB SSD - Black (Renewed)"
                  price={1,599.99 }
                  rating={4}
                 image="https://m.media-amazon.com/images/I/51ZYFw5caRL._AC_UY218_.jpg" 
                 />
                  <Product
                  id="1334"
                  title="NEW Ember Temperature Control Smart Mug 2, 10 oz, Black, 1.5-hr Battery Life - App Controlled Heated Coffee Mug - Improved Design"
                  price={99.95}
                  rating={5}
                 image="https://m.media-amazon.com/images/I/61Qy-bK+M9L._AC_UY218_.jpg" 
                 />
         </div>
         <div className="home__row">
                 <Product
                  id="15644"
                  title="Rockubot Weighted Hula Hoop for Adults Weight Loss, Exercise Hoola Hoop for Workout and Home, Weighted 2Lbs, 8 Detachable"
                  price={11.45}
                  rating={3}
                 image="https://m.media-amazon.com/images/I/614bDV3zPQS._AC_UL320_.jpg" 
                 />
               
         
         </div>
         <div className="home__row">
                 <Product
                  id="1234"
                  title="Rolex Sky Dweller Champagne Dial GMT 18kt Yellow Gold Mens Watch 326938CAO"
                  price={54950.00}
                  rating={5}
                 image="https://m.media-amazon.com/images/I/611tvg2GZYL._AC_UL320_.jpg" 
                 />
                <Product
                  id="1234"
                  title="Apple Mac Pro MD878LLA, Intel Xeon E5 Six Core 3.5GHz, 32GB RAM, 1TB SSD - Black (Renewed)"
                  price={1,599.99 }
                  rating={4}
                 image="https://m.media-amazon.com/images/I/51ZYFw5caRL._AC_UY218_.jpg" 
                 />
                  <Product
                  id="1334"
                  title="NEW Ember Temperature Control Smart Mug 2, 10 oz, Black, 1.5-hr Battery Life - App Controlled Heated Coffee Mug - Improved Design"
                  price={99.95}
                  rating={5}
                 image="https://m.media-amazon.com/images/I/61Qy-bK+M9L._AC_UY218_.jpg" 
                 />
         </div>
         <div className="home__row">
                 <Product
                  id="1234"
                  title="Microsoft Surface Pro 7 – 12.3' Touch-Screen - 10th Gen Intel Core i5 - 8GB Memory - 128GB SSD (Latest Model) – Platinum (VDV-00001)'"
                  price={11.45}
                  rating={5}
                 image="https://m.media-amazon.com/images/I/71kBlSKi3eL._AC_UL320_.jpg"
                 />
                <Product
                  id="1252"
                  title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard,"
                  price={11.45}
                  rating={4}
                 image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL320_.jpg" 
                 />
         
         </div>
        </div>
    )
}

export default Home
