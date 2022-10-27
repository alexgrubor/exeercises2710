
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
let country = countries.reduce((acc, country) =>{
    return acc + country.length
},0)

console.log(country);


console.log(countries.sort());