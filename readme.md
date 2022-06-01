Algoritmus fogalma, jellemzői
algoritmus elemek
algoritmus leíró eszközök

Egyenlőség:
legyen egyenlő
x = 2; --> legtöbb program nyelvben
x := 2 --> előfordulhat ez is

egyenlő-e?
x == 2

# Programozás

## Programozási hibák:
- szintaktika hiba (pl. elgépelés)
    - fejlesztőkörnyezet általában jelzi
- szemantika hiba (hibás működés)
    - tesztelés során jön elő

# Másik csoportosítás
- forditott idejű híbák (comile-time)
- futás idejű hiba (run-time) kivételel --> kivitelezés
    - nullával való osztás (divide by zero)
    - ...
## Hibák elhárítása (szemantika)
- Hibakeresés (Debugging)
    - Lépésenkénti program végrehajtása
        - Tőréspont (Breakpoint)
        - program léptetése
        - változók figyelése
- Tesztelés  

Javascript Debug:
- Browser F12
- Fejlesztőkörnyezetben (Visual Studio Code)

Számitógép név (Host name)
- IP cím

localhost = 127. 

HF: 
prímszám vizsgálata

Fogalmak:
- algoritmus fogalma
- algoritmus elemek
    - szekvencia
    - szelekció
    - iteráció
- folyamatábra

draw.io

 # Alpogrammok (szubrutin)
 - eljárás (procedure)
 - függvény (function)

## Folyamata: 
- Amikor az alprogramot végre akarunk hajtani : alpogram hívás (call)
- Amikor az alpogram végez akkor visszatér (return) a hívó programba , lövetkező utasítására

## Rekurzió
- amikor egy alprogramm saját magát meghívja 

Paraméter: bemenő (input) adat a hívott alprogramm számára

- Visszatérési érték: az az érték amit az alprogramm visszaad
- ha van visszatérési érték: függvény
- Ha nincs: eljárás (procedura)


## Példák
1.
2. 

--------------------------------------------------------------
3. függvény, paraméterrel
pl: Kör terület

function kör_terület(sugar){
    ter = sugar*sugar*pi
    return ter;
}

Függvény hívása: értékadó utasításban:
sugar = 5,2
terület = kör_terület(sugar) --> terület = 84,94s

document.getElementById('content');
köszöntő eljárás

----
## Alprogrammok (eljárások)

function functionnak neve(paraméterek) {
    // code to be executed
}

példa: 
function myFunction (a, b) {
    return a*b;
}