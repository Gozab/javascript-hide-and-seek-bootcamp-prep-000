function getFirstSelector(selector) {
    return document.querySelector(selector);
	//return d;
}




function nestedTarget(){
  return document.querySelector('#nested .target')
}




function increaseRankBy(n) {
  
for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + 1;
}
      
}


function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}