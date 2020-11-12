// APOPROACH 2 => INJECT TO HTML
const injectLiistBttn = () => {
  const HTML = `
    <style>
      /* animation by florin pop: https://www.florin-pop.com/blog/2019/03/css-pulse-effect/ */
      .blob {
        cursor: pointer;
        position: absolute;
        right: 6px;
        width:45px;
        height:45px;
        margin: 20px;
        border-radius: 50%;
        transform: scale(1);
        animation: pulse 2s infinite;
      }
      @keyframes pulse {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7); }
        70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
      }
    </style>
    <img id="liist-logo" class="blob" src="https://liist.com/assets/liist-app-icon-8c62ab0e7fd42f63153937856f2c6f2116c4965c926dbe58b86843de328a5f8a.png">
  `;
  const parent = document.querySelector(".section-hero-header-meta-data-container");
  parent.insertAdjacentHTML("afterbegin", HTML);

  document.getElementById("liist-logo").addEventListener("click", () => {
    const placeName = document.querySelector('.section-hero-header-title-description h1').textContent.trim();
    alert('do you want to save \'' + placeName + '\' to your liist app ?');
  })
}

function elementReady(selector) {
  return new Promise((resolve, reject) => {
    let el = document.querySelector(selector);
    if (el) { resolve(el); }
    new MutationObserver((mutationRecords, observer) => {
      // Query for elements matching the specified selector
      Array.from(document.querySelectorAll(selector)).forEach((element) => {
        resolve(element);
        //Once we have resolved we don't need the observer anymore.
        observer.disconnect();
      });
    }).observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  });
}

elementReady('.section-hero-header-meta-data-container').then(() => {
  injectLiistBttn();
  setTimeout(() => {
    console.log("observing statchanges...");
    let e = document.querySelector('#pane div');
    let observer = new MutationObserver(function (event) {
      console.log(event);
      setTimeout(() => {
        if (document.querySelectorAll(".blob").length === 0) {
          injectLiistBttn();
        }
      }, 500)
    })

    observer.observe(e, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false
    })
  }, 2000);
});


