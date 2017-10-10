// Arrays Sentence and Replacements are Defined
var sentence = [];
var replacements = [];
// Variable Index set to 0
var index = 0;
// Variable keepPlaying set to 1
var keepPlaying = "1";
// Do while keepPlaying = 1
do {
keepPlaying = prompt("Keep Playing? (0 or 1)");
/* }
while(keepPlaying == "1");
alert("Stop playing."); */
// Program prompts for Author.
alert("Author first. Filler leaves please.");
alert("Enter a sentence, word by word.");
alert("Stop with 'END'. End with punctuation as separate word.");
do {
       sentence[index]=prompt("Next word?");
       index++;
    }
    while (sentence[index-1] != "END");
alert(sentence);
keepPlaying = prompt("Keep Playing? (0 or 1)");
}
while(keepPlaying == "1");
alert("Stop playing.");

// Author enters position and parts of speech for replacement words (Noun, Proper Noun, Verb, Adjective, Adverb)
// Re-set Index
index=0;
// Ask Author for Positions and Parts of Speech
alert("Enter word positions and parts of speech to replace");
// Begin Second Loop
do {
    // Ask for position of first replacement word, convert to array position
    replacements[index]=prompt("First position?")-1;
    if (replacements[index] != "^") {
         // Set value of that position in sentence to part of speech, in brackets
         sentence[replacements[index]]="["+prompt("Part of speech?")+"]";
         // Advance to next index value
          index++;
         }
    }
while (replacements[index] != "^");
// End Second Loop
// Test for accuracy
alert(sentence);

// Program asks if want to keep playing (set keepPlaying to 0 if not)
keepPlaying = prompt("Keep Playing? (0 or 1)");
// If they do, While statement ends and play resumes

while(keepPlaying == "1");
// If they do not, write "I hope you had fun!" and end.
alert("I hope you had fun!");