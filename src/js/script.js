(function() {

    var imgOriginalArray =[
        
        './src/images/dog.png',
        './src/images/bee.png',
        './src/images/koala.png',
        './src/images/fox.png',
        './src/images/turtle.png',
        './src/images/lion.png',
        './src/images/hen.png',
        './src/images/elephant.png',
    ];
  //  console.log("new Array = "+imgArray);
    /**
     * doubling array elements as each image has match
     */

     var imgArray = imgOriginalArray.concat(imgOriginalArray);
    /**
     * Shuffle Image array so user can not remember the place of image ..Each time new game
     */
    var shuffle = (imgArray)=>{
        imgArray.sort((a, b) => 0.5 - Math.random());
        return imgArray;
    }
    shuffle(imgArray);
    /**
     * Refresh page and shuffle images place
     */
    document.getElementById("reset").addEventListener("click",()=>{
        location.reload();
        shuffle(imgArray);
    });


    const targetContainer = document.querySelector("#target");
    var cols = 4;
    var rows = imgArray.length / cols; // number of rows need to load
    var len = imgArray.length - 1;
    /**
     * Create rows and columns according to the array elements
     * Also add flip classes and their divs
     */
    
    for(let i = 0;i<rows;i++){
        // targetContainer[i].innerHtml=`<div class="row">`;
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for(let j = 0; j< cols;j++){
            if(len >= 0){ //console.log("i = "+i+" j = "+j+"Len = "+len);
                var column = `<div class="col-6 col-md-3 flip-box border text-center">
                                    <div class="flipImgContainer">
                                        <div class="frontImage">CLICK ME</div>
                                        <div class="backImg text-center"><img src="${imgArray[len]}" alt="${imgArray[len]}"/> </div>
                                    </div>
                                </div>`;
                                len--;
                               // console.log("column = "+column);
                                
                        }
            rowDiv.innerHTML += column;
            //console.log("j = "+j);
        }
        targetContainer.appendChild(rowDiv);
       // console.log("i = "+i);
    }
    /**
     * On click of image flip it
     */
    var flipImages = document.querySelectorAll(".flipImgContainer");
    var mouseClicks = 0; // to check when to remove and add flip class.
    var imgMachFoundCnt = 0; // to find result
    var prevClickImgIndex; // compare if two images match or not
    
    flipImages.forEach((image,index) => {
        image.addEventListener("click",()=>{
           
            if (mouseClicks !== 2){
                image.classList.add("flipImg");
                mouseClicks++;
                if (mouseClicks === 1){
                    prevClickImgIndex = index;
                }
                if (mouseClicks === 2){
    
                    if (image.querySelector("img").src !== flipImages[prevClickImgIndex].querySelector("img").src){
                        
                        setTimeout(() => {
                            flipImages[prevClickImgIndex].classList.remove("flipImg");
                            image.classList.remove("flipImg");
                            mouseClicks = 0;
                        }, 1000);
                    } else {
                        imgMachFoundCnt++;
                        setTimeout(() => mouseClicks = 0, 1000);
                    }
    
                    if (imgMachFoundCnt === imgOriginalArray.length){
                        document.getElementById("roundNumMsg").innerHTML = `Yo win the game try again`;
                    }/**/
                }
            };
        });
    });
    
})();