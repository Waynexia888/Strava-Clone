import * as KudoUitl from '../util/kudo_api_util'

export const RECEIVE_KUDO = "RECEIVE_KUDO"
export const RECEIVE_ALL_KUDOS = "RECEIVE_ALL_KUDOS"
export const REMOVE_KUDO = "REMOVE_KUDO"

const receiveKudo = (kudo) => ({
    type: RECEIVE_KUDO,
    kudo
})

const receiveAllKudos = (kudos) => ({
    type: RECEIVE_ALL_KUDOS,
    kudos
})

const removeKudo = (kudoId) => {
    return ({
        type: REMOVE_KUDO,
        kudoId
    })
}

export const fetchKudo = (kudoId) => dispatch =>
    KudoUitl.fetchKudo(kudoId).then((kudo) => dispatch(receiveKudo(kudo)))

export const createKudo = (kudo) => dispatch =>
    KudoUitl.createKudo(kudo).then((kudo) => dispatch(receiveKudo(kudo)))
    .fail(kudo =>
        dispatch(removeKudo(kudo.responseJSON[0])))

export const fetchAllKudos = (id) => dispatch =>
    KudoUitl.fetchAllKudos(id).then((kudos) => dispatch(receiveAllKudos(kudos)))
