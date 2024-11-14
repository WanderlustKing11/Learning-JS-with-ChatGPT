// To run, enter this into the terminal:
// npm run run:try-catch

function wait(duration: number) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

async function getUser(id: number) {
    await wait(1000)
    if (id === 2) {
        throw new Error("404 - User does not exist")
    }

    return { id, name: "Doug" }
}

/////////////////////////////////////////////////////////

// Traditional try/catch approach:

// (async () => {
//     try {
//         const user = await getUser(1)
//         console.log(user)
//     } catch {
//         console.log("There was an error")
//     }
// })()


////////////////////////////////////////////////////

// Alternative approach //

// By using this function's approach, we're able to break out of the nesting of
// the "try/catch". "Try/catch" forced us to be nested insdie of a block, but 
// below we have flattened all of our code out to one level of nesting, which makes
// it much easier for us to work with.

// function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error]> {
//     return promise
//         .then(data => {
//             return [undefined, data] as [undefined, T]
//         })
//         .catch(error => {
//             return [error]
//         })
// }

// (async () => {
//     const [error, user] = await catchError(getUser(2))
//     if (error) {
//         console.log("There was an error, bro:", error.message)
//     } else {
//         console.log(user)
//     }
// })()


////////////////////////////////////////////////////

// Next Level //

// What if we want to handle custom errors and ONLY custom errors?
// We can replace our catchError() with this new catchErrorTyped():

function catchErrorTyped<T, E extends new (message?: string) => Error>(
    promise: Promise<T>,
    errorsToCatch?: E[]
): Promise<[undefined, T] | [InstanceType<E>]> {
    return promise
        .then(data => {
            return [undefined, data] as [undefined, T]
        })
        .catch(error => {
            if (errorsToCatch == undefined) {
                return [error]
            }

            if (errorsToCatch.some(e => error instanceof e)) {
                return [error]
            }

            throw error
        })
}

class CustomError extends Error {
    name = "CustomError"
    extraProp = "ERROR: test"
}

(async () => {
    // const [error, user] = await catchErrorTyped(getUser(1))
    const [error, user] = await catchErrorTyped(getUser(2), [CustomError]) // With this..
    // ...-> We can perfectly throw errors that are not custom, and catch the custom errors
    // great for catch errors of specific types
    if (error) {
        console.log("There was an error, bro:", error.message)
    } else {
        console.log(user)
    }
})()