import React from "react";

export default function About(props) {
  return (
    <div
      className={`container text-${props.mode === "light" ? "dark" : "light"}`}
    >
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
        style={{ backgroundColor: props.mode === "light" ? "white" : "grey" }}
      >
        <h3 className="display-4">TextAnalyzer&copy;</h3>
        <p>
          Free software utility which allows you to find the most frequent
          phrases and frequencies of words. Non-English language texts are
          supported. It also counts number of words, characters, sentences and
          syllables. Also calculates lexical density.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white bg-dark">
            <h4>DEVELOPER</h4>
            <p>Name: Navdeep Sharma </p>
            <p>M: 8544881995 </p>
            <p>Email: navdeepsharma4072@gmail.com</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
