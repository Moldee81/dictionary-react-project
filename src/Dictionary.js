import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import TypingEffect from "./TypingEffect";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults({
      word: response.data.word,
      phonetic: response.data.phonetic,
      meanings: response.data.meanings,
    });
  }
  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=6dod2fbfa8c43fe552ftae49bc36d90b`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=6dod2fbfa8c43fe552ftae49bc36d90b`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <TypingEffect />
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />
          <hr />
          <h6 className="suggestion">ie: horizon, sunset,yoga </h6>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
