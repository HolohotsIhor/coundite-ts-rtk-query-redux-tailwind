import React, { FC, useEffect, useRef } from 'react'
import { IconClose } from '../../assets/svg/IconClose'
import './Modal.scss'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (modalRef.current) {
            if (isOpen) {
                const timer = setTimeout(() => {
                    modalRef.current?.classList.add('is-open');
                }, 200);
                return () => clearTimeout(timer);
            }
        }
    }, [isOpen]);

    return (
        <>
            { isOpen && (
                <div
                    ref={modalRef}
                    className='modal'>
                    <div className='modal__wrapper'>
                        <div className='modal__content'>
                            <button
                                onClick={onClose}
                                className='modal__button'>
                                <IconClose/>
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
