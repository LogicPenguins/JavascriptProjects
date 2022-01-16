let person = {
    name: 'Logic',
    age: 15,
    country: 'United States'
}


function log_data() {
    return `${person.name} is ${person.age} years old and lives in ${person.country}`
}

console.log(log_data())