var D = document;

let QR_Img = D.querySelector("#QR_Img"),
  LinkInput = D.querySelector("#LinkInput"),
  QR_wrapper = D.querySelector(".wrapper");

LinkInput.addEventListener("keyup", () => {
  if (!LinkInput.value) return;
  QR_Img.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${LinkInput.value}`;
  QR_Img.addEventListener("load", () => {
    QR_wrapper.classList.add("active");
  });
});
LinkInput.addEventListener("keyup", () => {
  if (!LinkInput.value) {
    QR_wrapper.classList.remove("active");
  }
});
