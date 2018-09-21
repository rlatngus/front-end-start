// var wrap =document.querySelector('.wrap');
// var str = "";

// for( let i =1; i<=4; i++) {
//     for(let j=1; j<=4; j++ ) {
//         var className = (i+j) %2 == 1 ?'b':'w';
//         str += '<div class ="'+className+'"></div>'
//     }
// }
// wrap.innerHTML =str;

// function select(event){
//     var block =event.currentTarget;
//     block.style.backgroundColor = 'yellow';
// }
// for(var i =0; i<16; i++) {
//     blocks[i].addEventListener('click',select);
// }

console.log('chess');


var wrap = document.querySelector('.wrap');
var str = '';
var className = '';
var isWhite = false;


// 마크업을 코드로 찍어주기
for(var i=0; i < 4; i++){

  for(var j=0; j < 4; j++){

    if(isWhite) {
      className = 'white';
    }
    else {
      className = 'black';
    }

    str += '<div class="'+ className +'"></div>';

    //한번씩 변경
    isWhite = !isWhite;
  }

  isWhite = !isWhite;
}

wrap.innerHTML = str;


// DOM에 클릭 이벤트 할당

var boards = document.querySelectorAll('.wrap > div');
var selectedDom = null;



function selectBoard(event) {
  console.log('selected');

  var board = event.currentTarget;
  console.log(board)

  if(selectedDom){
    selectedDom.className =  selectedDom.className.replace(' select', '');
  }


  board.className += ' select';

  selectedDom = board;
}

for(var i=0; i<boards.length; i++){
  boards[i].addEventListener('click', selectBoard);
}