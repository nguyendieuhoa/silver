let blocsProduit = document.getElementsByClassName('bloc-produit');

let filtres = document.querySelectorAll('.list-group-item a')
console.log(filtres);

for (let i = 0; i < filtres.length; i++) {
    filtres[i].addEventListener('click', function (e) {

        if (i != 0) {
            e.preventDefault();
        }

        // 3 - 
        console.log(this.textContent);
    

        // 5 -
        for (let y = 0; y < blocsProduit.length; y++) {
            // 6 -
            console.log(blocsProduit[y].getAttribute('data-categorie'));
            if (blocsProduit[y].getAttribute('data-categorie') == this.textContent /*|| this.textContent == 'Tous les produits'*/) {
                blocsProduit[y].style.display = 'block';
            } else {
                blocsProduit[y].style.display = 'none';
            }
        }
     
    });
}



