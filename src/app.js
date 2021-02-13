import "./app.css";
import { fromAlBhed, pronounce, toAlBhed } from "./translator";

document.addEventListener("DOMContentLoaded", () => {
  const englishInput = document.querySelector("#english");
  const albhedInput = document.querySelector("#albhed");
  const pronunciationElement = document.querySelector("#pronunciation");

  englishInput.addEventListener("input", (event) => {
    const translated = toAlBhed(event.target.value);
    const pronunciation = pronounce(translated);

    albhedInput.value = translated;
    pronunciationElement.innerHTML = pronunciation;
  });
  albhedInput.addEventListener("input", (event) => {
    const translated = fromAlBhed(event.target.value);
    const pronunciation = pronounce(event.target.value);

    englishInput.value = translated;
    pronunciationElement.innerHTML = pronunciation;
  });
});
