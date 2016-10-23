function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  var grandNode = document.getElementById("grand-node").querySelectorAll("div");
  return grandNode[grandNode.length-1];
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll(".ranked-list");
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML);
    rank[i].innerHTML += n;
  }
  return rank;
}
