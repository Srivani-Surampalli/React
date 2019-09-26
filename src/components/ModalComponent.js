import React from 'react';

 const ModalComponent = (props) => {
    return (
        <main>
        <h1>React Modal</h1>
        <Modal handleClose={props.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={props.showModal}>
          open
        </button>
        </main>
    );
}
export default ModalComponent;