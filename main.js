// Get slider items 
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));


// Get Numbers of sildes 
var slideCount = sliderImages.length;


// Set Cuurent slide
var currentSlide = 1;


// slide number element
var slideNumberElement = document.getElementById('slide-number');


//prev&next 
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


//Handle click onprev and nextb button 
nextButton.onclick = nextslide;
prevButton.onclick = prevslide;


//creat main ul 
var paginationElement = document.createElement('ul'); 


//Set Id On Created Ul 
paginationElement.setAttribute('id', 'pagination-ul');


//creat list items based on slide count 
for(var i=1; i<=slideCount; i++) {
    //craet li
    var paginationItems = document.createElement('li');
    //Set cutom Attribute 
    paginationItems.setAttribute('data-index', i);
    //set item content 
    paginationItems.appendChild(document.createTextNode(i));
    //Append Items to the main parent 
    paginationElement.appendChild(paginationItems);
}


//added the created ul to the body 
document.getElementById('indicators').appendChild(paginationElement);


// Get The New Created Ul 
var paginationCreatedUl =document.getElementById('pagination-ul');


//Get Pagination Item
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//Loop On Through Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        thechecker();
    }
}




 // Trigger of function checker
 thechecker();

//Next Slide Function
function nextslide() {
    if (nextButton.classList.contains('disabled')){
        //Do Nothing
        return false;

    }else {
        currentSlide++;
        thechecker();
    }

}


//Previouse Slide Function 
function prevslide() {
    if (prevButton.classList.contains('disabled')) {
        //Do Nothing 
        return false;
    } else{
        currentSlide--;
        thechecker();
    } 
}



//Creat The Checker Function 
function thechecker() {
    //Set The Slide Number
    slideNumberElement.textContent =  ' Slide # ' + (currentSlide) + ' Of ' + (slideCount);

    //remove active
    removeallactive();



    //Set active Class on current slide
    sliderImages[currentSlide-1].classList.add('active');
    //Set Active Class On Current Pagination Items 
    paginationCreatedUl.children[currentSlide-1].classList.add('active');


    //Check If the Current Slide Is The First 
    if(currentSlide == 1) {
        // Add Class Disabled on Previous Button
        prevButton.classList.add('disabled');
    } else{
        //Rempove Disabled Class from Prev Button
        prevButton.classList.remove('disabled');
    }
    
    //Check If the Current Slide Is The Last 
    if(currentSlide == slideCount ) {
        // Add Class Disabled on next Button
        nextButton.classList.add('disabled');
    } else{
        //Rempove Disabled Class from Next Button
        nextButton.classList.remove('disabled');
    }

}
   




//remove all active class 
function removeallactive() {
    //loop through images 
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    //Loop On Pagination Bullets 
    paginationBullets.forEach(function (bullet)
    {
        bullet.classList.remove('active')
    }
    );
}

