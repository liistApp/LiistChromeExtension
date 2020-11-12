/*
 * wait for any element to be on the page by using observer
 * SOURCE: https://gist.github.com/jwilson8767/db379026efcbd932f64382db4b02853e
 */
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

elementReady("#my-id").then(() => {
  console.log(`Element loaded!`)
});
