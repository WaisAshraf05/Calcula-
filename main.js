string="";
let buttons = document.querySelectorAll('.buttons');
const input = document.querySelector('input');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    const val = e.target.innerHTML;
    if (val ==="="){
     try{string = eval(string)
      input.value = string;
    }
    catch (error) {
      input.value = "Error"
    }
    }
    else if (val === 'AC') {
      string="" ;
      input.value = string;
    }
    else if (val ==='DEL') {
      string= string.slice(0,-1);
      input.value = string;
    }
    else{
    string += val;
    input.value= string;
    }
  })
})
