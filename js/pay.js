window.document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementsByClassName("container")[0];
  const acsBlock = document.getElementById("acs");
  const iframe = document.getElementById("acsFrame");
  const progress = document.getElementById("progressNew");

  const params = new URLSearchParams(window.location.search);

  const back_url = params.get("back_url");

  console.log('pay.js')

  if (back_url) {
    progress.style.display = "none";
    window.location.href = back_url; 
  }

  if (iframe) {
    iframe.style.height = "100vh";
    iframe.style.maxWidth = "100%";
    iframe.style.maxHeight = "100%";
    acsBlock.style.margin = "0";

  // console.log("container :", container);
    container.style.paddingBottom = "0";
    container.style.marginBottom = "0";
  }
  
});
