const textArea = document.getElementById("text");
const charsCount = document.getElementById("chars");
const noSpacesCount = document.getElementById("charsNoSpaces");
const wordsCount = document.getElementById("words");
const linesCount = document.getElementById("lines");
const clearBtn = document.getElementById("clear");

function updateCounts() {
  const text = textArea.value;
  const trimmed = text.trim();

  // characters: spaces and newlines count too
  charsCount.textContent = text.length;

  // characters without any whitespace
  noSpacesCount.textContent = text.replace(/\s/g, "").length;

  // words: split on runs of whitespace, but empty text must give 0
  let words = 0;
  if (trimmed !== "") {
    words = trimmed.split(/\s+/).length;
  }
  wordsCount.textContent = words;

  // lines: split on newline, but empty text must give 0
  let lines = 0;
  if (text !== "") {
    lines = text.split("\n").length;
  }
  linesCount.textContent = lines;
}

textArea.addEventListener("input", updateCounts);

clearBtn.addEventListener("click", function () {
  textArea.value = "";
  updateCounts();      // setting .value from JS does not fire "input"
  textArea.focus();
});

updateCounts();        // start the page with correct zeros