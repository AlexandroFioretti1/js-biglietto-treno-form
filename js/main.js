/* 
Descrizione:
1) scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

/* 
TOOLS
- switch / case
- getElementById
- addEventListener
- fuction()
- If / else
-const\let
*/

/* const */
const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");
const ticketPreviewEl = document.getElementById("final_ticket");

/* differenza di prezzo in base all'età */
generateBtn.addEventListener("click", function () {
  const age = document.getElementById("age").value;
  const km = Number(document.getElementById("km").value);
  const costForKm = 0.21;

  let finalPrice = km * costForKm;

  switch (age) {
    case "minorenne":
      finalPrice *= 0.8;
      console.log(
        `Prezzo minorenne: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`
      );
      break;
    case "over65":
      finalPrice *= 0.6;
      console.log(
        `Prezzo over 65: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`
      );
      break;
    default:
      console.log(
        `Prezzo maggiorenne: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`
      );
  }
  ticketPreviewEl.classList.remove("d-none");
});
