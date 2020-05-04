

export const fetchKudo = (kudoId) => (
    $.ajax({
        url: `/api/kudos/${kudoId}`,
        method: "GET"
    })
)

export const fetchAllKudos = (activityId) => (
    $.ajax({
        url: `api/activities/${activityId}/kudos`,
        method: "GET"
    })
)

export const createKudo = (kudo) => (
    $.ajax({
        url: `/api/kudos`,
        method: "post",
        data: { kudo }
    })
)
