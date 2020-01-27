var nameRegex=/^[A-Za-z\s]+$/;

var emailRegex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var phoneRegex=/^\(\d{3}\) ?\d{3}( |-)?\d{4}|^\d{3}( |-)?\d{3}( |-)?\d{4}/;


function validateName() {
              if (nameRegex.test(document.getElementById('firstName').value)) {
                document.getElementById('firstName').style.outline = "1px solid #0c0";
              } else {
                document.getElementById('firstName').style.outline = "1px solid #c00";
              }
            }

            function validateLastName() {
              if (nameRegex.test(document.getElementById('lastName').value)) {
                document.getElementById('lastName').style.outline = "1px solid #0c0";
              } else {
                document.getElementById('lastName').style.outline = "1px solid #c00";
              }
            }


            function validateEmail() {
              if (emailRegex.test(document.getElementById('email').value)) {
                document.getElementById('email').style.outline = "1px solid #0c0";
                
              } else {
                document.getElementById('email').style.outline = "1px solid #c00";
                
              }
            }

            function validatePhone() {
              if (phoneRegex.test(document.getElementById('phone').value)) {
                document.getElementById('phone').style.outline = "1px solid #0c0";
                
              } else {
                document.getElementById('phone').style.outline = "1px solid #c00";
                
              }
            }

           /* function validateMonth() {
              if ((document.getElementById('fld_9053887').value) != '') {
                document.getElementById('fld_9053887').style.outline = "1px solid #0c0";
                
              } else {
                document.getElementById('fld_9053887').style.outline = "1px solid #c00";
                
              }
            }


            function validateScore() {
              if ((document.getElementById('fld_7704354').value) != '') {
                document.getElementById('fld_7704354').style.outline = "1px solid #0c0";
                
              } else {
                document.getElementById('fld_7704354').style.outline = "1px solid #c00";
                
              }
            } */



            function leadValidate() {
              validateName();
              validateLastName();
              validateEmail();
              validatePhone();
              
              
              if (emailRegex.test(document.getElementById('email').value)) {
                if (nameRegex.test(document.getElementById('firstName').value)) {
                if (nameRegex.test(document.getElementById('lastName').value)) {
                  if (phoneRegex.test(document.getElementById('phone').value)) {
                    if ((document.getElementById('email').value) != '') {
                      if ((document.getElementById('phone').value) != '') {

                  //alert('Submitted!');
                  return true;

                  }
                  }
                  }
                 }
                }
              } else {
                document.getElementById('form_output').style.height = "0px";
                document.getElementById('form_output').style.minHeight = "40px";
                document.getElementById('form_output').style.height = "auto";
                document.getElementById('form_output').style.outline = "1px solid rgba(242,0,0,1)";
                document.getElementById('form_output').style.backgroundColor = "rgba(250,255,189,1)";
                return false;
              }
        }


function updateAptDate() {
  dateOutput = document.getElementById('dateOutput');
  date = document.getElementById('date');
  dateOutput.innerHTML = date.value;
}

function updateAptTime() {
  timeOutput = document.getElementById('timeOutput');
  time = document.getElementById('time');
  timeOutput.innerHTML = time.value;
}

function updatePersonalTrainer() {
  ptOutput = document.getElementById('ptOutput');
  pt = document.getElementById('pt');
  ptOutput.innerHTML = pt.value;
}

function updatePrice() {
  priceOutput = document.getElementById('priceOutput');
  price=40;
  }
  
 