export const fetchProducts = (handleFetch: any, handleError: any) => {
    
    const API : string | undefined = process.env.REACT_APP_API_URL
    const KEY: string | undefined =process.env.REACT_APP_API_KEY
    fetch((`${API}`),{
        method:'GET',
        headers: {
            'X-API-KEY': `${KEY}`,
            'Content-type':'application/json'
        }
    })
    .then(response => response.json())
    .then(handleFetch)
    .catch(handleError)
}