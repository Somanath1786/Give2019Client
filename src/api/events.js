const { REACT_APP_API_DOMAIN } = process.env
const BASE_URL = REACT_APP_API_DOMAIN

export const getEvents = async (queryParams) => {
    console.log(BASE_URL)
    var url
    if(queryParams === undefined)
    {
        url = BASE_URL
    }
    else
    {
        url = `${BASE_URL}?${queryParams}`
    }

    console.log(queryParams, url)

    const response = await fetch(url , {
        headers : {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })

    const json = await response.json()
    return json
}