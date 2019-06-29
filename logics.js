// your pocket amount
var yourAmount; 
// your total buy amount
var totalBuy = 0;
// total seprate price of each fruit
var totalApplePrice = 0;
var totalOrangePrice = 0;
var totalBananaPrice = 0;
// actual price of fruits
var applePrice = 10;
var orangePrice = 15;
var bananaPrice = 7;
// for increment and desrement
var appleFlag = 0;
var orangeFlag = 0;
var bananaFlag = 0;

// seprate apple
function applePriceAdd(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    if(yourAmount == 0){
        alert('   You Dont Have Money   ');
    }else{
        appleFlag++;
    totalApplePrice = totalApplePrice + applePrice; 
    totalBuy = totalBuy + applePrice;

    if(totalBuy>yourAmount){
        appleFlag--;
        totalApplePrice = totalApplePrice - applePrice; 
        totalBuy = totalBuy - applePrice;
        alert('   You Cross The Limit   ')
        }
    }
    document.querySelector('.totalBuy').innerHTML = totalBuy;
    document.querySelector('.appleFlag').value = appleFlag;
}


function applePriceMinus(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    if(yourAmount == 0){
        alert('   You Dont Have Money   ');
    }else if(totalApplePrice < 10){
        alert('   You Dont Have Apple   ');
    }
    else{
        appleFlag--;
    totalApplePrice = totalApplePrice - applePrice; 
    totalBuy = totalBuy - applePrice;
}
document.querySelector('.totalBuy').innerHTML = totalBuy;
document.querySelector('.appleFlag').value = appleFlag;

}

// seprate orange
function orangePriceAdd(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    if(yourAmount == 0){
        alert('   You Dont Have Money   ');
    }else{
        orangeFlag++;
    totalOrangePrice = totalOrangePrice + orangePrice; 
    totalBuy = totalBuy + orangePrice;

    if(totalBuy>yourAmount){
        orangeFlag--;
        totalOrangePrice = totalOrangePrice - orangePrice; 
        totalBuy = totalBuy - orangePrice;
        alert('   You Cross The Limit   ')
        }
    }
    document.querySelector('.totalBuy').innerHTML = totalBuy;
    document.querySelector('.orangeFlag').value = orangeFlag;
}


function orangePriceeMinus(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    if(yourAmount == 0){
        alert('   You Dont Have Money   ');
    }else if(totalOrangePrice < 15){
        alert('   You Dont Have Orange   ');
    }
    else{
        orangeFlag--;
        totalOrangePrice = totalOrangePrice - orangePrice; 
    totalBuy = totalBuy - orangePrice;
}
document.querySelector('.totalBuy').innerHTML = totalBuy;
document.querySelector('.orangeFlag').value = orangeFlag;

}

// seprate banana
function bananaPriceAdd(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    if(yourAmount == 0){
        alert('   You Dont Have Money   ');
    }else{
        bananaFlag++;
    totalBananaPrice = totalBananaPrice + bananaPrice; 
    totalBuy = totalBuy + bananaPrice;

    if(totalBuy>yourAmount){
        bananaFlag--;
        totalBananaPrice = totalBananaPrice - bananaPrice; 
        totalBuy = totalBuy - bananaPrice;
        alert('   You Cross The Limit   ')
        }
    }
    document.querySelector('.totalBuy').innerHTML = totalBuy;
    document.querySelector('.bananaFlag').value = bananaFlag;

}

function bananaPriceMinus(){
    yourAmount =  document.querySelector('.yourAmountInput').value;

    if(yourAmount == 0){
        alert('   You Dont Have Money   ');
    }else if(totalBananaPrice < 7){
        alert('   You Dont Have Banana   ');
    }
    else{
        bananaFlag--;
    totalBananaPrice = totalBananaPrice - bananaPrice; 
    totalBuy = totalBuy - bananaPrice;
}
document.querySelector('.totalBuy').innerHTML = totalBuy;
document.querySelector('.bananaFlag').value = bananaFlag;

}
