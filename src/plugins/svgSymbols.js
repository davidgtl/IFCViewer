import fs from "fs"
const fileRegex = /\/assets\/symbols\/.*\.svg$/

// export default function () {
//   return {
//     name: '',

//     transform(src, id) {
//       console.log("svgSymbols", src, id)
//       if (fileRegex.test(id)) {
//         return {
//           code: compileFileToJS(src),
//           map: null, // provide source map if available
//         }
//       }
//     },
//   }
// }

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
      // fs.readdir("./src/assets/symbols", function (err, files) {
      //   //handling error
      //   if (err) {
      //       return console.log('Unable to scan directory: ' + err);
      //   } 
      //   //listing all files using forEach
      //   files.forEach(function (file) {
      //       // Do whatever you want to do with the file
      //       console.log(file); 
      //   });
      // });
      const focusObject = fs.readFileSync("./src/assets/symbols/focusObject.svg")
      // FIXME: remove fill=* from everywhere, add id="symbol_name" to root
      if (id === resolvedVirtualModuleId) {
        return `export const svgs = {
          focusObject:  { __html: \`${focusObject}\` }
        }`
      }
    },
  }
}