import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";



const QuotePage = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");


  const fetchQuote = async () => {
    try {
        const response = await axios.get("https://zenquotes.io/api/quotes/");
        const data = await response.data;
        const firstQuote = data[0];
        setQuote(firstQuote.q);
        setAuthor(firstQuote.a);
    } catch (error) {
        console.error(error);
    }
    };

    useEffect(() => {
        fetchQuote();
      }
      , []);

      const handleNewQuote = () => {
        fetchQuote();
      };


  
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

    <div>
        <div className="row">
          <div className="col-md-12">
            <div className="quote-container">
              <div className="quote-text">
                <i className="fa fa-quote-left"></i><span id="quote">{quote}</span>
              </div>
              <div className="quote-author">
                <span id="author">{author}</span>
              </div>
              <div className="buttons">
                <button className="btn btn-primary" id="new-quote" onClick={handleNewQuote}>New Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default QuotePage;