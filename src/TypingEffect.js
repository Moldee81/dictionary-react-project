import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <div>
      <h1 className="title">
        <Typewriter
          options={{
            cursor: "",
            delay: 85,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("D i c t i o n a r y")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h1>
    </div>
  );
}
