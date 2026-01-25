/* ================================
   BAG PREVIEW
================================ */
function previewBag() {
  const area = document.getElementById("bagPreview");
  area.innerHTML = "";

  // Check bag type selected
  const bagTypeInput = document.querySelector("input[name='bagType']:checked");
  if (!bagTypeInput) {
    alert("Please select Bag Type");
    return;
  }

  /* CREATE BAG */
  const bag = document.createElement("div");
  bag.className = "bag";

  /* BAG TYPE */
  const bagType = bagTypeInput.value;
  bag.classList.remove("handle", "stick", "dcut");

  if (bagType === "Handle Bag") bag.classList.add("handle");
  if (bagType === "Stick Bag") bag.classList.add("stick");
  if (bagType === "D-Cut Bag") bag.classList.add("dcut");

  /* SIZE */
  const L = parseInt(document.getElementById("bagLength").value) || 14;
  const B = parseInt(document.getElementById("bagBreadth").value) || 18;

  bag.style.width = Math.min(260, L * 6) + "px";
  bag.style.height = Math.min(340, B * 6) + "px";

  /* BAG COLOR */
  const bagColor = document.getElementById("bagColor").value;
  bag.style.background = bagColor.toLowerCase();

  /* BORDER */
  const borderType = document.getElementById("borderType").value;
  const borderColor = document.getElementById("borderColor").value;

  bag.classList.remove("half-border", "full-border");

  if (borderType === "Half Border") bag.classList.add("half-border");
  if (borderType === "Full Border") bag.classList.add("full-border");

  bag.style.borderColor = borderColor.toLowerCase();

  /* PRINT TEXT */
  const printText = document.createElement("div");
  printText.className = "print";

  const printContent = document.getElementById("printContent").value;
  const printColor = document.getElementById("printColor").value;

  if (printContent === "Logo Only") {
    printText.innerText = "LOGO";
  } else if (printContent === "Logo + Address") {
    printText.innerText = "LOGO\nAddress";
  } else {
    printText.innerText = "LOGO\nShop Name\nAddress";
  }

  printText.style.color = printColor.toLowerCase();

  /* ANIMATION */
  bag.style.transform = "scale(0.8)";
  bag.style.opacity = "0";

  setTimeout(() => {
    bag.style.transition = "all 0.35s ease";
    bag.style.transform = "scale(1)";
    bag.style.opacity = "1";
  }, 50);

  bag.appendChild(printText);
  area.appendChild(bag);
}

/* ================================
   WHATSAPP SEND
================================ */
function sendWhatsApp() {
  const bagTypeInput = document.querySelector("input[name='bagType']:checked");
  if (!bagTypeInput) {
    alert("Please preview the bag first");
    r
