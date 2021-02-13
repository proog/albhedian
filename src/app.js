import "./app.css";
import { fromAlBhed, toAlBhed } from "./translator";

document.addEventListener("DOMContentLoaded", () => {
  const englishInput = document.querySelector("#english");
  const albhedInput = document.querySelector("#albhed");

  englishInput.addEventListener("input", (event) => {
    const translated = toAlBhed(event.target.value);
    albhedInput.value = translated;
  });

  albhedInput.addEventListener("input", (event) => {
    const translated = fromAlBhed(event.target.value);
    englishInput.value = translated;
  });
});
