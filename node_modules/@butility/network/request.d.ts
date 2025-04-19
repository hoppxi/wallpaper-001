
/**
 * A namespace that contains various utility functions for making HTTP requests.
 * These functions support common HTTP methods (GET, POST, PUT, PATCH, DELETE) and customizable AJAX options.
 *
 * @namespace Request
 */
declare namespace Request {
    export { ajax };
    export { get };
    export { patch };
    export { post };
    export { put };
    export { deleteRequest };
}

/**
 * Interface representing the options for making an AJAX request.
 */
interface AjaxOptions {
    /**
     * The HTTP method for the request (e.g., "GET", "POST", "PUT", etc.).
     */
    method: string;

    /**
     * The URL to which the request is sent.
     */
    url: string;

    /**
     * Optional headers to be sent with the request.
     * Each header is a key-value pair, where the key is the header name and the value is the header value.
     */
    headers?: Record<string, string>;

    /**
     * Optional data to be sent with the request.
     * Can be a string, FormData, or an object. 
     * In case of a GET request, it is ignored. 
     * For other methods, it represents the body of the request.
     */
    data?: string | FormData | object | null;

    /**
     * Optional callback function invoked on a successful response.
     * @param response - The response data from the server.
     */
    success?: (response: any) => void;

    /**
     * Optional callback function invoked if the request fails.
     * @param error - The error message or object describing the failure.
     */
    error?: (error: string | Error) => void;

    /**
     * Optional timeout in milliseconds for the request.
     * If the request takes longer than this, it will be aborted.
     */
    timeout?: number;

    /**
     * Optional number of times the request should be retried if it fails.
     */
    retries?: number;

    /**
     * Optional delay in milliseconds between retries.
     */
    retryDelay?: number;

    /**
     * Optional type of data expected from the server as a response.
     * This can be one of "text", "json", "blob", "document", or "arraybuffer".
     */
    responseType?: XMLHttpRequestResponseType;

    /**
     * Optional callback function invoked to track progress of the request.
     * @param loaded - The number of bytes loaded so far.
     * @param total - The total number of bytes to be loaded.
     */
    onProgress?: (loaded: number, total: number) => void;

    /**
     * Optional signal object that can be used to abort the request.
     * This can be used with the Fetch API for aborting requests.
     */
    abortSignal?: AbortSignal;

    /**
     * Optional flag to indicate whether the request should use the Fetch API instead of XMLHttpRequest.
     * Default is `false` (uses XMLHttpRequest).
     */
    useFetch?: boolean;
}

/**
 * Makes an AJAX request based on the specified options.
 *
 * @param options - The configuration options for the request.
 * @returns A promise if `useFetch` is `true`, otherwise `void`.
 */
export function ajax(options: AjaxOptions): void | Promise<void>;

/**
 * Sends an HTTP DELETE request to the specified URL.
 *
 * @param url - The URL to send the request to.
 * @param data - Optional data to send with the request as the request body.
 * @param options - Optional additional AJAX options (partially overriding defaults).
 * @returns A promise if `useFetch` is `true`, otherwise `void`.
 */
export function deleteRequest(url: string, data?: object, options?: Partial<AjaxOptions>): void | Promise<void>;

/**
 * Sends an HTTP GET request to the specified URL.
 *
 * @param url - The URL to send the request to.
 * @param data - Optional query parameters to append to the URL.
 * @param options - Optional additional AJAX options (partially overriding defaults).
 * @returns A promise if `useFetch` is `true`, otherwise `void`.
 */
export function get(url: string, data?: object, options?: Partial<AjaxOptions>): void | Promise<void>;

/**
 * Sends an HTTP PATCH request to the specified URL.
 *
 * @param url - The URL to send the request to.
 * @param data - The data to send as the request body.
 * @param options - Optional additional AJAX options (partially overriding defaults).
 * @returns A promise if `useFetch` is `true`, otherwise `void`.
 */
export function patch(url: string, data: object, options?: Partial<AjaxOptions>): void | Promise<void>;

/**
 * Sends an HTTP POST request to the specified URL.
 *
 * @param url - The URL to send the request to.
 * @param data - The data to send as the request body.
 * @param options - Optional additional AJAX options (partially overriding defaults).
 * @returns A promise if `useFetch` is `true`, otherwise `void`.
 */
export function post(url: string, data: object, options?: Partial<AjaxOptions>): void | Promise<void>;

/**
 * Sends an HTTP PUT request to the specified URL.
 *
 * @param url - The URL to send the request to.
 * @param data - The data to send as the request body.
 * @param options - Optional additional AJAX options (partially overriding defaults).
 * @returns A promise if `useFetch` is `true`, otherwise `void`.
 */
export function put(url: string, data: object, options?: Partial<AjaxOptions>): void | Promise<void>;

export { Request as default };
