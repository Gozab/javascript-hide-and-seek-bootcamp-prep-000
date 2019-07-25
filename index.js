function getFirstSelector(selector) {
    return document.querySelector(selector);
	//return d;
}




function nestedTarget(){
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
}
      
}


function deepestChild() {
  const picard = document.getElementById('grand-node').querySelectorAll('div');
    var last = picard.length -1;
        return picard[last];
  
}