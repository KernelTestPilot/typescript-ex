export type FetchMethod = "GET" | "POST";

export default async function fetchHelper(url: string, method: FetchMethod, body?: object): Promise<Response> {
    const baseURL: string = "http://localhost:3001";
    const headers: HeadersInit = {"Content-Type": "application/json"};
    
    const fetchOptions: RequestInit = {
        headers,  
        method
    };

    if(method !== "GET") {
        fetchOptions.body = JSON.stringify(body);
    }

    return fetch(baseURL + url, fetchOptions);
}