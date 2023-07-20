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
 * A few functional helpers in [src/fn.js](src/fn.js)
 * A mini module framework(registerModule) in [src/state/rootState.js](src/state/rootState.js)
 * A simple, greedy triangulation algorithm in [src/algo/triangulatePotato.js](src/algo/triangulatePotato.js)
 * An SVG embedder build step in [src/plugins/svgSymbols.js](src/plugins/svgSymbols.js)
 * A history tracker(undo/redo) in [src/state/history.js](src/state/history.js)
 * A broken IFC mini Parser in [src/state/IFCParserState.js](src/state/IFCParserState.js)

[Credits](CREDITS.md)
