const drawButton = document.querySelector("#draw")
const sortButton = document.querySelector("#sort")
const numberUser = document.querySelector("#numberUser")
console.log(numberUser)


const cardSelection = document.querySelector(".cardSelection")
const cardSelectionSorting = document.querySelector(".cardSelectionSorting")


const numbersCard = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const iconsCard = ["spades","cubs","hearts","diamonds"]

let rowCards = [];

drawButton.addEventListener("click",()=>{
  let numCard = numberUser.value;
  rowCards=[]
  cardSelection.innerHTML=""
  for (let i = 0; i < numCard;i++){
    rowCards.push({
      number: numbersCard[Math.floor(Math.random()*numbersCard.length)],
      icon: iconsCard[Math.floor(Math.random()*iconsCard.length)]
    })
  }
  rowCards.map((item)=>{
    let paramCard = drawList(item)
    cardSelection.appendChild(paramCard);
  })

})

sortButton.addEventListener('click',()=>{
  sortList(rowCards)
})


function sortList(arr=[]){
  console.log(arr[0].number)
  let newSort = arr.length -1;
  while (newSort > 0){
    let i = 0;
    while(i < newSort){
      if (arr[i].number > arr[i + 1].number){
        let aux = arr[i];
        arr[i] =arr[i +1];
        arr[i+1] = aux
      }
      
      let cardSelection =document.createElement("div")
      cardSelection.classList.add("cardSelection")

      arr.forEach((item)=>{
        let newList = drawList(item)
        cardSelection.appendChild(newList);
        cardSelectionSorting.appendChild(cardSelection);
      })
      i++
    }
    newSort--;
  }     
}


function drawList(item = {}){
  let contentCard = document.createElement("div")
  let contentNumber = document.createElement("div")

  contentCard.classList.add("card");
  contentNumber.classList.add("number",item.icon);
  contentNumber.innerHTML =letter(item.number) ;

  contentCard.appendChild(contentNumber)
  return contentCard;
}
const letter =(item)=>{
  switch(item){
    case 11:return "J";
    case 12:return "Q";
    case 13:return "K";
    case 1:return "A"
    default:return item;
  }
}