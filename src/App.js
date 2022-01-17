import "./styles.css";
import data from "./emojidata";
import Card from "./Components/Card";

// function emoji(emoji) {
//   <Emojicard
//   name={emoji.name}
//   />;
// }

// function create(emojis) {
//   return (
//     <div className="container">
//       <Card
//         key={emojis.id}
//         name={emojis.name}
//         emoji={emojis.emoji}
//         meaning={emojis.meaning}
//       />
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="App">
      <h1>Emoji Media</h1>
    
      {/* arrow function */}
      {data.map((emojis) => (
        <div className="container">
          <Card
            key={emojis.id}
            name={emojis.name}
            emoji={emojis.emoji}
            meaning={emojis.meaning}
          />
        </div>
      ))};

    </div>
  );
}
