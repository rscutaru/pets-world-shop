# JavaScript Advanced - React - Proiectul 2

Magazinul online react-siluggia-shop este cel de-al doilea proiect din cadrul cursului JavaScript Advanced - React, predat online de catre Telecom Academy. Cursul este continuarea celui de JavaScript Fundamentals. 

Proiectul utilizeaza React, Redux si este o continuare/ dezvoltare a proiectului din cadrul Advanced JavaScript.  

## Cerinte indeplinite

Pentru continuarea proiectului, am respectat cerintele date:

1. Am creat propriul repo pe github, si am continuat sa adaug functionalitati. **Am modificat obiectul firebaseConfig, din configs/firebase.js, astfel incat sa contina datele din proiectul meu de firebase.**

2. Am creat paginile "About" si "Terms and Conditions"(plus ruta corespunzatoare pentru "Terms and conditions").

3. Am adaugat functionalitatea de logare cu Facebook(similar cu logare cu Google).

4. Am adaugat functionalitatea de adaugare la favorite. Am folosit redux, iar adaugarea se face atat din pagina de categorie, cat si din pagina de produs. **In header am adaugat o iconita noua, care va redirecteaza catre pagina de favorite, unde sunt listate produsele corespunzatoare.**

6. Am modificat structura folderului "redux" astfel: in loc de folderele "actions" si "reducers", am creat foldere per functionalitate, fiecare cu actiunile si reducerii speficifici. De exemplu: am creat folderele cart/user/favorite, care contin fisierele aferente (de ex. "CartActions.js" si "CartReducer.js").
De asemenea, pentru tipul actiunii, creati in fiecare folder un fisier de constante(ex: CartConstants.js), in care veti defini valorile corespunzatoare. In cadrul actiunilor si al reducerilor, in loc sa scrieti manual tipul actiunii(ex: 'REMOVE_FROM_CART'), il veti importa din fisierul de constante.

7. Am modificat structura proiectului astfel: atat in componente, cat si in pagini, am creat foldere noi, care contin toate fisierele corespunzatoare unei componente/pagini. De exemplu: pentru componenta Footer, am creat un folder care contine Footer.jsx si Footer.css.

3. **Am modificat products.json, pastrandu-i structura, dar folosind produse/categorii proprii. De asemenea, am creat un cont pe imgur si am adaugat propriile imagini, actualizand si link-urile imaginilor din products.json. In final, am generat un nou logo, corespunzator magazinului meu online.**

## Demo

Puteti accesa proiectul prin link-ul următor:

https://react-proiect2-petsworld.herokuapp.com/

## Functionalitati

* Click pe orice categorie - va lista produsele corespunzatoare

* Click pe butonul "Adauga in cos" al fiecarui produs(fie din pagina de categorie, fie din pagina de produs) - produsul va fi adaugat in cos. Iconita corepsunzatoare se actualizeaza daca produsul nu exista deja in cos

* Click pe produs - va duce catre pagina produsului

* Click pe "Logare" - va redirecta catre pagina de Login, unde la click pe butonul "Logare cu Google" veti fi redirectionati catre pagina corespunzatoare

* Click pe cos(iconita) - va afisa produsele adaugate in cos. La click pe iconita "X" puteti elimina un produs din cos











