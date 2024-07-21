let accnumber=localStorage.getItem('logined');
let customer=JSON.parse(localStorage.getItem(accnumber));
let username=customer.username;
// usernamedisplay.innerHtml=username ?`Welcome ${username}` :"not found";




function deposit(){
    
    if(!customer.balance){
        customer.balance=0;   
    }
    let deposit=Number(depamount.value);
    if(deposit <=0 || (deposit=="")){
        alert("enter a amount")
    }else{
        customer.balance+=deposit;
        localStorage.setItem(accnumber,JSON.stringify(customer))
        alert(`Successfully added amount is ${deposit}`);
        alert(`current bank balance is ${customer.balance}`)
        // finalbalance.value=customer.balance;
        balance()
    }
}

function withdraw(){

    let withdraw=withdrawamount.value;
    if(withdraw<=0 || withdraw==''){
        alert("Enter a correct amount to withdraw")
    }else if(withdraw > customer.balance){
            alert("Insufficient bank balance")
        
    }else{
        customer.balance-=withdraw;
        localStorage.setItem(accnumber,JSON.stringify(customer));
        alert(`The withdraw amount is ${withdraw}`)
        alert(`Current bank balance is ${customer.balance}`)
        // finalbalance.value = customer.balance;
        balance()
    }

}
function balance(){
   
    finalbalance.value=customer.balance;
    
}
function logout(){
    window.location='./index.html'
}