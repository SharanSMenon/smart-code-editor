import { useState } from 'react';
import Modal from 'react-modal';
import { allPythonPackages } from './constants';

const PackageInstaller = ({ installPackage, installedPackages }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => { setIsOpen(true) }}
                className="package-install-button 
            h-10 px-6 font-semibold rounded-md bg-zinc-600 text-white mr-2
           disabled:bg-slate-300 disabled:text-black hover:bg-slate-800">
                Packages
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setIsOpen(false) }}
                contentLabel="About"
                ariaHideApp={false}
            >
                <div className="modal-container flex flex-col justify-between h-full">
                    <div>
                        <div className="modal-header flex flex-row justify-between mb-2">
                            <h2 className="text-3xl font-bold">Install Python Packages</h2>
                            <button onClick={() => { setIsOpen(false) }}>&#x2715;</button>
                        </div>
                        <div className="body">
                            <p>Install Python packages to use in your Python programs.</p>
                            {
                                allPythonPackages.map((p, index) => (
                                    <div key={index}>
                                        <div className='flex flex-row justify-between items-center p-2'>
                                            <p>{p}</p>
                                            <button
                                                className={`install-button h-10 px-6 font-semibold rounded-md 
                                                border ${installedPackages.includes(p) && "bg-green-600 text-white"}
                                                ${!installedPackages.includes(p) ? "border-slate-200" : "border-green-600"}
                                                ${!installedPackages.includes(p) && "hover:bg-slate-200"}`}
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
                        <p className="text-sm text-slate-600">Created by Sharan Sajiv Menon</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default PackageInstaller;