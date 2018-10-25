let slideShowX = document.getElementById('slideShowX');
let thumbnailsX = document.getElementById('thumbnailsX');
let captionX = document.getElementById('text1');
let prevImg = document.getElementById('prevImg');
let nextImg = document.getElementById('nextImg');
let containerX = document.getElementById('containerX');
let imgNum = document.getElementById('imgNum');

let newthumb;
let arrayDiv = [];
let currentImg = 0;
let autoSlide;

let images = ["bmw100.jpg","bmw101.jpg","bmw102.jpg","bmw103.jpg","bmw104.jpg"];
let captions = ["bmw100","bmw101","bmw102","bmw103","bmw104"];

for(let i=0; i<images.length; i++)
{
    //create thumbnail div in dom to cahnge img slider
    newthumb = document.createElement('div');
    newthumb.className = 'item';
    newthumb.style.backgroundImage = "url('assets/"+images[i]+"')";
    thumbnailsX.appendChild(newthumb);

    //make the first image active and set first caption and image number
    if(i==0)
    {
        newthumb.classList.toggle("selected");
        captionX.innerHTML = captions[0];
        imgNum.innerHTML = (i+1) + "/" + images.length;
    }
    
    newthumb.addEventListener("click", function(e) {
        currentImg = i;
        checkIndex();
        selectedClass();
        changeImg();
        clearInterval(autoSlide);
      });  
    }

//change opacity for selected thumb and deactivate other 
function selectedClass()
{
    for(var x=0; x<images.length; x++)
    {
            if(thumbnailsX.children[x].className === "item selected")
            {
                thumbnailsX.children[x].classList.toggle("selected");
            }
    }
    thumbnailsX.children[currentImg].classList.toggle("selected");
}

//change background for slideShow &change caption and number 
function changeImg()
{
    slideShowX.style.backgroundImage = "url('assets/"+images[currentImg]+"')";
    captionX.innerHTML = captions[currentImg];
    imgNum.innerHTML = (currentImg+1) + "/" + images.length ;
}

//check index for first and last one
function checkIndex()
{
    if(currentImg<0)
    {
        currentImg = images.length - 1;
    }
    else if(currentImg > images.length-1)
    {
        currentImg = 0;
    }
}



function next()
{
    ++currentImg;
    checkIndex();
    selectedClass();
    changeImg();
    clearInterval(autoSlide);
}

function prev()
{
    --currentImg;
    checkIndex();
    selectedClass();
    changeImg();
    clearInterval(autoSlide);
}

//change slide show every 2 min
function autoMotion()
{
    ++currentImg;
    checkIndex();
    changeImg();
    selectedClass();
}

//stop motion when click event  
autoSlide = setInterval(autoMotion,2000);