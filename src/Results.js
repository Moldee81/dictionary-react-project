import React, { useState, useEffect } from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  const [currentResults, setCurrentResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.results) {
      setCurrentResults(props.results);
    }
    setIsLoading(false);
  }, [props.results]);
  console.log(currentResults);

  if (isLoading) {
    return <div> Loading</div>;
  }
  if (!currentResults) {
    return <div className="initiator text-center"> What's the word ?</div>;
  }
  return (
    <div className="Results">
      <section>
        <h2 className="initiator">{currentResults.word}</h2>
        {currentResults.phonetic && (
          <h3 className="phonetic mt-4 mb-4">
            <strong>Phonetic: </strong> {currentResults.phonetic}
          </h3>
        )}
        {Array.isArray(currentResults.meanings) &&
        currentResults.meanings.length > 0 ? (
          currentResults.meanings.map((meaning, index) => (
            <section key={`${currentResults.word}-${index}`}>
              <Meaning meaning={meaning} />
            </section>
          ))
        ) : (
          <div className="text-center">No meanings found.</div> // Message for no meanings
        )}
      </section>
    </div>
  );
}
