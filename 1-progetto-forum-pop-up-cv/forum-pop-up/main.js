function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "antoniodebiase2003@gmail.com",
        Password : "Juve2003#-",
        To : 'antoniodebiase2003@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New visitator" ,
        Body : "Name: " + document.getElementById("name").value
        + "<br> Phone no: " +  document.getElementById("telephone").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message : " + document.getElementById("text-description").value
    }).then(
      message => alert(" Message sent")
    );
}