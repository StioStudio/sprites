document.querySelectorAll("sprite").forEach((element) => {
    const path = element.attributes.getNamedItem("src").value
    import(path).then(async ({
        main: _main, assets
    }) => {
        const property = {}
        const _assets = {}
        const combos = [
            {
                type: "image",
                func(combo) {
                    _assets[combo.type] = {}
                    assets[combo.type].forEach((asset, index) => {
                        const img = new Image()
                        img.src = asset.src
                        _assets[combo.type][asset.name] = img
                    })
                }
            },
            {
                type: "lib",
                async func(combo) {
                    const [lib] = await Promise.all(assets[combo.type].map((rem) => {
                        return import(`./lib/${rem}`)
                    }))
                    property.lib = lib
                }
            }
        ]
        await Promise.all(combos.map(async (combo) => {
            if (assets[combo.type]) {
                await combo.func(combo)
            }
        }))
        _main({ assets: _assets, ...property })

    })
})