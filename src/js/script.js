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
    //var colClass = "col-md-"+cols+1;
    var rows = imgArray.length / cols; // number of rows need to load
    var len = imgArray.length - 1;
        for(let i = 0;i<rows;i++){
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
             for(let j = 0; j< cols;j++){
                 let colDiv = document.createElement("div");
                     colDiv.classList.add("col-6", "col-md-3","flip-box", "border","text-center");
                    let fboxInnerDiv = document.createElement("div");
                        fboxInnerDiv.classList.add("flip-box-inner");
                        let fboxFrontImgDiv = document.createElement("div");
                        fboxFrontImgDiv.classList.add("flip-box-front")
                        let fboxBackDiv = document.createElement("div");
                        fboxBackDiv.classList.add("flip-box-back","text-center", "align-items-center");
                     let imgTag = document.createElement("img");
                 if(len >= 0){
                      imgTag.src = imgArray[len];
                   // console.log("len = "+len+" src = "+imgArray[len]);
                     len--;
                 }
                 fboxBackDiv.innerText = "Click me to flip";
                 fboxFrontImgDiv.appendChild(imgTag);
                 fboxInnerDiv.appendChild(fboxFrontImgDiv);
                 fboxInnerDiv.appendChild(fboxBackDiv);
                 colDiv.appendChild(fboxInnerDiv);
                 rowDiv.appendChild(colDiv);
             }
             targetContainer.appendChild(rowDiv);
        }
        

})();