function listenClick() {
  const button = document.getElementById('login-bttn');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/sayHi.js'
    });
  })
}

listenClick();
