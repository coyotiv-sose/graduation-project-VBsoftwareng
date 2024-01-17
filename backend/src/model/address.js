const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
  street: String,
  zipCode: String,
  district: String,
  city: String,
})

module.exports = mongoose.model('Address', addressSchema)
// class Address {
//   constructor(street, zipCode, district, city) {
//     this.street = street
//     this.zipCode = zipCode
//     this.district = district
//     this.city = city
//   }

//   static create({ street, zipCode, district, city }) {
//     // complete static create method
//     const newAddress = new Address(street, zipCode, district, city)

//     Address.list.push(newAddress)

//     return newAddress
//   }
//   static list = []
// }
// module.exports = Address
