let chessBoard = document.getElementById('chess_board');

for(let i=0; i<8; i++){
  for(let j=0; j<8; j++){
    let board = document.createElement('div');
    board.className = "chess_piece";
    //black chessboard pieces
    if(i===0 && j===0 || i===0 && j===7){
      board.innerHTML = "&#9820;";
    }
    if(i===0 && j===1 || i===0 && j===6){
        board.innerHTML = "&#9822;";
    }
    if(i===0 && j===2 || i===0 && j===5){
        board.innerHTML = "&#9821;";
    }
    if(i===0 && j===3){
        board.innerHTML = "&#9819;";
    }
    if(i===0 && j===4){
        board.innerHTML = "&#9818;";
    }
    if(i===1){
        board.innerHTML = "&#9823;";
    }
    if(i===7 && j===0 || i===7 && j===7){
        board.innerHTML = "&#9814;";
      }
      if(i===7 && j===1 || i===7 && j===6){
          board.innerHTML = "&#9816;";
      }
      if(i===7 && j===2 || i===7 && j===5){
          board.innerHTML = "&#9815;";
      }
      if(i===7 && j===3){
          board.innerHTML = "&#9813;";
      }
      if(i===7 && j===4){
          board.innerHTML = "&#9812;";
      }
      if(i===6){
          board.innerHTML = "&#9817;";
      }

    //chessboard color
    if(i%2===0 && j%2===0 || i%2!==0 && j%2!==0){
      board.style.backgroundColor = "rgba(255,255,255,0.7)";
    }
    else{
      board.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    chessBoard.appendChild(board);  
  }  
}

chessBoard.addEventListener('click', movePiece);

function movePiece(ev){
  if(ev.target.className === "chess_piece"){
    alert(ev.target.innerHTML);    
  }
}