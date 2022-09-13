
  

 function  formValidation(){

    var name= document.getElementById('iname').value;
    var email= document.getElementById('iemail').value;
    var pass= document.getElementById('ipass').value;
    //var conpass=document.getElementById('icpass')
    var mobile= document.getElementById('imob').value;
    

    var namePattern = /[a-zA-Z .]+/
    var emailPattern = /[a-zA-Z]+@(gmail|yahoo).com/
    var passPattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()])).{6,20}/
    var mobilePattern = /^(\+88)?-?01[3-9]\d{8}$/
    
    
    
     //--- mobile regex----
     if(!mobile.match(mobilePattern)){
        document.getElementById('span4').innerHTML='only BD phone number'
        return false;
      }
      else{
          document.getElementById('span4').innerHTML=''
      }


    //--- name regex----
    if(!name.match(namePattern)){
      document.getElementById('span').innerHTML='only character'
      return false;
    }
    else{
        document.getElementById('span').innerHTML=''
    }


    //--- email regex----
    if(!email.match(emailPattern)){
      document.getElementById('span2').innerHTML='not valid'
      return false;
    }
    else{
        document.getElementById('span2').innerHTML=''
    }

    //--- password regex----
    if(!pass.match(passPattern)){
      document.getElementById('span3').innerHTML='not valid'
      return false;
    }
    else{
        document.getElementById('span3').innerHTML=''
    }
    
    // //---confirm password regex----
    // if(conpass === pass){
    //     document.getElementById('span5').innerHTML=''
     
    // }
    // else{
    //     document.getElementById('span5').innerHTML='not correct'
    //   return false;
    // }


  }