import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      ></img>

      {/* Product id, title,price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="Mushoku Tensei: Jobless Reincarnation (Light Novel) Vol. 7"
          price={7.56}
          rating={5}
          image="https://m.media-amazon.com/images/I/516LtQ16OwL.jpg"
        />
        <Product
          id="14792142"
          title="That Time I Got Reincarnated as a Slime, Vol. 8 (light novel) (That Time I Got Reincarnated as a Slime (light novel))"
          price={8.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51Fu4UZFJ-L.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12395341"
          title="Logitech MX Master 3 Advanced Wireless Mouse"
          price={99}
          rating={5}
          image="https://m.media-amazon.com/images/I/614w3LuZTYL._AC_SL1500_.jpg"
        />
        <Product
          id="11934341"
          title="Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones"
          price={79.84}
          rating={4}
          image="https://m.media-amazon.com/images/I/61+WYAjltpL._AC_SL1500_.jpg"
        />
        <Product
          id="81232908"
          title="Tuwejia USB Type-C to HDMI Adapter"
          price={9.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51yQGgYD4mS._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
      <Product
          id="23462013"
          title="LG 34WP65C-B 34-Inch 21:9 Curved UltraWide"
          price={396.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/716OFWNyB4S._AC_SL1500_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
