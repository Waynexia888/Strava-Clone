export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_SAVE = 'OPEN_MODAL_SAVE';
export const CLOSE_MODAL_SAVE = 'CLOSE_MODAL_SAVE';
export const OPEN_MODAL_ACT = 'OPEN_MODAL_ACT';
export const CLOSE_MODAL_ACT = 'CLOSE_MODAL_ACT';



export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};
export const openModalSave = (modal, dataString) => {
    return {
        type: OPEN_MODAL_SAVE,
        modal,
        dataString
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const closeModalSave = () => {
    return {
        type: CLOSE_MODAL_SAVE
    };
};
export const openModalAct = (modal, dataString, routeId) => {
    return {
        type: OPEN_MODAL_ACT,
        modal,
        dataString,
        routeId
    };
};
export const closeModalAct = () => {
    return {
        type: CLOSE_MODAL_ACT

    };
};
