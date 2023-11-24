function DeEncriptMorse(mCode, mode = 1) {
  const morseCodes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
    ".----",
    "..---",
    "...--",
    "....-",
    ".....",
    "-....",
    "--...",
    "---..",
    "----.",
    "-----",
    ".-.-.-",
    "--..--",
    "..--..",
    ".----.",
    "-.-.--",
    "-..-.",
    "-.--.",
    "-.--.-",
    ".-...",
    "---...",
    "---...",
    "-....-",
    "..--.-",
    ".-..-.",
    "...-..-",
    ".--.-.",
  ];

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    ",",
    "?",
    "'",
    "!",
    "/",
    "(",
    ")",
    "&",
    ":",
    ";",
    "=",
    "+",
    "-",
    "_",
    '"',
    "$",
    "@",
  ];

  let deCripted = [];

  ////////////////////// Mode 1
  if (mode == 1) {
    let morseCode = mCode[0].split(" ");
    //const morse_code = ['.-- .- -. -.. . .-. .-.. ..- ... -'];
    for (let i = 0; i < morseCode.length; i++) {
      for (let j = 0; j < morseCodes.length; j++) {
        if (morseCode[i] === morseCodes[j]) {
          deCripted.push(letters[j]);
        }
      }
    }

    return (
      deCripted.reduce((acc, val) => acc + val, "") || DeEncriptMorse(mCode, 2)
    );
    ///////////////////// Mode 2
  } else {
    //const letters_toMorse = ['PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS'];

    const letterArray = mCode[0].split("");

    for (let i = 0; i < letterArray.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (letterArray[i] === letters[j]) {
          deCripted.push(morseCodes[j] + " ");
        }
      }
    }

    deCripted[deCripted.length - 1] = deCripted[deCripted.length - 1].trim();

    deCripted = deCripted.reduce((acc, val) => acc + val, "");

    return deCripted || DeEncriptMorse(mCode, 1);
  }
}

const morse_code = [".-- .- -. -.. . .-. .-.. ..- ... -"];
const letters_toMorse = ["PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS"];

DeEncriptMorse(letters_toMorse, 2);
