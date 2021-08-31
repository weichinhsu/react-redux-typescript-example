import axios, { AxiosResponse } from 'axios'

const API_URL = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=4'

export function fetchPart(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: amount }), 500)
    );
}

const fetchCulture = async (): Promise<AxiosResponse<Culture[]>> => {
    try {
        const culture = await axios.get(API_URL)
        return culture.data
    } catch (error) {
        console.error(`GET opendata Culture ERROR: ${error}`)
        throw new Error(error)
    }
}

export { fetchCulture }