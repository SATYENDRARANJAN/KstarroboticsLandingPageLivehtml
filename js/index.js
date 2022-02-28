
// $("#btn1").click(function(){
//
// })


    // saving url params
    let urlString = window.location.href
    let paramString = urlString.split('?')[1];
    let params_arr = paramString && paramString.split('&');
    if (paramString){
    for (let i = 0; i < params_arr.length; i++) {
      let pair = params_arr[i].split('=');
      console.log("Key is:", pair[0]);
      console.log("Value is:", pair[1]);
      localStorage.setItem(pair[0],pair[1])
    }
    }

function onSubmitForm(event){
    event.preventDefault()
    const name = document.getElementById("parentsName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const childsName = document.getElementById("childsName").value;
    const grade = document.getElementById("grade_dd");
    gradevalue = grade.options[grade.selectedIndex].value;

    // form=document.getElementById("entryform")
    // form.style.display="none"
    //
    // thanksdiv= document.getElementById("thanksdiv")
    // thanksdiv.style.display="block"

    // main.js

    // POST request using fetch()
    fetch("https://prod.hicherie.com/users/lead/", {
    	// Adding method type
    	method: "POST",

    	// Adding body or contents to send
    	body: JSON.stringify(
        {
        "email":email,
        "phone":phone,
        "message":"NEW LEAD ROBOTICS PAGE",
        "grade":gradevalue,
        "parent_company":"KSTARBOOTCAMP_ROBOTICS",
        "utm_source":localStorage.getItem("utm_source")||'None'}
      ),

    	// Adding headers to the request
    	headers: {
    		"Content-type": "application/json; charset=UTF-8"
    	}
    })

    // Converting to JSON
    .then(response => {
      if (response.status ==200){
      form=document.getElementById("entryform")
      form.style.display="none"

      thanksdiv= document.getElementById("thanksdiv")
      thanksdiv.style.display="block"
    }
    else {
      form=document.getElementById("entryform")

    }

    })

    // Displaying results to console
    .then(json => console.log(json));


}

function checkphone(){
  form=document.getElementById("entryform")
  phone=document.getElementById('phone').value
  if(phone ==''  || phone.length!=10)
             {
                 document.getElementById('errorname').innerHTML="Enter a 10 digit valid phone no.";
             }
}
function checkphone1(){
  form=document.getElementById("modalform")
  phone=document.getElementById('phone1').value
  if(phone ==''  || phone.length!=10)
             {
                 document.getElementById('errorname1').innerHTML="Enter a 10 digit valid phone no.";
             }
}

function onSubmitModal(event){
    event.preventDefault()
    form=document.getElementById("modalform")
    const name = form[0].value
    const email = form[1].value
    const phone = form[2].value
    const childsName = form[3].value
    const grade = form[4].value
    // const gradevalue = grade.options[grade.selectedIndex].value;

    // form=document.getElementById("entryform")
    // form.style.display="none"
    //
    // thanksdiv= document.getElementById("thanksdiv")
    // thanksdiv.style.display="block"

    // POST request using fetch()
    fetch("https://prod.hicherie.com/users/lead/", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(
        {
        "email":email,
        "phone":phone,
        "message":"NEW LEAD ROBOTICS PAGE",
        "grade":grade,
        "parent_company":"KSTARBOOTCAMP_ROBOTICS_OTHERS",
        "utm_source":localStorage.getItem("utm_source")||'None'}
      ),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    // Converting to JSON
    .then(response => response.json())

    // Displaying results to console
    .then(json => console.log(json));

}
