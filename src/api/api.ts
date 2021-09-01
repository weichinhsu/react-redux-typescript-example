import axios, { AxiosResponse } from 'axios'

// opendata
const API_URL = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=4'

const fakeUser = [{
    name: 'weichin'
},{
    name: 'john'
},{
    name: 'carolyn'
}]

const fetchUser = async () => {
    return new Promise<{ data: Array<User> }>((resolve) =>
        setTimeout(() => resolve({ data: fakeUser }), 500)
    );
}

// Http get example
const fetchCulture = async (): Promise<AxiosResponse> => {
    try {
        const culture = await axios.get(API_URL)
        return culture.data
    } catch (error) {
        console.error(`GET opendata Culture ERROR: ${error}`)
        throw new Error(error)
    }
}

export { fetchCulture, fetchUser }