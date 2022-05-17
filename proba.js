const gomb = document.getElementById('gomb');
//Ha a gombra kattintok akkor a Jatek fügvény fusson le
gomb.addEventListener("click", Jatek);


function Jatek (){
    let szam = Math.floor(Math.random() * 100) + 1;
    let sz = 1; 
    let tipp = document.getElementById('szam').value;  
    let nagyobb = document.getElementById('text');
    let kisebb = document.getElementById('text');

    while (tipp != szam) {
        if (tipp < szam) {
            nagyobb.innerHTML = "nagyobb"
        } else {
           
            kisebb.innerHTML = "kisebb"
         }
        //tippek számának növelése
        sz++;

        //Következő tipp
        tipp = document.getElementById('szam').value;
    }

    let eredmeny = document.getElementById('eredmeny');
    eredmeny.innerHTML = "Eltaláltad! Probálkozások száma" + sz;
}