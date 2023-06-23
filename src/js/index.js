const adviceId = document.querySelector(".gerador-de-conselho p > span");
const adviceText = document.querySelector("blockquote");
const adviceButton = document.querySelector("button");



window.onload = () => {
  getAdvice();
};

adviceButton.addEventListener("click", getAdvice);

async function getAdvice() {
  
  const response = await fetch("	https://api.adviceslip.com/advice")
  const data = await response.json()

  const advice = data.slip;

  adviceText.innerHTML = `"${advice.advice}"`;
  adviceId.innerHTML = `${advice.id}`;
}

/*
----- Solução prevista do curso DevQuest ------
const adviceButton = document.querySelector("button");
const adviceId = document.querySelector(".wrapper p > span");
const adviceText = document.querySelector(".blockquote");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

adviceButton.addEventListener("click", getAdvice);

getAdvice();
*/