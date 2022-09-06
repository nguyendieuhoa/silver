let elemsImage = document.getElementsByClassName('mes-images'); 
for (let i = 0; i < elemsImage.length; i++ ) {
    elemsImage[i].addEventListener('click', function () {
        document.querySelector('#principale').src = this.src;
        document.querySelector('#legende').innerHTML = this.alt;
       
    });
}
