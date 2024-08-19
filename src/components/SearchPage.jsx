import React from "react";
import './SearchForm.css';
import SearchForm from "./SearchForm";
import slidingimage1 from '../assets/SlidingImages/Rectangle 3468480.png';
import slidingimage2 from '../assets/SlidingImages/Rectangle 3468481.png';
import slidingimage3 from '../assets/SlidingImages/Rectangle 3468482.png';
import slidingimage4 from '../assets/SlidingImages/Rectangle 3468483.png';
import slidingimage5 from '../assets/SlidingImages/Rectangle 3468484.png';
import slidingimage6 from '../assets/SlidingImages/Rectangle 3468485.png';
import slidingimage7 from '../assets/SlidingImages/Rectangle 3468486.png';
import slidingimage8 from '../assets/SlidingImages/Rectangle 3468487.png';
import blureffect from '../assets/Ellipse 150.png'

function SearchPage() {
  return (
    <div className="searchPage">
      <img src={blureffect} alt="Blur Effect" className="blurEffect" />
      <div className="contentWrapper">
        <div className="imageContainer">
          <div className="column">
            <img src={slidingimage1} alt="Image 1" />
            <img src={slidingimage2} alt="Image 2" />
            <img src={slidingimage3} alt="Image 3" />
            <img src={slidingimage4} alt="Image 4" />
          </div>
          <div className="column">
            <img src={slidingimage5} alt="Image 5" />
            <img src={slidingimage6} alt="Image 6" />
            <img src={slidingimage7} alt="Image 7" />
            <img src={slidingimage8} alt="Image 8" />
          </div>
        </div>
        <div className="textContainer">
          <div className="divider">
          <h1 className="title">Book an appointment with <span className="highlight">lifestyle medicine</span> experts</h1>
          <p className="subtitle">Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
          <SearchForm className="searchForm" />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
