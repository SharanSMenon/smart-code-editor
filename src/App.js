/**
 * App.js
 * Created by Sharan Sajiv Menon
 * 
 * TOOD: File is slightly bloated and I have unused packages, remove them.
 */

import './App.css';
import { useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
import Modal from 'react-modal';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp'
import { startcode, languages } from './constants';
import ModalContent from './ModalContent';
import { API } from './cSupport/utils';
import { getApiOptions } from './cSupport/cSupport';
import PackageInstaller from './PackageInstaller';

const langDict = {
  "Python": python,
  "C++": cpp,
  "C": cpp
}

let buffer = "";

function App() {
  const pyodide = useRef(null);
  const cppApi = useRef(null);
  const [installedPackages, setInstalledPackages] = useState([])
  const [currentLang, setCurrLang] = useState(languages[0]);
  const [outText, setOutText] = useState("");
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState(`print("Hello World")`)
  const [modalIsOpen, setIsOpen] = useState(false);


  const cppOutputFunc = (nText) => {
    buffer += nText
  }

  const installPythonPackage = (packageName) => {
    pyodide.current.loadPackage(packageName);
    setInstalledPackages([...installedPackages, packageName])
  }

  const apiOptions = getApiOptions(cppOutputFunc);

  useEffect(() => {
    ; (async function () {
      pyodide.current = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.20.0/full/'
      })
      pyodide.current.runPython(startcode);
      cppApi.current = new API(apiOptions);
      await cppApi.current.compileLinkRun("int main() {}");
      setLoading(false);
    })()
  }, [pyodide, apiOptions])

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
    <div className="App h-screen p-5">
      <div className="header mb-4 flex flex-row justify-between">
        <div className='flex flex-row justify-between'>
          <h1 className="text-3xl font-bold mr-3">
            Online Code Editor
          </h1>
        </div>
        <div className='flex flex-row'>
          <button
            className='run-button h-10 px-6 font-semibold rounded-md bg-black text-white mr-2
           disabled:bg-slate-300 disabled:text-black hover:bg-slate-800'
            disabled={loading}
            onClick={runCode}
          >
            Run
          </button>
          <select
            className='form-select h-10 center
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

          <button
            className='about-button h-10 px-6 font-semibold rounded-md 
            border border-slate-200 hover:bg-slate-200'
            onClick={() => { setIsOpen(true) }}
          >
            About
          </button>
        </div>
      </div>
      <div className="code-container flex flex-row h-5/6">
        <CodeMirror
          value={code}
          onChange={value => { setCode(value) }}
          className="w-1/2 mr-4"
          height='100%'
          options={{
            theme: "monokai",
            keyMap: "sublime",
          }}
          extensions={[
            langDict[currentLang]()
          ]}
        />
        <div className="output border overflow-auto border-black w-1/2 p-3 rounded-md break-words">
          <pre className='break-words w-full inline-block' id="codeOutput">
            {outText}
          </pre>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => { setIsOpen(false) }}
        contentLabel="About"
        ariaHideApp={false}
      >
        <ModalContent setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
}

export default App;
