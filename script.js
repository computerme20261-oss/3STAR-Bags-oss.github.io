/* ================= ELEMENTS ================= */
const bag = document.getElementById("bag");
const previewArea = document.getElementById("bagPreview");

const bagType = document.getElementById("bagType");
const bagColor = document.getElementById("bagColor");
const printText = document.getElementById("printText");

const bagLength = document.getElementById("bagLength"); // L (Height)
const bagBreadth = document.getElementById("bagBreadth"); // B (Width)

const gsmSelect = document.getElementById("gsm");
const borderType = document.getElementById("borderType");
const borderColor = document.getElementById("borderColor");

const qtyInput = document.getElementById("quantity");

const previewBtn = document.getElementById("previewBtn");
const sendBtn = document.getElementById("sendBtn");

/* ================= CONSTANTS ================= */
const PX = 6; // 1 inch = 6px (preview scale)

/* ================= INIT ================= */
updatePreview();

/* ================= EVENTS ================= */
[
  bagType, bagColor, printText,
  bagLength, bagBreadth,
  gsmSelect, borderType, borderColor,
  qtyInput
].forEach(el => {
  el.addEventListener("input", updatePreview);
});

previewBtn.addEventListener("click", updatePreview);
sendBtn.addEventListener("click", sendWhatsApp);

/* ================= MAIN PREVIEW FUNCTION ================= */
function updatePreview(){

  /* ---- SIZE ---- */
  const L = Number(bagLength.value) || 14;
  const B = Number(bagBreadth.value) || 12;

  bag.style.height = Math.min(420, L * PX) + "px";
  bag.style.width  = Math.min(320, B * PX) + "px";

  /* ---- BAG TYPE ---- */
  bag.className = "bag"; // reset
  bag.classList.add(bagType.value);

  /* ---- COLOR ---- */
  bag.style.background = bagColor.value;

  /* ---- GSM ---- */
  bag.setAttribute("data-gsm", gsmSelect.value);

  /* ---- BORDER ---- */
  bag.classList.remove("full-border","half-border");

  if(borderType.value === "full"){
    bag.classList.add("full-border");
    bag.style.borderColor = borderColor.value;
  }
  else if(borderType.value === "half"){
    bag.classList.add("half-border");
    bag.style.borderColor = borderColor.value;
  }

  /* ---- PRINT CONTENT ---- */
  let print = bag.querySelector(".print");
  if(!print){
    print = document.createElement("div");
    print.className = "print";
    bag.appendChild(print);
  }

  print.innerText = printText.value || "";
}

/* ================= WHATSAPP SEND ================= */
function sendWhatsApp(){

  const L = bagLength.value || 14;
  const B = bagBreadth.value || 12;

  const msg =
`🛍️ *Bag Customization Order*

Bag Type: ${bagType.value}
Size: ${L}" (L) × ${B}" (B)
Color: ${bagColor.value}
GSM: ${gsmSelect.value}

Print: ${printText.value || "No Print"}

Border: ${borderType.value}
Border Color: ${borderColor.value}

Quantity: ${qtyInput.value || "Not entered"}

Please confirm price & delivery.`;

  const phone = "91XXXXXXXXXX"; // replace with your number
  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);

  window.open(url, "_blank");
}
