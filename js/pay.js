window.onload = function() {

  const progress = document.getElementById("progressNew");
  // const result = document.querySelector('#resultCardPage');
  const urlParams = new URLSearchParams(window.location.search);
  const back_url = urlParams.get('back_url');

  progress.style.display = "none";

  const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          if (mutation.target.style.display !== 'none') {
              window.location.href = back_url;
          }
      });
  });

  const config = { attributes: true };
  const target = document.querySelector('#resultCardPage');
  observer.observe(target, config);
};
