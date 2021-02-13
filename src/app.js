import "./app.css";
import { fromAlBhed, pronounce, toAlBhed } from "./translator";

document.addEventListener("DOMContentLoaded", () => {
  const englishInput = document.querySelector("#english");
  const albhedInput = document.querySelector("#albhed");
  const pronunciationToggle = document.querySelector("#pronunciationToggle");
  const pronunciationOutput = document.querySelector("#pronunciation");

  englishInput.addEventListener("input", (event) => {
    const translated = toAlBhed(event.target.value);
    const pronunciation = pronounce(translated);

    albhedInput.value = translated;
    pronunciationOutput.value = pronunciation;
  });

  albhedInput.addEventListener("input", (event) => {
    const translated = fromAlBhed(event.target.value);
    const pronunciation = pronounce(event.target.value);

    englishInput.value = translated;
    pronunciationOutput.value = pronunciation;
  });

  pronunciationToggle.addEventListener("change", (event) => {
    albhedInput.style.display = event.target.checked ? "none" : "block";
    pronunciationOutput.style.display = event.target.checked ? "block" : "none";
  });
});
