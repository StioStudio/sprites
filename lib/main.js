export function forever(_func) {
    new Promise(async (resolve, reject) => {
        while (true) {
            await _func()
        }
    })
}

export async function wait(time) {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}