import { useEffect, useState } from 'react';
import './App.css';
import Modal from 'react-modal';
import { allPythonPackages, transitionMS } from './constants';

const PackageInstaller = ({ installPackage, installedPackages }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [filterList, setFilterList] = useState(allPythonPackages);
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        let newItems = allPythonPackages.filter(value => {
            return value.toLowerCase().includes(inputText.toLowerCase());
        })
        setFilterList(newItems)
    }, [inputText])

    return (
        <div>
            <button onClick={() => { setIsOpen(true) }}
                className="package-install-button 
            btn bg-fuchsia-700 text-white mr-2
           disabled:bg-slate-300 disabled:text-black hover:bg-fuchsia-800">
                Packages
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setIsOpen(false) }}
                contentLabel="About"
                className="smart-modal"
                ariaHideApp={false}
                closeTimeoutMS={transitionMS}
                overlayClassName="smart-modal-overlay"
            >
                <div className="modal-container flex flex-col 
                justify-between h-full">
                    <div>
                        <div className="modal-header flex-spacing-between mb-2">
                            <h2 className="text-3xl font-bold">Install Python Packages</h2>
                            <button onClick={() => { setIsOpen(false) }}>&#x2715;</button>
                        </div>
                        <div className="body">
                            <p>Install Python packages to use in your Python programs.</p>
                            <input value={inputText} onChange={(e) => {setInputText(e.target.value)}}
                            class="search-input" 
                            type="text" aria-label="Filter projects" 
                            placeholder="Filter packages..." />

                            {
                                filterList.map((p, index) => (
                                    <div key={index}>
                                        <div className='flex-spacing-between items-center p-2'>
                                            <p>{p}</p>
                                            <button
                                                className={`install-button btn
                                                border ${installedPackages.includes(p) && "bg-green-600 text-white"}
                                                ${!installedPackages.includes(p) ? "border-slate-transitionMS dark:border-white" : "border-green-600"}
                                                ${!installedPackages.includes(p) && "hover:bg-slate-transitionMS dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"}`}
                                                onClick={() => {
                                                    if (!installedPackages.includes(p)) { installPackage(p) }
                                                }}> {installedPackages.includes(p) ? "Installed" : "Install"}
                                            </button>
                                        </div>
                                        <hr></hr>
                                    </div>))
                            }
                        </div>
                    </div>
                    <div className="footer pt-5 pb-5">
                        <p>Created by Sharan Sajiv Menon</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default PackageInstaller;