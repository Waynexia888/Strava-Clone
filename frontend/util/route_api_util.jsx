export const fetchRoutes = () => (
    $.ajax({
        method: 'GET',
        url: '/api/routes',
    })
)

export const fetchRoute = id => (
    $.ajax({
        method: 'GET',
        url: `/api/routes/${id}`
    })
)

export const createRoute = route => (
    $.ajax({
        method: 'POST',
        url: '/api/routes',
        data: { route }
    })
);


export const deleteRoute = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/routes/${id}`,
    })
)


