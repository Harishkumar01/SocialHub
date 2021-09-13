export const repoinfo = (id) => {
    return fetch(`https://api.github.com/users/${id}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

export const reposinfo = (id) => {
    return fetch(`https://api.github.com/users/${id}/repos`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}