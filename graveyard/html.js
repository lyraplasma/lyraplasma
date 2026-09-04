const countdown_input = document.getElementById("countdown_input"),
      countdown_btn = document.getElementById("countdown_btn"),
      countdown_output = document.getElementById("countdown_output");
countdown_btn.addEventListener("click", () => {
    for(let i = countdown_input.value; 0 < i; i--) {countdown_output.textContent += `${i}\n`}
    countdown_output.textContent += "blastoff!";
});
const admitted = document.getElementById("admitted"),
      refused = document.getElementById("refused");
const people = [
  "Chris", "Anne", "Colin",
  "Terri", "Phil", "Lola",
  "Sam", "Kay", "Bruce"];
for (const r of people.filter(n => n === "Lola" || n === "Phil")) {
    refused.textContent += `${r}\n`
;
}
for (const p of people) {
    if (p === "Lola" || p === "Phil") continue;
    else { admitted.textContent += `${p}\n`; }
}
