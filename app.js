//this is change image
let chgImg=document.querySelector(".chgImg")
let a=chgImg.src;

function changeImage(src,delay){
    return new Promise((resolve) => {
    setTimeout(function(){
        chgImg.src=src;
        resolve();
    }, delay);
});
}
async function imgchg(){
    while(true){
  await  changeImage("./New folder/img1.jfif",3000)
  await  changeImage("./New folder/img2.jfif",3000)
  await  changeImage("./New folder/img3.jpg",3000)
  await  changeImage("./New folder/img5.jfif",3000)
    }
   
}
imgchg();
//this is for the search bar
function sreachBar() {
  let sreachbar = document.querySelector(".sreachbar").value.toUpperCase();
   console.log(sreachbar)
   let card = document.querySelectorAll(".card")
   let carTasks = document.getElementsByTagName("h5")
   for (let i = 0; i < carTasks.length; i++) {
     let carTask = carTasks[i].textContent || carTasks[i].innerText;
     if (carTask.toUpperCase().indexOf(sreachbar) > -1) {
       card[i].style.display = "";
     } else {
       card[i].style.display = "none";
     }
    }
  }

//this code is for add to card
let addToCard = document.querySelectorAll(".addToCrad")
let eCommerce=document.getElementById("mainid")
let addToCrad = document.getElementsByClassName("addToCrad")


for (let i = 0; i < addToCard.length; i++) {
  addToCard[i].addEventListener("click", function () {
    let main=document.querySelector(".main");
    main.style.display="none";
    carddisplay(); //funcstion csll for card display
    let parent=addToCard[i].parentNode;
    console.log(parent);
    let cardImg = parent.querySelector(".cardImg");
   let src=cardImg.src;
   console.log(src);
   let title=parent.querySelector(".card-title").innerText;
   console.log(title);
   let price=parent.querySelector("#price").innerText;
   console.log(price);
   priceBox(src,title,price);//funcation call for net page card
  });
}
function carddisplay(){
let cards=document.querySelectorAll(".card");
document.querySelector(".page").style.display="inline-block";
for(let i=0; i<cards.length; i++){
  cards[i].setAttribute("style", "display:none;");
}
}

//this code is for move on next page with set img other things of frist part
function priceBox(src,title,price){
  let nextpageImg = document.querySelector(".srcImg");
nextpageImg.src=src;
let name=document.querySelector("#name");
   name.innerText=title
   let amount=document.querySelector("#amount")
   amount.innerText=price
  let mbrOfItem=1;//this is use because it use buttons eventListenerFunction 
   priceDetails(mbrOfItem);//this show all the price details in next page
  
}

// this is for add and minus buttons
let addButton=document.querySelector("#add")
let munisButton=document.querySelector("#munis")
 let prdtMbr= document.querySelector("#p-nmbr")
 let mbrOfItem=prdtMbr.innerText;
addButton.addEventListener("click",()=>{
  if(mbrOfItem<3){
    ++mbrOfItem;
    prdtMbr.innerText=mbrOfItem;
    priceDetails(mbrOfItem);//this is call for calculating total value
  } else{
    mbrOfItem=3;
  }
});
munisButton.addEventListener("click",()=>{
  if(mbrOfItem>1){
    // let aaa=prdtMbr.innerText-1;
    --mbrOfItem;
    prdtMbr.innerText=mbrOfItem;
    priceDetails(mbrOfItem);//this is call for calculating total value
  } else{
    mbrOfItem=1;
    
  }
});

//this is for details of prices

function priceDetails(){
  //for compare with buttons
  let amount=document.querySelector("#amount")
  let mrcds=document.querySelector("#mrcds");
  let shpFee=document.querySelector("#shpFee");
  let shpVcher=document.querySelector("#shpVcher");
  let coinSave=document.querySelector("#coinSave");

  let mrcdsValue= amount.innerHTML ;
  let shpFeeValue=Math.floor(Math.random()*(100+1)+100)
  let shpVcherValue=Math.floor(Math.random()*(50+1)+100)
  let coinSaveValue=Math.floor(Math.random()*10)
      mrcds.innerText=amount.innerText;
  shpFee.innerText=`Rs:${shpFeeValue}`
  shpVcher.innerText=`-Rs:${shpVcherValue}`
  coinSave.innerText=`-Rs:${coinSaveValue}`
  // this is for last div in which total price and discount are calculated
   let discount=document.querySelector(".discount")
  discount.innerText=`Total Discount::${coinSaveValue+shpVcherValue}`
  let totalDisc=coinSaveValue+shpVcherValue


//this part of the code is only for the calculationof tatotals value
    let total=document.querySelector("#total")
    let getmrcds=document.getElementById("mrcds").innerText
    let valueMrcds=getmrcds.replace(/[^\d]/g, '')//remove non numbersParts
    const totalprice=parseInt(valueMrcds,10)
    total.innerText=`Total Price ${(totalprice+shpFeeValue-totalDisc)*mbrOfItem}`
  
    orderPages(shpFeeValue,shpVcherValue,coinSaveValue,totalprice,totalDisc,amount);
}



let orderPage=document.querySelector(".orderPage");
orderPage.style.display="none";

function orderPages(shpFeeValue,shpVcherValue,coinSaveValue,totalprice,totalDisc,amount){
  
  let mrcdsOder=document.querySelector("#mrchOerger");
  let shpFeeOder=document.querySelector("#shpFeeOrder");
  let shpVcherOder=document.querySelector("#shpOrder");
  let coinSaveOder=document.querySelector("#coinOrder");
  let totalOrder=document.querySelector("#totalOrder")

  mrcdsOder.innerHTML=amount.innerHTML
  shpFeeOder.innerHTML=`Rs:${shpFeeValue}`
  shpVcherOder.innerHTML=`-Rs:${shpVcherValue}`
  coinSaveOder.innerHTML=`-Rs:${coinSaveValue}`
  totalOrder.innerText=`Rs ${totalprice+shpFeeValue-totalDisc}`
}


function orderPagesDisplay(){
 
  let page=document.querySelector(".page")
  page.style.display="none";
  orderPage.style.display="";
}


let date=document.querySelector(".date");
let paidDate=document.querySelector(".paidDate");
let currentDate=new Date();
let day = currentDate.getDate(); 
let month=currentDate.getMonth(); 
let year = currentDate.getFullYear();
let formattedDate = `${day} ${month} ${year}`;

  date.innerText=formattedDate;
  paidDate.innerHTML=formattedDate;


//this is for cancle button
function cancleButton(){
  page=document.querySelector(".page")
  
  page.style.display="inline-block";
  orderPage.style.display="none";
}

let orderNum=document.querySelector(".orderNum");
let num=Math.floor(Math.random(12355556555)*(55556567555+1))
   orderNum.innerHTML=num;
   console.log(num,orderNum)
