import './App.css';
const ModalContent = ({ setIsOpen }) => (
    <div className="modal-container flex flex-col justify-between h-full">
        <div>
            <div className="modal-header flex-spacing-between mb-2">
                <h2 className="text-3xl font-bold">About</h2>
                <button onClick={() => { setIsOpen(false) }}>&#x2715;</button>
            </div>
            <div className="body">
                <p>This is an online code editor that runs in the browser. 
                    Because of new technologies like WebAssembly, 
                    we can compile and run languages like C, 
                    C++, and Python in the browser. Programs no longer 
                    have to be sent to a server. They will execute right here, 
                    in the browser, with native performance. Loading 
                    times are way faster, as it does not have to establish 
                    a connection to a server and it doesn't have to wait 
                    for the server to set up a containerized environment 
                    to execute code.
                </p>
                <br></br>
                <p>Python support is provided by Pyodide, 
                    a port of the CPython compiler to WebAssembly. 
                    Pyiodide even allows you to load 
                    Python packages like Numpy and Scipy, 
                    allowing you to do a large variety of tasks 
                    in the browser. Graphical output is not supported. 
                </p>
                <p>C/C++ support is provided by a 
                    version of Clang/LLVM ported to 
                    WebAssembly. Not all libraries in the C/C++ 
                    standard library work. Also, there is currently no way to
                    import new packages.
                </p>
                <br></br>
                <p>Source code is <a className="underline" href="https://github.com/SharanSMenon/smart-code-editor">here.</a></p>
            </div>
        </div>
        <div className="footer">
            <p>Created by Sharan Sajiv Menon</p>
        </div>
    </div>
)

export default ModalContent;