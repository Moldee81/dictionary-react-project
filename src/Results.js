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
    return <div className="Loader"> Loading</div>;
  }
  if (!currentResults) {
    return <div className="initiator text-center"> What's the word ?</div>;
  }
  return (
    <div className="Results">
      <h2 className="initiator">{props.results.word}</h2>
      <h3 className="phonetic mt-4 mb-4">
        <strong>Phonetic: </strong> {props.results.phonetic}
      </h3>
      {Array.isArray(props.results.meanings) &&
      props.results.meanings.length > 0 ? (
        props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })
      ) : (
        <div> No meanings found.</div>
      )}
    </div>
  );
}
