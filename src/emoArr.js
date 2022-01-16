import emojidata from "./emojidata";

const newEmojidata = emojidata.map(function (emojiEntry) {
 return emojiEntry.meaning.substring(0,100);
});

console.log(newEmojidata);
