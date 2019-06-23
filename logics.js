var yourAmount;
var totalBuy = 0;

var totalApplePrice = 0;
var totalOrangePrice = 0;
var totalBananaPrice = 0;

var applePrice = 10;
var orangePrice = 15;
var bananaPrice = 7;

// seprate apple
function applePriceAdd(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    console.log('yourAmount '+yourAmount)
    if(yourAmount == 0){
        console.log('you dont have money');
    }else{
    totalApplePrice = totalApplePrice + applePrice; 
    totalBuy = totalBuy + applePrice;

    console.log('added '+totalApplePrice)
    console.log('added '+totalBuy)

    if(totalBuy>yourAmount){
        totalApplePrice = totalApplePrice - applePrice; 
        totalBuy = totalBuy - applePrice;

        console.log('minus '+totalApplePrice)
        console.log('minus '+totalBuy)
        console.log('you cross the limit')
        }
    }
}


function applePriceMinus(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    console.log('yourAmount '+yourAmount)
    if(yourAmount == 0){
        console.log('you dont have money');
    }else if(totalApplePrice < 10){
        console.log('you dont have apple money');
    }
    else{
    totalApplePrice = totalApplePrice - applePrice; 
    totalBuy = totalBuy - applePrice;

    console.log('minusApple '+totalApplePrice)
    console.log('minusApple '+totalBuy)
}
}

// seprate

// seprate orange
function orangePriceAdd(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    console.log('yourAmount '+yourAmount)
    if(yourAmount == 0){
        console.log('you dont have money');
    }else{
    totalOrangePrice = totalOrangePrice + orangePrice; 
    totalBuy = totalBuy + orangePrice;

    console.log('added '+totalOrangePrice)
    console.log('added '+totalBuy)

    if(totalBuy>yourAmount){
        totalOrangePrice = totalOrangePrice - orangePrice; 
        totalBuy = totalBuy - orangePrice;

        console.log('minus '+totalOrangePrice)
        console.log('minus '+totalBuy)
        console.log('you cross the limit')
        }
    }
}


function orangePriceeMinus(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    console.log('yourAmount '+yourAmount)
    if(yourAmount == 0){
        console.log('you dont have money');
    }else if(totalOrangePrice < 15){
        console.log('you dont have apple money');
    }
    else{
        totalOrangePrice = totalOrangePrice - orangePrice; 
    totalBuy = totalBuy - orangePrice;

    console.log('minusApple '+totalOrangePrice)
    console.log('minusApple '+totalBuy)
}
}

// seprate

// seprate banana
function bananaPriceAdd(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    console.log('yourAmount '+yourAmount)
    if(yourAmount == 0){
        console.log('you dont have money');
    }else{
    totalBananaPrice = totalBananaPrice + bananaPrice; 
    totalBuy = totalBuy + bananaPrice;

    console.log('added '+totalBananaPrice)
    console.log('added '+totalBuy)

    if(totalBuy>yourAmount){
        totalBananaPrice = totalBananaPrice - bananaPrice; 
        totalBuy = totalBuy - bananaPrice;

        console.log('minus '+totalBananaPrice)
        console.log('minus '+totalBuy)
        console.log('you cross the limit')
        }
    }
}


function bananaPriceMinus(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    console.log('yourAmount '+yourAmount)
    if(yourAmount == 0){
        console.log('you dont have money');
    }else if(totalBananaPrice < 7){
        console.log('you dont have apple money');
    }
    else{
    totalBananaPrice = totalBananaPrice - bananaPrice; 
    totalBuy = totalBuy - bananaPrice;

    console.log('minusBanana '+totalBananaPrice)
    console.log('minusBanana '+totalBuy)
}
}

// seprate

