/*Name this external file gallery.js*/

//Các hàm sẽ được gọi ra và sử dụng và đối số this sẽ được dùng vào trong các hàm

function upDate(previewPic) { //Có tham số là previewPic và nó truyền đối số là this vào từ html
    /*  In this function you should 
        1) change the url for the background image of the div with the id = "image" 
        to the source file of the preview image */
        
        var divImage = document.getElementById("image"); // khai báo biến để chứa id đó
        divImage.style.backgroundImage = "url(' "+ previewPic.src + " ')"; // background là ảnh sẽ xuất hiện
        
       /* 2) Change the text  of the div with the id = "image" 
        to the alt text of the preview image  */
 
        divImage.innerHTML = previewPic.alt; // Chữ bên trong div sẽ được thay đổi 
       
 
 }
 
 function unDo() {
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was */
    
    var divImage = document.getElementById('image'); //Khai báo biến để chứa id đó
    divImage.style.backgroundImage = "url('')"; // không có đường link url để đặt background
 
 
   /*  2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was */
   
    divImage.innerHTML = "Hover over an image below to display here."; // Trong phần tử có id là image sẽ được thay thế
 
 }