import styles from '../styles/Modal.module.css'

function Modal({isOpen, onClose, children}){
    if(!isOpen) return null 

    return (
        <div className={styles.Modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    )
}

export default Modal
