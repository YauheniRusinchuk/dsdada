// window.document.addEventListener("DOMContentLoaded", () => {
//   // const container = document.getElementsByClassName("container")[0];
//   // const acsBlock = document.getElementById("acs");
//   // const iframe = document.getElementById("acsFrame");
//   const progress = document.getElementById("progressNew");

//   progress.style.display = "none";
  
// });


window.onload = function() {

  const iframeDocument = document.querySelector('iframe').contentDocument || document.querySelector('iframe').contentWindow.document;

  const progress = document.getElementById("progressNew");
  // const result = document.querySelector('#resultCardPage');
  // const urlParams = new URLSearchParams(window.location.search);
  // const back_url = urlParams.get('back_url');

  progress.style.display = "none";

  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function(addedNode) {
            if (addedNode.tagName === 'DIV' && addedNode.id === 'resultCardPage') {
              const style = getComputedStyle(addedNode);
              if (style.display !== 'none') {
                window.location.href('https://google.com');
              }

            }
          });
        }
      });
  });

  const config = { attributes: true, childList: true, subtree: true };
  // const target = document.querySelector('#resultCardPage');
  observer.observe(iframeDocument, config);
};
