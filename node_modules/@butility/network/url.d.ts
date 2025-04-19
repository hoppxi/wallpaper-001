
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

export { URL as default };
