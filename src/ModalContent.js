const ModalContent = ({setIsOpen}) => (
    <div className="modal-container flex flex-col justify-between h-full">
        <div>
            <div className="modal-header flex flex-row justify-between mb-2">
                <h2 className="text-3xl font-bold">About</h2>
                <button onClick={() => { setIsOpen(false) }}>&#x2715;</button>
            </div>
            <div className="body">
                <p>An online code editor that runs completely in the browser. Currently only Python and C++ are supported.
                </p>
                <p>Python support is provided by Pyodide, a port of the CPython compiler to WebAssembly.</p>
                <p>C++ support is provided by a version of Clang/LLVM ported to webassembly.</p>
            </div>
        </div>
        <div className="footer">
            <p className="text-sm text-slate-600">Created by Sharan Sajiv Menon</p>
        </div>
    </div>
)

export default ModalContent;