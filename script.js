// alert("hello ji i m on");
// selecting elements
var input = document.querySelector("#textarea");
var saveBtn = document.querySelector(".save-btn");

//for method 2
// var saveBtn = document.querySelectorAll(".save-btn");
var clearBtn = document.querySelector(".clear-btn");

// to display value
input.value=JSON.parse(localStorage.getItem("note"));

// working of save button 
saveBtn.addEventListener("mouseover",()=>{

    console.log(input.value);
    localStorage.setItem("note",JSON.stringify(input.value));
    
})
//method 2
// saveBtn[0].addEventListener("mouseover",myFunc);
// saveBtn[1].addEventListener("mouseover",myFunc);


// function myFunc()
// {
//     console.log(input.value);
//     localStorage.setItem("note",JSON.stringify(input.value));
// }




// working of clear button
clearBtn.addEventListener("mouseout",()=>{
    input.value="";
    localStorage.clear();
})
