const around = document.querySelectorAll(".card");
let clickCount = 0 ;
around.forEach(list =>{
    list.addEventListener('click' , function(){
        clickCount ++ ;
        const aroundContent = document.querySelector('.card_content');
        if(clickCount == 2){
            aroundContent.style.display = 'none'
        }else{
            aroundContent.style.display = 'block' ;
        } 
    })
})
/* let form = document.querySelector('#field');
let mortgageAmount = form.querySelector('#mortgage-amount');
let mortgageTerm = form.querySelector('#mortgage-term');
let interestRate = form.querySelector('#interest-rate');

function calculAmount(){
    let mortgageAmountValue = mortgageAmount.value ;
    let mortgageTermValue = mortgageTerm.value ;
    let interestRateValue = interestRate.value ;
    let monthlyAmount ;
    let yearsAmount ;
    let monthlyRate = (parseInt(interestRateValue) * parseInt(12)) / parseInt(100) ;
    if(mortgageAmountValue == '' || mortgageTermValue == '' || interestRateValue == ''){
        monthlyAmount = 0 ;
    }else{
        monthlyAmount = parseInt(mortgageAmountValue) * parseInt(monthlyRate);
        yearsAmount = (parseInt(monthlyAmount) * parseInt(12))  * parseInt(mortgageTermValue) ;
    }
    console.log("le montant mensuel est : " ,monthlyAmount);
    console.log("le montant annuel est : " , yearsAmount); 
}
mortgageAmount.addEventListener('input',calculAmount);
mortgageTerm.addEventListener('input',calculAmount);
interestRate.addEventListener('input',calculAmount);

 */

let form = document.querySelector('#field');
let mortgageAmount = form.querySelector('#mortgage-amount');
let mortgageTerm = form.querySelector('#mortgage-term');
let interestRate = form.querySelector('#interest-rate');
let results = document.querySelector('.results');
let initial = document.querySelector('.initial');
let bouton = document.querySelector('#btn');
bouton.addEventListener('click' , function(){
    initial.style.display = 'none' ;
    results.style.display = 'block'
})

function calculAmount() {
    let mortgageAmountValue = parseFloat(mortgageAmount.value);
    let mortgageTermValue = parseInt(mortgageTerm.value);
    let interestRateValue = parseFloat(interestRate.value) / 100;
    let monthlyAmount;
    let yearsAmount;
    if (mortgageAmountValue == '' || mortgageTermValue == '' || interestRateValue == '') {
        monthlyAmount = 0;
        yearsAmount = 0 ;
    } else {
        let monthlyRate = interestRateValue / 12;
        monthlyAmount = mortgageAmountValue * monthlyRate / (1 - Math.pow(1 + monthlyRate, -mortgageTermValue * 12));
        yearsAmount = monthlyAmount * 12 * mortgageTermValue;
    }
    let monthRepayement = results.querySelector('.month_repayement');
    monthRepayement.innerHTML = ` $ ${monthlyAmount.toFixed(2)}` ;
    let total = results.querySelector('.total');
    total.innerHTML = ` $ ${yearsAmount.toFixed(2)}` ;
}

mortgageAmount.addEventListener('input', calculAmount);
mortgageTerm.addEventListener('input', calculAmount);
interestRate.addEventListener('input', calculAmount);
