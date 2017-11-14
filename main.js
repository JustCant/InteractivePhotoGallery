/******************* VARIABLES ****************************/

const $overlay = $("<div id='overlay'></div>");
const $image = $("<img>");
const $caption = $("<p></p>");
const $prevButton = $("<button class='overlayButton' id='prev'>&#60;</button>");
const $nextButton = $("<button class='overlayButton' id='next'>&#62;</button>");
const $closeButton = $("<button class='overlayButton' id='close'>&#10006;</button>");

/*********** CREATING THE LIGHTBOX OVERLAY ****************/

$overlay.append($image);
$overlay.append($caption);
$overlay.append($prevButton);
$overlay.append($nextButton);
$overlay.append($closeButton);

$("body").append($overlay);

/********************** FUNCTIONS *************************/

function getCurrentImage(currentImage) {  
    thisImage = currentImage;
    let imageLocation = $(currentImage).attr("href");
    $image.attr("src", imageLocation);
    let captionText = $(currentImage).children("img").attr("alt");
    $caption.text(captionText);
}

function filter() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("imageGallery");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].className = "show";
        } else {
            li[i].className = "hide";
        }
    }
}

/***************** EVENT LISTENERS **********************/

$("#imageGallery a").click(function(e) {
    e.preventDefault();    
    getCurrentImage(this);    
    $overlay.show();
});

$prevButton.click(() => {
    let imageParent = $(thisImage).parent().prev();
    if(imageParent.length != 0){
        thisImage = $(imageParent).children("a");
    }
    getCurrentImage(thisImage); 
});

$nextButton.click(() => {
    let imageParent = $(thisImage).parent().next();
    if(imageParent.length != 0){
        thisImage = $(imageParent).children("a");        
    } 
    getCurrentImage(thisImage);
});

$closeButton.click(x => {    
    $overlay.hide();
});

//const arr = ['Affenpinscher', 'BostonTerrier'];
//
//for (let i = 0; i < arr.length; i++){
//    let $ul = $(document.getElementById('imageGallery'));
//    let $li = $(document.createElement('li'));
//    let $a = $(document.createElement('a'));
//    $a.attr('href', 'img/' + arr[i] + '.jpg');
//    let $img = $(document.createElement('img'));
//    $img.attr('src', 'img/' + arr[i] + '.jpg');
//    $img.attr('alt', arr[i]);
//
//    $ul.append($li);
//    $li.append($a);
//    $a.append($img);
//}


