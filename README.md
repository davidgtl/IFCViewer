# IFCViewer
Explore 3D models with a customizable UI

## Run online in your browser
[davidgtl.github.io/IFCViewer](https://davidgtl.github.io/IFCViewer/)

## Run locally
    npm install
    npm run dev

## Dependecies
Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), [MobX](https://mobx.js.org/README.html) and [three.js](https://threejs.org/)

## Sightseeing
 [VSCode](https://code.visualstudio.com/) with [JSDoc Markdown highlighting](https://marketplace.visualstudio.com/items?itemName=bierner.jsdoc-markdown-highlighting) is recommended for exploring the code
 
 * A module with actions/properties which **auto map to UI** in [src/App.jsx](src/App.jsx) + [src/state/RenderState.js](src/state/RenderState.js)
 * A mini UI framework in [src/framework/registerModule.js](src/framework/registerModule.js)
 * A history tracker(undo/redo) in [src/framework/history.js](src/framework/history.js)
 * A coarse + fine React component in [src/components/DynSlider.jsx](src/components/DynSlider.jsx)
 * A few functional helpers in [src/fn.js](src/fn.js)
 * A simple, greedy triangulation algorithm in [src/algo/triangulatePotato.js](src/algo/triangulatePotato.js)
 * An SVG embedder build step in [src/plugins/svgSymbols.js](src/plugins/svgSymbols.js)
 * Procedural theme color generation in [src/index.css](src/index.css) (almost perceptual color space)

## Roadmap
 [todo.md](todo.md)
 
# [License](LICENSE)
This project: GPLv3 -- do whatever, no guarantees. When distributing your work, attribute and keep it free.

Libraries: MIT -- do whatever, no guarantees. When distributing your work, attribute.

SVG assets: CC BY 3.0 -- do whatever. When distributing your work, attribute and keep it free.

Others: unrestricted

## [Credits](CREDITS.md)
