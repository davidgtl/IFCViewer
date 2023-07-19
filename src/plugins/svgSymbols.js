import fs from "fs"

export default function processSymbols() {
  const virtualModuleId = 'svgSymbols'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'svgSymbols',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      const keyValues = []
      const files = fs.readdirSync("./src/assets/symbols")

      for (const file of files) {
        const name = file.substring(0, file.length - 4)
        const svgContent = fs.readFileSync(`./src/assets/symbols/${name}.svg`).toString()
        .replace(/(<svg.*?)>/, `$1 id="symbol_${name}">`).replace(/<text.*<\/text>/, "")
        keyValues.push(`${name}:  { __html: \`${svgContent}\` }`)
      }

      if (id === resolvedVirtualModuleId) {
        const merged = keyValues.join(",")
        return `export const svgs = {${merged}}`
      }
    },
  }
}