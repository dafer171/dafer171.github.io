//get all imgs with data-src attribute
const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
    return;
  }
  img.src = src;
}

const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => { entries.forEach(entry => {
  if(!entry.isIntersecting){
    return;
  }else {
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target);
  }
})

}, imgOptions)

images.forEach(image => {
  imgObserver.observe(image); 
});


/*
// optional parameters being set for theIntersectional observer
const imgOptions= {
    threshold = 0,
    rootMargin = "0px 0px 50px 0px"
};


const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//firs chech to see if Intersection Observer is supported
if("intersetionOserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) =>{
        items.forEach((item)=> {  
        });
    }, imgOptions);

    //Loop through each img an check status and loas if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
      });
    }
    else{}
*/