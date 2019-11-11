document.write("I am from dom.js");

function buttonClicked(){
    // alert('Button clicked');
    let bt = document.getElementById("bt1");
    let test = bt.innerHTML;
    bt.innerHTML = 'Md Mohaymenul Islam';
    alert(test);
}

function makeAlert(){
    let username = document.getElementById("text1").value;
    let pass = document.getElementById("pass").value;
    if (username == pass)
        alert('Username and password are match!');
    else
        alert('Username and password does not match!')
}
