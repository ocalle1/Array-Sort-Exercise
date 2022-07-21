//  Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and 
// displays that click count to the user. Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.


  let clicks = 0;



const pageClick = () => {
    clicks++;
// The localStorage.setItem ("click", click) - ("key", value) - The "key" is what you have to type in order to be able to retreive when you getItem (line 16) or remove item.
// The setItem saves the amount of "click" done on one a page. The value clicks is then called upon by the console.log.
    localStorage.setItem("click", clicks);
    console.log(clicks)
}
//The getItem "click" then retreives the amounts of clicks and displays them on application and console when you inspect the dev tools.
//the !==null is true a != null is false.
if(localStorage.getItem("click") !==null){
     clicks = Number(localStorage.clicks);

}
// Window is where alot of the properties are stored. info can be retrived for it to do something i.e addEventListener("click",pageClick) or almost anything else.
window.addEventListener("click", pageClick)



//COUNTS ARE NOT BEING ADDED TO THE APPLICATION!!!
