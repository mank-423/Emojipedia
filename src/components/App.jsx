import React from "react";
import Element from "./Element";
import emojipedia from "../emojipedia";


function CreateEmojis(emojis) {
  return (
    <Element
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* {emojipedia.map(CreateEmojis)}; */}
        {emojipedia.map( emojis => {
          return (
            <Element key={emojis.id} emoji={emojis.emoji} name={emojis.name} meaning={emojis.meaning}/>
          );
        }
        )};
      </dl>
    </div>
  );
}

export default App;
