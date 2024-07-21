function submit(){
    customer={
        accnumber:accno.value,
        username:uname.value,
        password:passw.value

    }
    if(customer.accnumber=="" || customer.username=="" || customer.password==""){
        alert("Please fill the missing fields")
    }else{
        if(customer.accnumber in localStorage){
            alert("Already Exists")
        }else{
            localStorage.setItem(customer.accnumber,JSON.stringify(customer))
                alert("Sucessfully added")
                window.location='./login.html'
        }
    }
}



function login(){
    let loginacno = document.getElementById('loginacno').value;
    let loginpassw = document.getElementById('loginpassw').value;
  
    let customer = JSON.parse(localStorage.getItem(loginacno));
  
    if(loginacno=="" || loginpassw==""){
      alert("Please fill the missing fields")
    }else{
      if(customer.accnumber ==loginacno && customer.password == loginpassw){
        alert("Login successful")
        localStorage.setItem('logined', loginacno)
        window.location='./transaction.html'
      }else{
        alert("Invalid Account Number or Password")
      }
    }
  }




  






