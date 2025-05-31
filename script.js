const container = document.getElementById("cards-container");
const courseSelect = document.getElementById("course-select");

function renderCards(courseKey) {
  container.innerHTML = "";

  const cards = cardData[courseKey];
  if (!cards) return;

  cards.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const questionEl = document.createElement("div");
    questionEl.className = "question";
    questionEl.textContent = item.question;

    const answerEl = document.createElement("ul");
    answerEl.className = "answer";
    item.answer.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      answerEl.appendChild(li);
    });

    card.appendChild(questionEl);
    card.appendChild(answerEl);

    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });

    container.appendChild(card);
  });
}

// Výchozí kurz
renderCards(courseSelect.value);

// Přepínání kurzu
courseSelect.addEventListener("change", (e) => {
  renderCards(e.target.value);
});
