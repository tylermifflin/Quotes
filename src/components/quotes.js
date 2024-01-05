import React, { useState, useEffect } from "react";
import Quotes from "../utils/API";



const QuotePage = () => {
  const [result, setResult] = useState([]);

  const newQuote = () => 
    Quotes.search()
      .then(res => setResult(res.data))
      .catch(err => console.log(err));

      useEffect(() => {
        newQuote();
      }, []);

      const handleNewQuote = () => {
        newQuote();
      };

      const { quote, author } = result;

  
  // const imageslandscape = ['/images/kalalaubeachkaui.jpg', '/images/mesaarch.jpg', '/images/montrotuiridge.jpg', 
  // '/images/mtsuperiorfall.jpg', '/images/priestlakenorthernlights.jpg', '/images/reflectioncanyon.jpg',
  // '/images/skypond.jpg', '/images/thewave.jpg'];

  //const imagesportrait = [ '/imgages/auroraiceland.jpg', '/images/cedarbreaks.jpg', '/images/deidifoss.jpg', '/images/gufufoss.jpg', 
  //'/images/haenbrekkufoss.jpg', '/images/milkywaypriestlake.jpg', '/images/northernlightsicelandcabin.jpg', '/images/skogasfoss.jpg', 
  //'/images/teahupoo.jpg']

  //const randomlandscapeimage = imageslandscape[Math.floor(Math.random() * imageslandscape.length)];
  //const randomportraitimage = imagesportrait[Math.floor(Math.random() * imagesportrait.length)];

  //const setRandomLandscapeImage = () => {
  //  setbackgroundImage(randomlandscapeimage);
 // };

  


  return (

    <div className="quotepage">
        <div className="row">
          <div className="col-md-12">
            <div className="quote-container">
              <div className="quote-text">
                <i className="fa fa-quote-left"></i><span id="quote">{apiData.quote}</span>
              </div>
              <div className="quote-author">
                <span id="author">{apiData.author}</span>
              </div>
              <div className="buttons">
                <button className="btn btn-primary" id="new-quote" onClick={handleNewQuote}>New Quote</button>
                <button className="btn btn-primary" id="new-background-image" onClick={handleNewBackgroundImage}>New Background Image</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default QuotePage;