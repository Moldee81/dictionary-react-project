import React {useEffect} from "react";

const indexRef = useRef(0);

function TypingEffect() {
  const text = "D  i c t i o n a r y";

  useEffect(() => {
    const type = () => {
      if (indexRef.current < text.length) {
        setDisplayed((prev) => prev + text.charAt(indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(timer);
        return;
      }
    };
    const timer = setInterval(type, 180);
    return () => clearInterval(timer);
  }, []);

  return <h1 className="title">{displayed}</h1>;
}
