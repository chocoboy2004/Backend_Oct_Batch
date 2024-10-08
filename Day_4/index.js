import bcrypt from "bcrypt"

const password = "codexintern1234"
const saltRounds = 10

const hashedPassword = await bcrypt.hash(password, saltRounds)

const result = await bcrypt.compare("password", hashedPassword)

console.log(hashedPassword)
console.log(result)