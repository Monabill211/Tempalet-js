//cjeck if theres local storage color option
let mainColors = localStorage.getItem("color_option")


// console.log(mainColors)

if (mainColors !== null) {
    
    // console.log('local storag is not empty yiu can set it on root now')
    // console.log(localStorage.getItem("color_option"))


    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    //remove active class from all colors list item
    
document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active")

    //add active class on 
    if (element.dataset.color === mainColors) {
        
// add active
        element.classList.add("active")
    }
})
}











// random background option
let backgroundOption = true;

//varible to control the background interval
let backgroundIntervel; 


// check if theres local storage random background item

let backgroundLocalItem = localStorage.getItem("background_option")

/// check if random background  local storage is not empty
if (backgroundLocalItem !== null)
{

    

    if (backgroundLocalItem === 'true') {
    
        backgroundOption = true;

    } else {
        
                backgroundOption = false;

    }
        
    // romove active class from all span
    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove("active")

    })

    if (backgroundLocalItem === 'true') {
    
        document.querySelector(".random-background .yes").classList.add("active")

    } else {
                document.querySelector(".random-background .no").classList.add("active")

    }



}






//toggle spin class icon
document.querySelector(".toggel .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
}
//seitch colors
const colorsli = document.querySelectorAll(".colors-list li")

// loop on all every list items
colorsli.forEach(li => {

    //click on every list items
    
    li.addEventListener("click", (e) => {
    
        //set color on root

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //set color on lock storge
        localStorage.setItem("color_option", e.target.dataset.color)

handleActive(e)
        
    });

});


//
//


//seitch random-background
const randomBackground = document.querySelectorAll(".random-background span")

randomBackground.forEach(span => {

    //click on every span
    
    span.addEventListener("click", (e) => {
    
        //set color on root

handleActive(e)

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true
            
randmizeimgs()

            localStorage.setItem("background_option", true)
            
        } else {

            backgroundOption = false

            clearInterval(backgroundIntervel)
            localStorage.setItem("background_option", false)
        }
    });
});


//
//


// select landing
let landingpage = document.querySelector(".landing-page") 

// get array iemg
let iemgsarray = ["download (7).jpg", "download (9).jpg", "download (10).jpg", "download.jpg", "download (1).jpg"]






//FUNCTION TO RANDOMIZE IMGS

function randmizeimgs() {
    if (backgroundOption === true) {



        backgroundIntervel = setInterval(() => {
//get radom number
    let randomnuber = Math.floor(Math.random() * iemgsarray.length)

// change background iamge
landingpage.style.backgroundImage = 'url("iamge/' + iemgsarray[randomnuber] + '")';

}, 10000)
    }
}

randmizeimgs() 




//select skills selector

let OurSkills = document.querySelector(".skills");
    
window.onscroll = function () {

    //skills offset top
    let skillsOffsetTop = OurSkills.offsetTop;

    //skills outer heihgt
    let skillsOuterHeight = OurSkills.offsetHeight;

    //window Height
    let windowHeight = this.innerHeight;

    //window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        
        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        })
    }
};

    


//create popup with the image

let ourgallery = document.querySelectorAll(".gallery img")

ourgallery.forEach(img => {

    img.addEventListener('click', (e) => {
    
        //create overlay element
        let overlay = document.createElement("div")

        //add class to overlay
        overlay.className = 'popup-overlay'

        //append overlay to the body
        document.body.appendChild(overlay);

        //creata the popup
        let popupBox = document.createElement("div")

        //add class to the popup box
        popupBox.className = 'popup-box';

        
        if (img.alt !== null) {


            //creata heding
            let imgheding = document.createElement("h3")

            //creata text for heding

            let imgtext = document.createTextNode(img.alt);



            //append the text to the heding

            imgheding.appendChild(imgtext);

            //append the heding to the popup box
            popupBox.appendChild(imgheding)

        }

        // creata the img
        let popupimg = document.createElement("img");

        // set img source
        popupimg.src = img.src;

        // add img to popup box
        popupBox.appendChild(popupimg);
        
        //append the popup box to body 
        document.body.appendChild(popupBox);

        //create the close span 
        let closeButton = document.createElement("span");

        //create the close button text
        let closeButtonText = document.createTextNode("X")

        //append text to close button
        closeButton.appendChild(closeButtonText);

        //add class to close button
        closeButton.className = 'close-button';

        //add close button to the popup box
        popupBox.appendChild(closeButton);


})

})

//close popup
document.addEventListener("click", function(e){

    if (e.target.className == 'close-button') {

        // remove the current popup
        e.target.parentNode.remove();

        //remove the overlay
        document.querySelector(".popup-overlay").remove();


    }

})





//select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .nav-bullet");

//select all links
const allLinks = document.querySelectorAll(".links a");


function scrollToSomewhere( elements) {

elements.forEach(ele => {

    
    ele.addEventListener("click", (e) => {

e.preventDefault()

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        });

    });
    
});


}


scrollToSomewhere(allBullets)
scrollToSomewhere(allLinks)


//handle active state 
function handleActive(ev) {
    
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            
    element.classList.remove("active")
})

        //add active class on self
        ev.target.classList.add("active")

}



let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocal = localStorage.getItem("bullets-option")

if (bulletLocal !== null) {
    
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });

    if (bulletLocal === 'block' ) {

        bulletsContainer.style.display = 'block'
        
        document.querySelector(".bullets-option .yes").classList.add("active")


    } else {
        
        bulletsContainer.style.display = 'none'
        
                document.querySelector(".bullets-option .no").classList.add("active")
    }
        


}


bulletsSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === 'shwo') {

            bulletsContainer.style.display = 'block'

            localStorage.setItem("bullets-option", 'block');
            
        } else {
            
            bulletsContainer.style.display = 'none'

            localStorage.setItem("bullets-option", 'none');

        }
        handleActive(e);

    });
});





// reset button
document.querySelector(".reset-options").onclick = function () {

    localStorage.clear();

    // localStorage.removeItem("bullets-option");

    // localStorage.removeItem("backgrund-option");

    // localStorage.removeItem("color-option");

    window.location.reload();
}





//toggle menu
let toggle = document.querySelector(".header-eraa .toggle-menu")

let tLinks = document.querySelector(".links")



toggle.onclick = function (e) {

    e.stopPropagation()

    this.classList.toggle("menu-active")

    tLinks.classList.toggle("open")
    
};


document.addEventListener("click", (e) => {

    if (e.target !== toggle && e.target !== tLinks) {



        if (tLinks.classList.contains("open")) {

        toggle.classList.toggle("menu-active")

    tLinks.classList.toggle("open")

}

    } 

}
);

tLinks.onclick = function (e) {

    e.stopPropagation()

};

