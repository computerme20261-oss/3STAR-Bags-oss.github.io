/* ===== GLOBAL ===== */
let bag = document.getElementById("bag");
let printArea = document.getElementById("printArea");
let handle = document.getElementById("handle");

/* ===== UPDATE BAG PREVIEW ===== */
function updateBag(){

  /* RESET */
  bag.className = "bag";
  printArea.innerHTML = "";
  handle.style.display = "none";

  /* ===== BAG TYPE ===== */
  let bagType = document.getElementById("bagType").value;

  if(bagType === "handle"){
    bag.classList.add("handle");
    handle.style.display = "block";
  }
  if(bagType === "stick"){
    bag.classList.add("stick");
    handle.style.display = "block";
  }
  if(bagType === "dcut"){
    bag.classList.add("dcut");
  }

  /* ===== BAG SIZE ===== */
  let bagSize = document.getElementById("bagSize").value;
  if(bagSize === "small"){
    bag.style.width = "180px";
    bag.style.height = "230px";
  }
  if(bagSize === "medium"){
    bag.style.width = "220px";
    bag.style.height = "280px";
  }
  if(bagSize === "big"){
    bag.style.width = "260px";
    bag.style.height = "330px";
  }

  /* ===== BORDER ===== */
  let borderType = document.getElementById("borderType").value;
  let borderColor = document.getElementById("borderColor").value;

  if(borderType === "half"){
    bag.classList.add("border-half");
  }
  if(borderType === "full"){
    bag.classList.add("border-full");
  }

  bag.style.borderColor = borderColor;

  /* ===== PRINTING OPTION ===== */
  let printOption = document.getElementById("printOption").value;
  let printColor = document.getElementById("printColor").value;

  printArea.className = "printText print-" + printColor;

  if(printOption === "logo"){
    printArea.innerHTML = `
      <div class="logo">LOGO</div>
    `;
  }

  if(printOption === "logoAddress"){
    printArea.innerHTML = `
      <div class="logo">LOGO</div>
      <div class="address">Your Address</div>
    `;
  }

  if(printOption === "full"){
    printArea.innerHTML = `
      <div class="logo">LOGO</div>
      <div class="address">
        3 STAR Carry Bags<br>
        Your Address<br>
        Phone: 0000000000
      </div>
    `;
  }
}

/* ===== SEND TO WHATSAPP ===== */
function sendWhatsApp(){

  let customerName = document.getElementById("customerName").value;
  let customerMobile = document.getElementById("customerMobile").value;

  let bagType = document.getElementById("bagType").value;
  let bagSize = document.getElementById("bagSize").value;

  let borderType = document.getElementById("borderType").value;
  let borderColor = document.getElementById("borderColor").value;

  let printOption = document.getElementById("printOption").value;
  let printColor = document.getElementById("printColor").value;

  let message =
`🛍️ 3 STAR Carry Bags – Custom Order

👤 Name: ${customerName}
📞 Mobile: ${customerMobile}

👜 Bag Type: ${bagType}
📏 Size: ${bagSize}

🎨 Printing: ${printOption}
🖌️ Printing Color: ${printColor}

🖼️ Border: ${borderType}
🎯 Border Color: ${borderColor}

Please confirm details.`;

  let phone = "91XXXXXXXXXX"; // your WhatsApp number
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

/* ===== BACK TO HOME ===== */
function backToHome(){
  window.location.href = "index.html";
}
