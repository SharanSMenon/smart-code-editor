/**
 * App.js
 * Created by Sharan Sajiv Menon
 * 
 */

import './App.css';
import { useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { startcode, languages } from './utils/constants';
import { API } from './cSupport/utils';
import { getApiOptions } from './cSupport/cSupport';
import PackageInstaller from './components/PackageInstaller';
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode"
import { autocompletion } from "@codemirror/autocomplete"
import { darkModeOn } from './utils/utils';
import AboutPage from './components/AboutPage';
import { langAutocomplete, langDict} from './codemirror/codemirrorConfig';

let buffer = "";

function App() {
  const pyodide = useRef(null);
  const cppApi = useRef(null);
  const [installedPackages, setInstalledPackages] = useState([])
  const [currentLang, setCurrLang] = useState(languages[0]);
  const [outText, setOutText] = useState("");
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState(`print("Hello World")`)
  const [darkMode, setDarkMode] = useState(darkModeOn());

  useEffect(() => {
    const onModeChange = event => {
      if (event.matches) {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    }
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onModeChange)
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', onModeChange);
    }
  }, [])

  const cppOutputFunc = (nText) => {
    buffer += nText
  }

  const installPythonPackage = (packageName) => {
    pyodide.current.loadPackage(packageName);
    setInstalledPackages([...installedPackages, packageName])
  }

  const apiOptions = getApiOptions(cppOutputFunc);

  // Load pyodide and c++
  useEffect(() => {
    ; (async function () {
      try {
        pyodide.current = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.20.0/full/'
        })
        pyodide.current.runPython(startcode);
      } catch (exn) {
        console.log("Pyodide is already loaded")
      }
      cppApi.current = new API(apiOptions);
      await cppApi.current.compileLinkRun("int main() {}");
      setLoading(false);
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // When run button is pressed.
  const runCode = async () => {
    buffer = ""
    if (currentLang === "Python") {
      pyodide.current.globals.set("code_to_run", code)
      const output = await pyodide.current.runPython("run_code(code_to_run)");
      setOutText(output)
    } else if (currentLang === "C++") {
      await cppApi.current.compileLinkRun(code)
      setOutText(buffer)
    } else if (currentLang === "C") {
      await cppApi.current.compileLinkRunC(code)
      setOutText(buffer)
    }
  }

  return (
    <div className="App h-screen p-5 dark:bg-slate-800 dark:text-white">
      <div className="header mb-4 flex-spacing-between">
        <div className='flex-spacing-between'>
          <h1 className="text-3xl font-bold mr-3">
            Online Code Editor
          </h1>
        </div>
        {/* Button Toolbar */}
        <div className='flex flex-row'>
          <button
            className='run-button btn bg-green-500 text-white mr-2
           disabled:bg-slate-300 disabled:text-black hover:bg-green-600'
            disabled={loading}
            onClick={runCode}
          >
            Run
          </button>
          <select
            className='form-select h-10 transition-colors
            text-white font-semibold cursor-pointer rounded-md mr-2
            bg-slate-700 hover:bg-slate-600'
            value={currentLang}
            onChange={(e) => {
              setCurrLang(e.target.value)
            }}
          >
            {languages.map((lang, i) => <option key={i} value={lang} >{lang}</option>)}
          </select>

          {currentLang === "Python" && (
            <PackageInstaller
              installPackage={installPythonPackage}
              installedPackages={installedPackages}
            />
          )}
          <AboutPage />
        </div>
      </div>
      {/* Main editor area */}
      <div className="code-container flex flex-row h-5/6">
        {/* Codemirror section */}
        <div className='mr-3 w-1/2 h-full flex flex-col rounded-md p-0'>
          <div className='codemirror-wrapper'>
            <CodeMirror
              value={code} onChange={value => { setCode(value) }}
              className="w-full h-full" height="100%"
              extensions={[
                langDict[currentLang](), autocompletion({
                  override:[...langAutocomplete[currentLang]]
                }),
              ]}
              theme={darkMode ? xcodeDark : xcodeLight} options={{ keyMap: "sublime" }}
            />
          </div>
          <div className='bottom-label'>
            Code
          </div>
        </div>
        {/* Output section */}
        <div className="output-block flex flex-col justify-between">
          <div className='overflow-auto p-3'>
            <pre id="codeOutput">
              {outText}
            </pre>
          </div>
          <div className='bottom-label'>
            Output
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
