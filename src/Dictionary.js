import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import TypingEffect from "./TypingEffect";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults({
      word: response.data.word,
      phonetic: response.data.phonetic,
      meanings: response.data.meanings,
    });
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=6dod2fbfa8c43fe552ftae49bc36d90b`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <TypingEffect />
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <hr />
        <h7 class="suggestion">ie: horizon, sunset,yoga </h7>
      </form>
      <Results results={results} />
    </div>
  );
}
