function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let list = document.querySelectorAll(".ranked-list li")
  for(let i = 0; i < list.length; i++) {
    let oldNum = parseInt(list[i].innerHTML)
    list[i].innerHTML = oldNum + n;
  }
}

let node = document.getElementById('grand-node');
function deepestChild() {
  if(!!node.children[0]) {
    node = node.children[0];
    console.log(node)
    // debu gger;
    deepestChild();
  }
  return node;
}