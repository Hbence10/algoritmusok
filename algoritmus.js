const gomb = document.getElementById('gomb');
//Ha a gombra kattintok akkor a Jatek fügvény fusson le
gomb.addEventListener("click", Jatek);


function Jatek (){
    let szam = Math.floor(Math.random() * 100) + 1;
    let sz = 1; 
    let tipp = document.getElementById('szam').value;  
    
    while (tipp != szam) {
        if (tipp < szam) {
            alert("nagyobb")
        } else {
            alert("kisebb")
        }
        //tippek számának növelése
        sz++;

        //Következő tipp
        tipp = prompt("Adjad meg mégegyszer")
    }

    let eredmeny = document.getElementById('eredmeny');
    eredmeny.innerHTML = "Eltaláltad! Probálkozások száma" + sz;
}