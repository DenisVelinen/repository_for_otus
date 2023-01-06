const buttonSendText = document.querySelector(".buttonSendText");
const userInputText = document.querySelector(".userInputText");

function getTextFromInput() {
  const userText = document.querySelector(".userInputText");
  return userText.value;
}

function addParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.innerText = text;

  const content = document.querySelector(".content");
  content.append(paragraph);
}

function clearInput() {
  const input = document.querySelector(".userInputText");
  input.value = "";
}

function showButton() {
  buttonSendText.hidden = false;
}

function hideButton() {
  buttonSendText.hidden = true;
}

function removeParagraph() {
  const allParagraphs = document.querySelectorAll("p");
  if (allParagraphs.length > 5) {
    allParagraphs[0].remove();
  }
}

function clickOnSendButton() {
  const userText = getTextFromInput();
  addParagraph(userText);
  clearInput();
  hideButton();
  removeParagraph();
}

buttonSendText.addEventListener("click", clickOnSendButton);
userInputText.addEventListener("input", showButton);
