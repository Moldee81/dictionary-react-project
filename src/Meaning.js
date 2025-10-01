import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="meaning-section">
        <p>
          <strong> Definition:</strong> {props.meaning.definition}
          {props.meaning.example && (
            <>
              <br />
              <em>
                <strong> Example:</strong> {props.meaning.example}
              </em>
            </>
          )}
        </p>
        {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
          <p>
            <strong>Synonyms:</strong> {props.meaning.synonyms.join(", ")}
          </p>
        )}
        {props.meaning.antonyms && props.meaning.antonyms.length > 0 && (
          <p>
            <strong>Antonyms:</strong> {props.meaning.antonyms.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
