// js navigation bar effect on scroll//

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header .classList .toggle("sticky", window.scrollY > 0);
});

// js of responsive navigation sidebar//

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelector(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItems) => {
    navigationItems.addEventListener("click",() =>{
        menuBtn.classList.remove("active");
        navigator.classList.remove("active")
    });  
});

//js for scroll to top button//

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//Js for scroll back to top on click scroll-to-top button//

scroolBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
});