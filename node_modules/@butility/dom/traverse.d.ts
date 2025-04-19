/**
 * Namespace providing various utilities for traversing and selecting DOM elements.
 * Contains methods to find elements, navigate siblings, parents, children, and more.
 *
 * @namespace Traverse
 */
declare namespace Traverse {
    export { findAll };
    export { getChildren };
    export { getClosest };
    export { getNextSibling };
    export { getParent };
    export { getPreviousSibling };
    export { selectElem };
}

/**
 * Options for selecting elements using specific attributes, classes, tags, and more.
 *
 * @template T - The type of element being selected (extends `HTMLElement`).
 */
interface SelectionOptions<T> {
    /** The attribute to use for filtering elements. */
    attribute?: keyof T;
    /** The value of the specified attribute to match. */
    value?: string;
    /** The class name to filter elements by. */
    className?: string;
    /** The tag name to filter elements by. */
    tagName?: keyof HTMLElementTagNameMap;
    /** A record of custom attributes and their values to filter by. */
    customAttributes?: Record<string, string>;
    /** A record of data attributes and their values to filter by. */
    dataAttributes?: Record<string, string>;
    /** The inner text content to match. */
    innerText?: string;
    /** The inner HTML content to match. */
    innerHTML?: string;
    /** A function to determine if the element has a child matching a given selector. */
    hasChild?: (childSelector: string) => boolean;
    /** A custom filter function to further filter elements. */
    filterCallback?: (element: T) => boolean;
    /** Whether to return multiple elements or a single one. */
    multiple?: boolean;
    /** The order to return the elements in, either ascending or descending. */
    orderBy?: 'asc' | 'desc';
    /** The maximum number of elements to return. */
    limit?: number;
}

/**
 * Options for finding the parent of an element.
 */
interface ParentOptions {
    /** Whether to include the document node in the search for a parent. */
    includeDocument?: boolean;
}

/**
 * Options for filtering child elements.
 */
interface ChildrenOptions {
    /** A filter function to apply to child elements. */
    filter?: (element: HTMLElement) => boolean;
}

/**
 * Options for finding sibling elements.
 */
interface SiblingOptions {
    /** Whether to skip hidden elements when finding siblings. */
    skipHidden?: boolean;
}

/**
 * Options for finding the closest matching ancestor of an element.
 */
interface ClosestOptions {
    /** The element at which to stop searching for ancestors. */
    stopAt?: HTMLElement;
}

/**
 * Options for finding all matching elements.
 */
interface FindAllOptions {
    /** Whether to return unique elements only. */
    unique?: boolean;
    /** The maximum number of elements to return. */
    limit?: number;
}

/**
 * Finds all elements matching the given selector within the provided element's subtree.
 *
 * @template T - The type of element being searched (extends `HTMLElement`).
 * @param element - The root element to start the search from.
 * @param selector - The CSS selector to match elements.
 * @param options - Optional configuration for filtering and limiting the results.
 * @returns An array of elements matching the selector.
 */
export function findAll<T extends HTMLElement>(element: T, selector: string, options?: FindAllOptions): T[];

/**
 * Retrieves all child elements of the provided element, optionally filtering the results.
 *
 * @template T - The type of element being searched (extends `HTMLElement`).
 * @param element - The element whose children are being retrieved.
 * @param options - Optional configuration for filtering the child elements.
 * @returns An array of child elements.
 */
export function getChildren<T extends HTMLElement>(element: T, options?: ChildrenOptions): T[];

/**
 * Finds the closest ancestor of the element that matches the given selector.
 *
 * @template T - The type of element being searched (extends `HTMLElement`).
 * @param element - The element whose ancestors are being searched.
 * @param selector - The CSS selector to match the ancestor.
 * @param options - Optional configuration for stopping the search.
 * @returns The closest matching ancestor element or `null` if none is found.
 */
export function getClosest<T extends HTMLElement>(element: T, selector: string, options?: ClosestOptions): T | null;

/**
 * Retrieves the next sibling of the provided element, optionally skipping hidden siblings.
 *
 * @template T - The type of element being searched (extends `HTMLElement`).
 * @param element - The element whose next sibling is being retrieved.
 * @param options - Optional configuration for skipping hidden siblings.
 * @returns The next sibling element or `null` if none is found.
 */
export function getNextSibling<T extends HTMLElement>(element: T, options?: SiblingOptions): T | null;

/**
 * Retrieves the parent of the provided element, optionally including the document node as a parent.
 *
 * @template T - The type of element being searched (extends `HTMLElement`).
 * @param element - The element whose parent is being retrieved.
 * @param options - Optional configuration for including the document node.
 * @returns The parent node or `null` if none is found.
 */
export function getParent<T extends HTMLElement>(element: T, options?: ParentOptions): ParentNode | null;

/**
 * Retrieves the previous sibling of the provided element, optionally skipping hidden siblings.
 *
 * @template T - The type of element being searched (extends `HTMLElement`).
 * @param element - The element whose previous sibling is being retrieved.
 * @param options - Optional configuration for skipping hidden siblings.
 * @returns The previous sibling element or `null` if none is found.
 */
export function getPreviousSibling<T extends HTMLElement>(element: T, options?: SiblingOptions): T | null;

/**
 * Selects an element or elements based on the provided CSS selector and additional filtering options.
 *
 * @template T - The type of element being selected (extends `HTMLElement`).
 * @param selector - The CSS selector to match elements.
 * @param options - Optional configuration for filtering and selecting the elements.
 * @returns A single element, an array of elements, or `null` if no match is found.
 */
export function selectElem<T extends HTMLElement>(selector: string, options?: SelectionOptions<T>): T[] | T | null;

export { Traverse as default };
