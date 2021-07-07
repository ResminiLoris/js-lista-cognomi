var Surnames = ['Bianchi','neri','rossi','gialli'];

var userSurname;

do {
    userSurname = prompt('digita il tuo cognome: ')
}
while (!userSurname || userSurname.trim() === "");

userSurname = userSurname.trim();
console.log(userSurname);

Surnames.push(userSurname);
console.log(Surnames);

Surnames.sort();
console.log(Surnames);

var position = Surnames.indexOf(userSurname) + 1;
console.log('posizione cognome utente: ' + position);
