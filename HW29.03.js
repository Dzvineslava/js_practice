//1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//a) отримує текст з параграфа з id "content"
//b) отримує текст з блоку з id "rules"
//c) замініть текст параграфа з id 'content' на будь-який інший
//d) замініть текст параграфа з id 'rules' на будь-який інший
//e) змініть кожному елементу колір фону на червоний
//f) змініть кожному елементу колір тексту на синій
//g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//h) отримати всі елементи з класом fc_rules
//i) поміняти колір тексту у всіх елементів fc_rules на червоний

const content = document.getElementById("content")
console.log(content);

const idRules = document.getElementById("rules")
console.log(idRules)

content.textContent = "Unsere Unterrichtsvorschläge richten sich sowohl an Deutschlehrende als auch an Lehrkräfte für naturwissenschaftliche Fächer. Wir bieten Ihnen Unterrichtideen zur Vor- und Nachbereitung der Ausstellung für Deutsch als Fremdsprache (A1 bis B1), drei Ausstellungsrallyes sowie Vorschläge für CLIL."

idRules.textContent = "Wie kann man die Community „Deutsch für dich“ mit dem Unterricht verknüpfen? Wir haben die besten Ideen von Deutschlehrerinnen und -lehrern aus der ganzen Welt gesucht. Nun stehen die Gewinnerinnen und Gewinner fest."

content.style.backgroundColor = "#e92a50"
content.style.color = "#2174a0"

idRules.style.backgroundColor = "#d92727"
idRules.style.color = "#216ae9"

let all_rules = document.getElementsByClassName('fc_rules')
console.log(all_rules)



for (var i = 0; i <all_rules.length; i++) {
    all_rules[i].style.color = "#ee194a"
}


//for (const rule of all_rules) {
//    rule.style.color = "#f12fccef"
//}

/// ----- task 2

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

for (var i = 0; i < users.length; i++) {
    //console.log(users[i])
    let createdElement = document.createElement("div")
    createdElement.textContent = users[i].name
    createdElement.style.backgroundColor = "#eeccdd"
    document.body.appendChild(createdElement)

    let cityElement = document.createElement("div")
    cityElement.textContent = users[i].address.city
    document.body.appendChild(cityElement)

    let countryElement = document.createElement("div")
    countryElement.textContent = users[i].address.country
    document.body.appendChild(countryElement)

    let streetElement = document.createElement("div")
    streetElement.textContent = users[i].address.street
    document.body.appendChild(streetElement)

    let houseNumberElement = document.createElement("div")
    houseNumberElement.textContent = users[i].address.houseNumber
    document.body.appendChild(houseNumberElement)
}

