function imgGallery(){
    let hilight = document.querySelector('.gallery-hilight');
    let previews = document.querySelectorAll('.gallery-previw img');

    previews.forEach(preview => {
        preview.addEventListener('click',function(){
            
            console.log(preview);

            let smallSrc = this.src;
            console.log(smallSrc);
            let bigSrc = smallSrc.replace("small","big");
            hilight.src = bigSrc;
            previews.forEach(preview => preview.classList.remove('active'));
            preview.classList.add('active');

        });


    });

}

imgGallery();

var turn = 0;
var sec = 0;
var tri = 0;

document.getElementById("btn1").addEventListener('click',function(){
    console.log("hi");
    
    var x = document.getElementById("description");
    if (turn == 0){
        x.style.display = "block";
        x.style.marginRight = "15%";
        turn = turn + 1;
    }
    else{
        console.log("reverse");
        x.style.display = "none"
        turn = turn - 1;
    }
   

});




document.getElementById("btn2").addEventListener('click',function(){
    console.log("hi");
    
    var z = document.getElementById("Specification");
    if (sec == 0){
        z.style.display = "block";
        z.style.marginRight = "15%";
        sec = sec + 1;
    }
    else{
        console.log("reverse");
        z.style.display = "none"
        sec= sec - 1;
    }
   

});




document.getElementById("btn3").addEventListener('click',function(){
    console.log("hi");
    
    var n = document.getElementById("policy");
    if (tri == 0){
        n.style.display = "block";
        n.style.marginRight = "15%";
        tri = tri + 1;
    }
    else{
        console.log("reverse");
        n.style.display = "none"
        tri = tri - 1;
    }
   

});








