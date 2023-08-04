console.log("Hello from extrenal.js")
function computerPlay(){
  rock_paper_scissors = ["rock","paper","scissors"]
  let index = Math.floor(Math.random() * 4)
  return rock_paper_scissors[index];
}


function play(){
  let playerSelection = prompt("rock,paper,scissors").toLowerCase();
  const computer = computerPlay();
  let answer = ""
  if(playerSelection==="rock" && computer=="scissors"){
    answer = "you win! rock beats scissors"
  }else if(playerSelection==="scissors" && computer=="rock"){
    answer = "you lose! rock beats scissors"
  }else if (playerSelection==="scissors" && computer=="paper"){
    answer = "you win! scissors beats paper"
  }else if (playerSelection==="paper" && computer=="scissors"){
    answer = "you lose! scissors beats paper"
  }else if (playerSelection==="paper" && computer=="rock"){
    answer = "you win! paper beats rock"
  }else{
    answer = "you lose! paper beats rock"
  }
  return answer
}
