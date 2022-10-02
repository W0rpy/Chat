const Form = document.forms.main;
let FormInput = Form.nameSearch;
let FormInputPlaceholder = FormInput.placeholder;
FormInput.addEventListener("focus", function(event){
   FormInput.placeholder = "";
});
FormInput.addEventListener("blur", function(event){
   FormInput.placeholder = FormInputPlaceholder;
});
let buttonSmile = document.querySelector('.love_smile');
let likesNumber = document.querySelector('.counter');
buttonSmile.addEventListener("click",function(event){
   likesNumber.textContent++;
});
