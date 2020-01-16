export const createLocation = (location) => (
    $.ajax({
        url: "api/locations",
        method: "POST",
        data: { location },
    })
);

export const deleteLocation = (locationId) => (
    $.ajax({
        url: `api/locations/${locationId}`,
        method: "DELETE",
    })
);