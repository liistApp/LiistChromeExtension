// get node to watch
// fire event when this node changes
node = document.querySelector(".widget-pane-content-holder");

function callback(mutations) {
  // do something here
  console.log("changed");
  console.log(mutations);
  alert("hi");
}

let observer = new MutationObserver(callback);
observer.observe(node, {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
  attributeFilter: ['one', 'two'],
  attributeOldValue: true,
  characterDataOldValue: true
});
