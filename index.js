let questions = Array.from(document.getElementsByClassName("question-wrapper"));
let images = document.getElementsByClassName("image-container")[0];

let arr = ["You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.", "No more than 2GB. All files in your account must fit your allotted storage space.",
            "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
            "Yes! Send us a message and we’ll process your request no questions asked.",
            "Chat and email support is available 24/7. Phone lines are open during normal business hours."];


for(let i = 0; i<questions.length; i++){
    questions[i].addEventListener("click", function(){
        if(questions[i].childNodes.length  > 3){
            let ans = questions[i].lastChild;
            questions[i].removeChild(ans);
            questions[i].childNodes[1].childNodes[3].classList.remove("reverse");
            questions[i].childNodes[1].classList.remove("active");
            
        }
        else{
            let el = document.createElement("p");
            let text = document.createTextNode(arr[i]);
            el.appendChild(text);
            el.classList.add("fade");
            questions[i].appendChild(el);
            questions[i].childNodes[1].childNodes[3].classList.add("reverse");
            questions[i].childNodes[1].classList.add("active");
        }
    }); 
};

if(window.screen.width < 1080){
    new_el = document.createElement("img");
    new_el1 = document.createElement("img");
    new_el.setAttribute("src","./images/bg-pattern-mobile.svg")
    new_el1.setAttribute("src","./images/illustration-woman-online-mobile.svg")
    new_el.classList.add("mobile-bg");
    new_el1.classList.add("mobile-img");
    images.appendChild(new_el);
    images.appendChild(new_el1);

}