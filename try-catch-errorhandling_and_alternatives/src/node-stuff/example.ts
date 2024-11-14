type User = {
    name: string
    age: number
}

const person = {
    name: "Doug",
    age: 37,
} satisfies User

export function isAdult(person: User) {
    return person.age >= 18
}

console.log("PERSON:", person)


// run: `node --experimental-strip-types example.ts  // did not work
