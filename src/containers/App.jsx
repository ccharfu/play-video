import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories title="Music">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Second">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="My List">
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
