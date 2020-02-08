export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, dataString) => {
    return {
        type: OPEN_MODAL,
        modal,
        dataString
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};