
/**
 * Main entry to import all methods
 * @namespace Network
 */
declare namespace Network {
    export { isPrivateIP };
    export { isValidIPv4 };
    export { isValidIPv6 };
    export { isValidSubnetMask };
    export { calculateNetworkAddress };
    export { convertIPv4ToIPv6 };
    export { convertIPv6ToIPv4 };
    export { generateRandomIPv4 };
    export { generateRandomIPv6 };
    export { getIPVersion };
    export { getLocationByIP };
    export { getUserIPAddress };
    export { extractFromCIDR };
    export { areIPsInSameNetwork };
    export { normalizeIPv6 };
    export { ajax };
    export { get };
    export { patch };
    export { post };
    export { put };
    export { deleteRequest };
    export { handleBackgroundSync };
    export { handleCachingStrategy };
    export { showPushNotification };
    export { registerServiceWorker };
    export { sendMessageToSW };
    export { constructURL };
    export { parseQueryStringParameters };
    export { removeQueryStringParameter };
    export { replaceQueryStringParameter };
    export { extractFragment };
    export { mergeURL };
    export { normalizeURL };
}

/**
 * A namespace for various IP-related utilities and functions.
 * Contains methods for validating, converting, generating, and analyzing IP addresses (IPv4 and IPv6),
 * as well as working with subnets and network masks.
 *
 * @namespace IP
 */
declare namespace IP {
    export { isPrivateIP };
    export { isValidIPv4 };
    export { isValidIPv6 };
    export { isValidSubnetMask };
    export { calculateNetworkAddress };
    export { convertIPv4ToIPv6 };
    export { convertIPv6ToIPv4 };
    export { generateRandomIPv4 };
    export { generateRandomIPv6 };
    export { getIPVersion };
    export { getLocationByIP };
    export { getUserIPAddress };
    export { extractFromCIDR };
    export { areIPsInSameNetwork };
    export { normalizeIPv6 };
}

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
 * A namespace containing utility functions and types for handling service workers, caching strategies, 
 * background sync, and push notifications.
 *
 * @namespace SW
 */
declare namespace SW {
    export { handleBackgroundSync };
    export { handleCachingStrategy };
    export { showPushNotification };
    export { sendMessageToSW };
    export { registerServiceWorker };
}

/**
 * A namespace containing utility functions and types for handling URLs, constructing URL, 
 * parsing, removing, replacing query strings, and normalize and megre URLs, also extracting fragment
 *
 * @namespace URL
 */
declare namespace URL {
    export { constructURL };
    export { parseQueryStringParameters };
    export { removeQueryStringParameter };
    export { replaceQueryStringParameter };
    export { extractFragment };
    export { mergeURL };
    export { normalizeURL };
}

/**
 * Callback type used when the service worker detects a new version of the cache.
 *
 * @callback CacheUpdateCallback
 * @param oldVersion - The previous version of the cache.
 * @param newVersion - The new version of the cache.
 */
type CacheUpdateCallback = (
    oldVersion: string,
    newVersion: string,
) => void;

/**
 * Options for registering a service worker.
 *
 * @interface SWRegisterOptions
 */
interface SWRegisterOptions {
    /**
     * The scope in which the service worker will operate.
     * If not provided, the service worker will operate in the entire origin.
     */
    scope?: string;

    /**
     * Defines how the cache will be updated.
     * - "imports": Only updates cache for resources imported by the service worker.
     * - "all": Updates cache for all resources.
     * - "none": Disables cache updates.
     */
    updateViaCache?: 'imports' | 'all' | 'none';

    /**
     * Optional callback that is triggered when a new cache version is detected.
     * @param oldVersion - The old cache version.
     * @param newVersion - The new cache version.
     */
    onUpdateFound?: CacheUpdateCallback;
}

/**
 * Options for controlling caching strategies.
 *
 * @interface CachingOptions
 */
interface CachingOptions {
    /**
     * The name of the cache to use.
     */
    cacheName: string;

    /**
     * If `true`, the strategy will prioritize cache over network requests (cache-first strategy).
     * Default is `false` (network-first strategy).
     */
    cacheFirst?: boolean;

    /**
     * The time in seconds to wait before falling back to the cache when a network request times out.
     * This is only applicable for network-first strategies.
     */
    networkTimeoutSeconds?: number;
}

/**
 * Options for configuring background sync.
 *
 * @interface BackgroundSyncOptions
 */
interface BackgroundSyncOptions {
    /**
     * The tag used to uniquely identify the background sync task.
     */
    tag: string;

    /**
     * The retry interval in seconds for failed requests.
     * Default is no retry delay.
     */
    retryDelay?: number;

    /**
     * The maximum number of retry attempts for failed requests.
     */
    maxRetry?: number;
}

/**
 * Represents an event triggered when a notification action occurs.
 *
 * @interface NotificationEvent
 */
interface NotificationEvent {
    /**
     * The action that was triggered by the notification.
     */
    readonly action: string;

    /**
     * The notification that triggered the event.
     */
    readonly notification: Notification;

    /**
     * Allows the event to continue running until the provided promise resolves.
     * Useful for ensuring asynchronous operations complete during the event.
     *
     * @param f - A promise that will extend the event until it resolves.
     */
    waitUntil(f: Promise<any>): void;
}

/**
 * Options for displaying push notifications.
 *
 * @interface PushNotificationOptions
 */
interface PushNotificationOptions {
    /**
     * The title of the notification.
     */
    title: string;

    /**
     * The body text of the notification.
     */
    body: string;

    /**
     * An optional icon URL for the notification.
     */
    icon?: string;

    /**
     * Optional callback triggered when the notification is clicked.
     * @param event - The event object associated with the notification click.
     */
    onNotificationClick?: (event: NotificationEvent) => void;
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
 * Checks if two IP addresses are in the same network based on a subnet mask.
 * @param ip1 - The first IP address.
 * @param ip2 - The second IP address.
 * @param mask - The subnet mask.
 * @returns `true` if the IPs are in the same network, otherwise `false`.
 */
export function areIPsInSameNetwork(ip1: string, ip2: string, mask: string): boolean;

/**
 * Calculates the network address based on an IP address and subnet mask.
 * @param ip - The IP address.
 * @param mask - The subnet mask.
 * @returns The network address, or `null` if invalid.
 */
export function calculateNetworkAddress(ip: string, mask: string): string | null;

/**
 * Converts an IPv4 address to its equivalent IPv6 address.
 * @param ip - The IPv4 address to convert.
 * @returns The corresponding IPv6 address, or `null` if conversion fails.
 */
export function convertIPv4ToIPv6(ip: string): string | null;

/**
 * Converts an IPv6 address to its equivalent IPv4 address.
 * @param ip - The IPv6 address to convert.
 * @returns The corresponding IPv4 address, or `null` if conversion fails.
 */
export function convertIPv6ToIPv4(ip: string): string | null;

/**
 * Extracts the IP address and subnet mask from a CIDR notation string.
 * @param cidr - The CIDR string.
 * @returns An object containing the IP address and subnet mask.
 */
export function extractFromCIDR(cidr: string): { ip: string; mask: string; };

/**
 * Generates a random valid IPv4 address.
 * @returns A random IPv4 address.
 */
export function generateRandomIPv4(): string;

/**
 * Generates a random valid IPv6 address.
 * @returns A random IPv6 address.
 */
export function generateRandomIPv6(): string;

/**
 * Determines the IP version (IPv4 or IPv6) of a given IP address.
 * @param ip - The IP address to check.
 * @returns `4` if it's an IPv4 address, `6` if it's an IPv6 address.
 */
export function getIPVersion(ip: string): 4 | 6;

/**
 * Retrieves the geographical location of an IP address.
 * @param ip - The IP address to look up.
 * @param callback - A function that receives the location data.
 */
export function getLocationByIP(ip: string, callback: Function): void;

/**
 * Retrieves the user's current IP address.
 * @param callback - A function that receives the user's IP address.
 */
export function getUserIPAddress(callback: Function): void;

/**
 * Checks if the given IP address is a private IP.
 * @param ip - The IP address to check.
 * @returns `true` if the IP is private, otherwise `false`.
 */
export function isPrivateIP(ip: string): boolean;

/**
 * Checks if the given IP address is a valid IPv4 address.
 * @param ip - The IPv4 address to check.
 * @returns `true` if the IPv4 address is valid, otherwise `false`.
 */
export function isValidIPv4(ip: string): boolean;

/**
 * Checks if the given IP address is a valid IPv6 address.
 * @param ip - The IPv6 address to check.
 * @returns `true` if the IPv6 address is valid, otherwise `false`.
 */
export function isValidIPv6(ip: string): boolean;

/**
 * Validates a given subnet mask.
 * @param mask - The subnet mask to validate.
 * @returns `true` if the subnet mask is valid, otherwise `false`.
 */
export function isValidSubnetMask(mask: string): boolean;

/**
 * Normalizes an IPv6 address by compressing leading zeros.
 * @param ip - The IPv6 address to normalize.
 * @returns The normalized IPv6 address.
 */
export function normalizeIPv6(ip: string): string;


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


/**
 * Handles background sync for failed network requests.
 *
 * @param url - The URL of the request to sync.
 * @param options - The configuration options for background sync.
 * @returns A promise that resolves when the sync is complete.
 */
export function handleBackgroundSync(url: string, options: BackgroundSyncOptions): Promise<void>;

/**
 * Handles caching strategies for a given request.
 *
 * @param request - The network request object.
 * @param options - The caching strategy options.
 * @returns A promise that resolves to a cached or network response.
 */
export function handleCachingStrategy(request: Request, options: CachingOptions): Promise<Response>;

/**
 * Registers a service worker with the given path and options.
 *
 * @param swPath - The path to the service worker file.
 * @param options - The registration options, including scope and cache update strategy.
 * @returns A promise that resolves to the ServiceWorkerRegistration object, or `undefined` if registration fails.
 */
export function registerServiceWorker(swPath: string, options: SWRegisterOptions): Promise<ServiceWorkerRegistration | undefined>;

/**
 * Sends a message to the active service worker.
 *
 * @param message - The message to send to the service worker.
 * @returns A promise that resolves when the message is successfully sent.
 */
export function sendMessageToSW(message: string): Promise<void>;

/**
 * Displays a push notification through the service worker registration.
 *
 * @param registration - The service worker registration to use for displaying the notification.
 * @param options - The options for the notification, including title, body, and optional click handler.
 */
export function showPushNotification(registration: ServiceWorkerRegistration, options: PushNotificationOptions): void;

/**
 * Constructs a full URL by combining the base URL, an optional path, and query parameters.
 *
 * @param base - The base URL to start with.
 * @param path - An optional path to append to the base URL.
 * @param queryParams - An optional object representing query parameters to add to the URL.
 * @returns A fully constructed URL as a string.
 */
export function constructURL(base: string, path?: string, queryParams?: object): string;

/**
 * Extracts the fragment (the part after the `#`) from the given URL.
 *
 * @param url - The URL from which to extract the fragment.
 * @returns The fragment of the URL as a string. If no fragment is found, an empty string is returned.
 */
export function extractFragment(url: string): string;

/**
 * Merges a base URL and a relative URL to form a complete URL.
 *
 * @param baseURL - The base URL.
 * @param relativeURL - The relative URL to merge with the base.
 * @returns A fully merged URL as a string.
 */
export function mergeURL(baseURL: string, relativeURL: string): string;

/**
 * Normalizes a given URL by removing redundant components such as extra slashes or dots.
 *
 * @param url - The URL to normalize.
 * @returns A normalized version of the URL. The return type is flexible depending on the specific implementation of normalization.
 */
export function normalizeURL(url: string): any;

/**
 * Parses the query string of a URL into an object.
 *
 * @param queryString - The query string to parse (the part after `?` in a URL).
 * @param decode - Optional flag to specify whether the parameters should be decoded. Default is `false`.
 * @returns An object where the keys are query parameter names and the values are the corresponding parameter values.
 */
export function parseQueryStringParameters(queryString: string, decode?: boolean): object;

/**
 * Removes a specified query parameter from the URL.
 *
 * @param url - The URL from which to remove the query parameter.
 * @param key - The name of the query parameter to remove.
 * @returns The modified URL as a string, with the specified query parameter removed.
 */
export function removeQueryStringParameter(url: string, key: string): string;

/**
 * Replaces or adds a query parameter in the URL.
 *
 * @param url - The URL in which to replace or add the query parameter.
 * @param key - The name of the query parameter to replace.
 * @param value - The new value for the query parameter.
 * @param encode - Optional flag to specify whether the parameter value should be URL-encoded. Default is `false`.
 * @returns The modified URL with the query parameter replaced or added.
 */
export function replaceQueryStringParameter(url: string, key: string, value: string, encode?: boolean): string;

export { IP, Request, SW, URL, Network as default };
