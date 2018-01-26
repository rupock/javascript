/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance =325.00;
var checkBalance = true;
var isActive = false;
console.log("using the ATM to Check balance.");
if (checkBalance===true)
{
    if((isActive===true)&&(balance>0.0))git
    {
console.log("Your balance is $"+balance.toFixed(2)+".");
    }
    if(isActive!==true)
    {
console.log("Your account is no longer active");
    }
    if(balance===0)
    {
console.log("Your account is empty.");
    }
    if(balance<0.0){
        console.log("Your balance is negative. please contact bank.");

    }
}
else if(checkBalance===false){

    console.log("Thank you.Have a nice day!");
}
