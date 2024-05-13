export async function main({assets, lib}) {
    document.documentElement.append(assets.image.stio)
    assets.image.stio.width = 10

    lib.forever(async () => {
        console.log("hello there")
        assets.image.stio.width += 1
        await lib.wait(50)
    })
}

export const assets = {
    image: [
        {
            name: "stio",
            src: "https://asset.stio.studio/logo/stio/transparent/1600x1600.gif"
        }
    ],
    lib: [
        "main.js"
    ]
}