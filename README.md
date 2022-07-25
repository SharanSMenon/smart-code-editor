# WebAssembly Code Editor

An online code editor that runs completely in the browser. Uses WebAssembly to compile programs and run them right in the browser.

**Languages currently supported**

- C
- C++
- Python 3

**Features**

- Edit code with a advanced editor (CodeMirror)
- Syntax Highlighting
- Offline running
- Python Package support
- Multiple languages
- C/C++ standard library
- Dark theme

C and C++ are provided by the `clang` compiler compiled to WebAssembly, which comes from this [project](https://github.com/binji/wasm-clang). Hopefully, Objective-C support can be added soon. Hence, `clang` and `lld` are running completely in the browser, limited only by the host computer's performance.

> C/C++ standard library does not fully work, though a good amount of libraries are working just fine, like `iostream` and `vector`. I know that `chrono` does not work, and there are probably others that don't work too. I believe libraries that require access to specific hardware features will not work.

Python support is provided by [Pyodide](https://pyodide.org/en/stable/). Packages that are currently supported are the ones that Pyodide can build and preload. Right now, packages like `matplotlib` will not produce any graphical output, because the output area only displays `stdout`. Package support requires an internet connection. Python 2 is not supported. Head over to pyodide's project page to learn more about its capabilities and limitiations.

Tailwind.css is used for styling the app. Codemirror 6 is the editor used, I used [this project](https://uiwjs.github.io/react-codemirror/) to get CodeMirror working in React.

On startup, Pyodide is loaded, then a sample C++ program is run to ensure that `clang` and `lld` are ready.

## Running on local machine

Just clone this project using `git clone` or another method. Run `npm install` in the root directory and then run `npm start.` 

`npm build` will create an optimized production build than can then be deployed to a static site provider, like Vercel or Netlify.