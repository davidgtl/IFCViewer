# IFCViewer
Explore 3D Models

## View Online
[davidgtl.github.io/IFCViewer](https://davidgtl.github.io/IFCViewer/)

## Run
    npm install
    npm run dev

## Dependecies
Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), [MobX](https://mobx.js.org/README.html) and [three.js](https://threejs.org/)

## Sightseeing
 [VSCode](https://code.visualstudio.com/) with [JSDoc Markdown highlighting](https://marketplace.visualstudio.com/items?itemName=bierner.jsdoc-markdown-highlighting) is recommended for exploring the code
 * A few functional helpers in [src/fn.js](src/fn.js)
 * A mini module framework(registerModule) in [src/state/rootState.js](src/state/rootState.js)
 * A simple, greedy triangulation algorithm in [src/algo/triangulatePotato.js](src/algo/triangulatePotato.js)
 * An SVG embedder build step in [src/plugins/svgSymbols.js](src/plugins/svgSymbols.js)
 * A history tracker(undo/redo) in [src/state/history.js](src/state/history.js)
 * A broken IFC mini Parser in [src/state/IFCParserState.js](src/state/IFCParserState.js)

# [License](LICENSE)
This project: GPLv3 -- do whatever, no guarantees. When distributing your work, attribute and keep it free.
Libraries: MIT -- do whatever, no guarantees. When distributing your work, attribute.
SVG assets: CC BY 3.0 -- do whatever. When distributing your work, attribute and keep it free.
Others: unrestricted

## [Credits](CREDITS.md)