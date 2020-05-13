export const fetchActivity = id => {
    return (
        $.ajax({
            method: "GET",
            url: `api/activities/${id}`
        })
    );
};

export const fetchActivities = (page) => {
    return (
        $.ajax({
            method: "GET",
            url: `api/pages/${page}/activities`,
            data: {page}
        })
    );
};

///////////not sure
export const fetchUserActivities = () => (
    $.ajax({
        url: `api//activities/`,
        method: 'GET',
    })
)
/////////////////
export const deleteActivity = id => {
    return (
        $.ajax({
            method: "DELETE",
            url: `api/activities/${id}`
        })
    );
};

export const createActivity = activity => {
    return (
        $.ajax({
            method: "POST",
            url: `api/activities`,
            data: { activity }
        })
    );
};


export const updateActivity = activity => {
    return (
        $.ajax({
            method: "PATCH",
            url: `api/activities/${activity.id}`,
            data: { activity }
        })
    )
}