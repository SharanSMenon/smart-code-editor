/**
 * AboutPage.js
 * Created by Sharan Sajiv Menon
 */

import { useState } from 'react';
import Modal from 'react-modal';
import '../App.css'
import { transitionMS } from '../utils/constants';
import ModalContent from './ModalContent';

const AboutPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <button
                className='about-button btn
            bg-sky-500 text-white hover:bg-sky-600'
                onClick={() => { setModalIsOpen(true) }}
            >
                About
            </button>

            <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => { setModalIsOpen(false) }}
        contentLabel="About"
        overlayClassName="smart-modal-overlay"
        className="smart-modal"
        ariaHideApp={false}
        closeTimeoutMS={transitionMS}
      >
        <ModalContent setIsOpen={setModalIsOpen} />
      </Modal>
        </div>)
}

export default AboutPage;