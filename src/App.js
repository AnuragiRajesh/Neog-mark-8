import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😭": "Loudly Crying Face",
  "😊": "Smiling Face with Smiling Eyes",
  "👌": "Ok Hand",
  "😒": "Unamused Face",
  "😏": "Smirking Face",
  "🤗": "Hugging Face",
  "🤔": "Thinking Face",
  "😉": "Winking Face"
};

var knownEmoji = Object.keys(emojiDict);

export default function App() {
  const [result, setResult] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var result = emojiDict[userInput];

    if (result === undefined) {
      result = "we don't have this emoji in our database";
    }
    setResult(result);
  }

  function emojiHandler(emoji) {
    var result = emojiDict[emoji];
    setResult(result);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>

      <input onChange={emojiInputHandler} />

      <h2> {result} </h2>

      {knownEmoji.map(function (emoji) {
        return (
          <span
            onClick={() => emojiHandler(emoji)}
            style={{ fontSize: "1.9rem", padding: "0.6rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
