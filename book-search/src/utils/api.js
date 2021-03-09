
const API = {
    getBooks:async() => {
        const result = await fetch('/api/books')
        const response = await result.json()

        return response
    }
}

export default API;