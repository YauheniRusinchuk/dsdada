// window.document.addEventListener("DOMContentLoaded", () => {
//   // const container = document.getElementsByClassName("container")[0];
//   // const acsBlock = document.getElementById("acs");
//   // const iframe = document.getElementById("acsFrame");
//   const progress = document.getElementById("progressNew");

//   progress.style.display = "none";
  
// });


window.onload = function() {
	// const iframeDocument = document.querySelector('iframe').contentDocument || document.querySelector('iframe').contentWindow.document;
  const progress = document.getElementById("progressNew");
  // const result = document.querySelector('#resultCardPage');
  // const urlParams = new URLSearchParams(window.location.search);
  // const back_url = urlParams.get('back_url');

  // console.log('iframeDocument :', iframeDocument)
  progress.style.display = "none";

  const idInterval = setInterval(() => {
    checkIframeAndSrc();
  }, 100)


  function checkIframeAndSrc () {
    const iframeDocument = document.querySelector('iframe')
    if (iframeDocument) {
      const src = iframeDocument.src;
      if (src.includes('secure.tinkoff.ru')) {
        clearInterval(idInterval)
        window.location.href = 'https://gpay.online.gpb.ru/oks-gaz-pay'
      }
    }
  }
};

