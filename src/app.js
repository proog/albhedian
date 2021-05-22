import "./app.css";
import { fromAlBhed, pronounce, toAlBhed } from "./translator";

document.addEventListener("DOMContentLoaded", () => {
  const englishInput = document.querySelector("#english");
  const albhedInput = document.querySelector("#albhed");
  const pronunciation = document.querySelector("#pronunciation");
  const fontCheckbox = document.querySelector("#albhed-font");

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

  fontCheckbox.addEventListener("change", () => {
    toggleAlBhedFont();
  });

  toggleAlBhedFont();

  function toggleAlBhedFont() {
    if (fontCheckbox.checked) {
      albhedInput.classList.add("font-albhed");
    } else {
      albhedInput.classList.remove("font-albhed");
    }
  }
});
