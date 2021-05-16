import "./app.css";
import { fromAlBhed, pronounce, toAlBhed } from "./translator";

document.addEventListener("DOMContentLoaded", () => {
  const englishInput = document.querySelector("#english");
  const albhedInput = document.querySelector("#albhed");
  const pronunciation = document.querySelector("#pronunciation");

  englishInput.addEventListener("input", (event) => {
    const translated = toAlBhed(event.target.value);
    albhedInput.value = translated;

    const pronounced = pronounce(translated);
    pronunciation.value = pronounced;
  });

  albhedInput.addEventListener("input", (event) => {
    const translated = fromAlBhed(event.target.value);
    englishInput.value = translated;

    const pronounced = pronounce(event.target.value);
    pronunciation.value = pronounced;
  });
});
