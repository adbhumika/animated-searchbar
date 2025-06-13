function calculateLoan(){
    loanAmountValue=document.getElementById("loan-amt")
    .value
    interestRateValue=document.getElementById("interest-rate")
    .value
    leftmonthsValue=document.getElementById("left-months")
    .value
    interest=(loanAmountValue*(interestRateValue*0.01))/leftmonthsValue
    monthlyPayment=(loanAmountValue/leftmonthsValue+interest).toFixed(2);
    document.getElementById("payment").innerHTML=`monthly Payment:${monthlyPayment}`
}