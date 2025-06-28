# Optimization of React App

### How to optimize a React app bundle?

✅ Tree shaking
Removes unused code from final bundles by analyzing ES6 module imports/exports.

✅ Code splitting
Breaks the app into smaller chunks that can be loaded independently to improve performance.

✅ Compression (gzip/brotli)
Reduces file size of bundled assets to speed up load times using server-side compression.

✅ Bundle analysis
Visualizes the size and structure of your bundled code to identify optimization opportunities.

✅ Lazy loading
Delays loading of components or assets until they are actually needed by the user.

✅ Dynamic imports
Loads modules asynchronously using import() syntax, enabling lazy loading and smaller initial bundles.

✅ Vendor chunking
Separates third-party dependencies (node_modules) into a separate bundle for better caching.



# Bundlers

### What is a bundler in frontend development? Why do we need it?

Ans. A bundler takes source code (Js, CSS, images etc.) and combines them into optimized files (bundles) that browsers can load efficiently.

Bundler is needed for following:
    - Combine JS, csss , images source code to single file (bundle) so that browser can load efficiently.
    - Optimizes code for production.
    - Supports feature like code splitting, tree shaking, HMR

Examples of Bundlers: WebPack, Vite, Parcel, RollUp, ESBuild, TurboPack


### Give few examples of bundlers.

Examples of Bundlers: WebPack, Vite, Parcel, RollUp, ESBuild, TurboPack

1. Webpack
    - Most widely used.
    - Highly configurable
    - Slower dev builds

2. Vite
    - Modern build tool by Evan (Vue creator)
    - Fast dev server, use rollup for production
    - Mimimal config

3. Parcel
    - Zero config bundler
    - great for quick projects.

4. TurboPack
    - Successor to webpack by creators of Next.Js

### When should we choose webpack, vite , parcel?

Vite for:
    - Vite avois building in dev mode, that's why it is fast.
    - simpler config

Vite serves files via native ESM and compiles only what's needed on demand, using ESBuild (written in Go). Webpack bundles everything up front, which takes longer.

Webpack for:
    - when we want full customization
    - working in legacy environments

Parcel
    - Zero config bundlers
    - ideal for smaller projects

### How to reduce initial load time of a React app using Webpack/Vite?

Lazy load routes/components
Cache vendor libraries separately
Use gzip or brotli compression
Minimize images, fonts, unused styles


### What is Tree Shaking?

Tree shaking removes unused code from final bundles. Webpack uses ES6 module syntax to analyze what is actually used and eliminate dead code during build.

### What is HMR?

HMR lets you update code in the browser without full reload. Vite has built-in fast HMR because of its ESM architecture — it only replaces the changed modules.

### Which bundler is used create-react-app ?

Webpack is used. When we create react project using npx create-react-app , it sets up project that uses webpack.

We won’t see Webpack config directly because CRA hides it.
To access or customize:
npm run eject
This reveals all internal config (Webpack, Babel, ESLint, etc.), but is irreversible.
Alternative: Use tools like react-app-rewired or craco if you want to modify Webpack config without ejecting.

### What is the difference between a bundler, compiler, and transpiler?

Bundler: Merges all assets into deployable files (Webpack, Vite)
Compiler: Converts high-level code into machine-readable code (TypeScript, Babel)
Transpiler: Converts code from one version to another (e.g., ES6 → ES5 via Babel)

## Advanced


### What is Webpack and how does it work?

Webpack is a JavaScript bundler that starts from an entry point, builds a dependency graph, and outputs a bundle. It uses loaders to handle different file types and plugins for tasks like minification.

### What are entry, output, loaders, and plugins in Webpack?

Entry: The starting file (e.g., index.js)
Output: Where the bundled files go (/dist/main.js)
Loaders: Help Webpack handle non-JS files (CSS, images, Babel transpilation)
Plugins: Add features like HTML generation, cleanup, compression

### What are common Webpack loaders you’ve used?
babel-loader: transpile modern JS
css-loader + style-loader: process CSS
file-loader: import images/files
url-loader: inline small files as base64

### How does source map work?

It maps your bundled/minified code back to original source code — useful for debugging in dev tools.

### What is a dependency graph and how does a bundler build it?

A graph of all modules and how they import each other. Bundlers use it to resolve and bundle efficiently.







