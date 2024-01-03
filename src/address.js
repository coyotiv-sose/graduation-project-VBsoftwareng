class Address {
  constructor(street, zipCode, district, city) {
    this.street = street
    this.zipCode = zipCode
    this.district = district
    this.city = city
  }

  static create({ street, zipCode, district, city }) {
    // complete static create method
    const newAddress = new Address(street, zipCode, district, city)

    Address.list.push(newAddress)

    return newAddress
  }
  static list = []
}
module.exports = Address
