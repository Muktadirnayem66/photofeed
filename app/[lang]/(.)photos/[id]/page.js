import Modal from '@/components/Modal';
import PageDetails from '@/components/PageDetails';
import React from 'react';

const InterCeptingPhoto = ({params: {id, lang}}) => {
    return (
        <Modal>
            <PageDetails id={id} lang={lang}/>
        </Modal>
    );
};

export default InterCeptingPhoto;