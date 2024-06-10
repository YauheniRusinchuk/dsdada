window.onload = function () {
  // const progress = document.getElementById("progressNew");
  // progress.style.display = "none";

  const progress = document.getElementById("progress_pay");

  function callbackErrorState() {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        let displayValue = mutation.target.style.display;
        if (displayValue === "flex") {
          const urlParams = new URLSearchParams(window.location.search);
          const urlF = urlParams.get("back_url_f");
          window.location.href = urlF;
          // const btn = document.getElementById("for_pay_btn_page_error");
          // btn?.click();
          // console.log('btn :', btn.href);
          // Выполнить действие, если display изменён на flex
          // Здесь можно добавить ваш код
        }
      }
    }
  }

  function callbackCardPageError() {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        let displayValue = mutation.target.style.display;
        if (displayValue === "flex") {
          //
          const urlParams = new URLSearchParams(window.location.search);
          const urlF = urlParams.get("back_url_f");
          window.location.href = urlF;
          // console.log('btn :', btn.href);
          // Выполнить действие, если display изменён на flex
          // Здесь можно добавить ваш код
        }
      }
    }
  }

  function callbackPaymentError(mutationsList) {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        let displayValue = mutation.target.style.display;
        if (displayValue === "flex") {
          const urlParams = new URLSearchParams(window.location.search);
          const urlF = urlParams.get("back_url_f");
          window.location.href = urlF;
          // const btn = document.getElementById("for_pay_btn_payment");
          // btn?.click();
          // console.log('btn :', btn.href);
          // Выполнить действие, если display изменён на flex
          // Здесь можно добавить ваш код
        }
      }
    }
  }

  function callback(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        let displayValue = mutation.target.style.display;
        if (displayValue === "flex") {
          const btn = document.getElementById("for_pay_btn");
          btn?.click();
          // console.log('btn :', btn.href);
          // Выполнить действие, если display изменён на flex
          // Здесь можно добавить ваш код
        }
      }
    }
  }


  function callbackAcsBlock(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        let displayValue = mutation.target.style.display;
        if (displayValue === "flex" || displayValue === "block") {
          progress.style.display = 'none';
          // const btn = document.getElementById("for_pay_btn");
          // btn?.click();
          // console.log('btn :', btn.href);
          // Выполнить действие, если display изменён на flex
          // Здесь можно добавить ваш код
        }
      }
    }
  }


  const observer = new MutationObserver(callback);
  const observerPayment = new MutationObserver(callbackPaymentError);
  const observerCardError = new MutationObserver(callbackCardPageError);
  const onserverErroState = new MutationObserver(callbackErrorState);
  const observeAcsBlock = new MutationObserver(callbackAcsBlock);


  // Настройка конфигурации наблюдателя: атрибуты элемента
  const config = { attributes: true, childList: false, subtree: false };

  // Выбор целевого элемента для наблюдения
  const targetNode = document.getElementById("resultCardPage");
  const targetNodePayment = document.getElementById("payment-error");
  const targetNodeErrorPage = document.getElementById("cardPage-error");
  const targetNodeErrorState = document.getElementById("state-error");
  const divWhereIframe = document.getElementById("acs");
  // Начало наблюдения за изменениями в конфигурации
  observer.observe(targetNode, config);
  observerPayment.observe(targetNodePayment, config);
  observerCardError.observe(targetNodeErrorPage, config);
  onserverErroState.observe(targetNodeErrorState, config);
  observeAcsBlock.observe(divWhereIframe, config);



  setTimeout(() => {
    divWhereIframe.style.display = 'flex'
  }, 5000)


  // const iframe = document.createElement("iframe");
  // const block = document.getElementById("acs")

  // iframe.src = 'https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%BA%D0%B8%D0%BC%D0%B0%D0%BF%D0%B8%D1%8F'

  // setTimeout(() => {
  //   block.appendChild(iframe)
  // }, 5000)

  // Отлавливем iframe

  // const divWhereIframe = document.getElementById("acs");


  // function callbackAcsBlock(mutationsList, observer) {
  //   for (let mutation of mutationsList) {
  //     if (
  //       mutation.type === "attributes" &&
  //       mutation.attributeName === "style"
  //     ) {
  //       let displayValue = mutation.target.style.display;
  //       if (displayValue === "flex") {
  //         // const btn = document.getElementById("for_pay_btn");
  //         // btn?.click();
  //         // console.log('btn :', btn.href);
  //         // Выполнить действие, если display изменён на flex
  //         // Здесь можно добавить ваш код
  //       }
  //     }
  //   }
  // }


  // const observerIframe = new MutationObserver((mutationsList) => {
  //   for (const mutation of mutationsList) {
  //     if (mutation.type === "childList" && mutation.addedNodes.length) {
  //       const addedNode = mutation.addedNodes[0];
  //       progress.style.display = "none";
  //       block.style.display = 'block !important'
  //       // Здесь вы можете выполнить нужные действия
  //     }
  //   }
  // });
  // observer.observe(divWhereIframe, { childList: true });
};
