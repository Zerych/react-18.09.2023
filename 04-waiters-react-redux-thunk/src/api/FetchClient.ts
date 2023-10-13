export class FetchClient<T> {
    url: string

    constructor(url: string) {
        this.url = url
    }

    request(path = '', method = 'GET', data?: T): Promise<any> {
        return fetch(`${this.url}${path}`, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }

            throw new Error(response.statusText)
        })
    }

    getList(): Promise<T[]> {
        return this
            .request()
            .catch((e) => Promise.reject(Error(`Can't fetch list from server: ${e.message}`)))
    }

    create(data: T): Promise<T> {
        return this
            .request('', 'POST', data)
            .catch((e) => Promise.reject(Error(`Can't create new item on server: ${e.message}`)))
    }

    update(id: number, data: T): Promise<T> {
        return this
            .request(String(id), 'PUT', data)
            .catch((e) => Promise.reject(Error(`Can't update item on server: ${e.message}`)))
    }

    delete(id: number): Promise<void> {
        return this
            .request(String(id), 'DELETE')
            .catch((e) => Promise.reject(Error(`Can't delete item on server: ${e.message}`)))
    }
}