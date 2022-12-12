const mongoose = require('mongoose');

const User = require('./models/users');
lista = ["Blekinge län" ,
"Dalarnas län" ,
"Gotlands län" ]


lista2 = ["Karlshamn", "Falun", "Visby"]

//le = length(lista)
for (let i =0 ; i < lista.length ; i++) {

console.log('Länen:', lista[i], " : Med största stad ", lista2[i]);
upsertUser({
lista: lista[i],    
lista2: lista2[i]
});
// console.log(apoteksnamn[i])

}




async function upsertUser(userObj) {

const DB_URL = 'mongodb+srv://Maximilian:max1max2AB@cluster0.qw9wfex.mongodb.net/?retryWrites=true&w=majority';


if (mongoose.connection.readyState == 0) { mongoose.connect(DB_URL); }

// if this email exists, update the entry, don't insert
let conditions = { lista2: userObj.lista2 };
let options = { upsert: true, new: true, setDefaultsOnInsert: true };

User.findOneAndUpdate(conditions, userObj, options, (err, result) => {
if (err) throw err;
});
}