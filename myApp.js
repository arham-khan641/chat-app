const Facebook_login = ()=>{
   var provider = new firebase.auth.FacebookAuthProvider();
       firebase.auth().signInWithPopup(provider).then(function(result) {
           // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          
                   var user = result.user;
           console.log("user===>", user.displayName)
         }).catch(function(error) {
           console.log(error.message)
         });
       }





var myName= prompt("Enter your name");
 function sendMessage(){
  // empty message 
  if(myName ==""){
  myName=prompt("please enter your name")

  }
  
   //get message
    var message = document.getElementById("message").value



    // save in database
    firebase.database().ref("messages").push().set( {
        "sender":myName, 
        "message":message
    });
   console.log(myName)
    console.log(message)
    // prevent from submiting 
     return false;
 }
 //listen for incoming message
 firebase.database().ref("messages").on("child_added", function(snapshot){
    var html="";
    // give each message a unique ID


    html +="<li id= 'message-"+  snapshot.key+ "'>";     
  //  show delete button if message sent by me
  if(snapshot.val().sender== myName){

     html += "<button data-id ='" + snapshot.val + "'onclick='deletemessage(this);'>"
    
      html +="<delete>"
       html += "</button>";

   

   html += snapshot.val().sender + ":"+ snapshot.val().message;
   html +="</li>";
  
   document.getElementById("messages").innerHTML+=html 

}


});

function deletemessage(self){

   
      // get message Id 
   var MessageId = self.getAttribute("data-id");
   
      console.log(message);

   // delete message
   firebase.database().ref("messages").child(MessageId).val().remove();

   //firebase.database().ref("messages").child(MessageId).val().remove();

   // attach listner for delete message 
 firebase.database().ref("messages").on("child_removed" , function (snapshot){
    ////  remove message node
document.getElementById("message-" + snapshot.key).innerHTML="This message has been deleted";   


   // });
}

);

 button.addEventListener("click",function(){
    var newmessage =document.createElement("Li");
    newmessage.innerHTML =textbox.value;
    messageright.appendChild(newmessage); 
    textbox.value="";



});
}

