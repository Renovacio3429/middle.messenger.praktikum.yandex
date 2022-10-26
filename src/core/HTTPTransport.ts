import {queryStringify} from "../utils/queryStringify";

type Options = {
    method?: string;
    data?: any;
    headers?: Record<string, string>;
    timeout?: number;
};

enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export default class HTTPTransport {
    get = (url: string, options: Options = {}) => {
        const resultUrl = !options.data ? `${url}${queryStringify(options.data)}` : url;

        return this.request(resultUrl, { ...options, method: Methods.GET }, options.timeout);
    };

    post = (url: string, options: Options = {}) => {
        return this.request(url, { ...options, method: Methods.POST }, options.timeout);
    };

    put = (url: string, options: Options = {}) => {
        return this.request(url, { ...options, method: Methods.PUT }, options.timeout);
    };

    delete = (url: string, options: Options = {}) => {
        return this.request(url, { ...options, method: Methods.DELETE }, options.timeout);
    };

    request = (url: string, options: Options = {}, timeout = 3000): Promise<XMLHttpRequest> => {
        const { headers = {}, method, data } = options;

        return new Promise(function (resolve, reject) {
            if (!method) {
                reject("No method");
                return;
            }

            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            xhr.timeout = timeout;

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = () => {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === Methods.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}