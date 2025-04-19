/**
 * Namespace for managing and manipulating HTML elements.
 * 
 * @namespace Element
 */
declare namespace Element {
    export { create };
    export { getHTML };
    export { setHTML };
    export { setText };
}

/**
 * Options for creating an HTML element.
 */
interface CreateElementOptions {
    /**
     * List of class names to add to the element.
     */
    class?: string[];

    /**
     * Object representing attributes to set on the element, with keys as attribute names and values as attribute values.
     */
    attr?: { [s: string]: string };

    /**
     * Text content to set inside the element.
     */
    innerText?: string;

    /**
     * HTML content to set inside the element.
     */
    innerHTML?: string;

    /**
     * Array of child elements to append to the created element.
     */
    children?: HTMLElement[];

    /**
     * Whether the element should be draggable.
     */
    draggable?: boolean;

    /**
     * Inline CSS styles to set on the element.
     */
    style?: string;

    /**
     * Whether to track mutations (changes) on the element using a MutationObserver.
     */
    trackMutation?: boolean;
}

/**
 * Creates an HTML element with the specified options and invokes a callback function after creation.
 * @param name - The name of the HTML element to create (e.g., "div", "span").
 * @param options - Additional options for configuring the element.
 * @param callback - A function to call after the element is created.
 * @returns The created HTML element.
 */
export function create(name: string, options: CreateElementOptions, callback: Function): HTMLElement;

/**
 * Retrieves the inner HTML content of an element.
 * @param element - The HTML element from which to get the HTML content.
 * @returns A string representing the inner HTML of the element.
 */
export function getHTML(element: HTMLElement): string;

/**
 * Sets the inner HTML content of an element.
 * @param element - The HTML element on which to set the HTML content.
 * @param htmlContent - The HTML content to set.
 * @param evaluateScripts - Whether to evaluate any `<script>` tags in the HTML content (default is false).
 */
export function setHTML(element: HTMLElement, htmlContent: string, evaluateScripts?: boolean): void;

/**
 * Sets the text content of an element.
 * @param element - The HTML element on which to set the text content.
 * @param textContent - The text content to set.
 * @param options - Additional options for transforming the text content.
 * @param options.toUpperCase - Whether to convert the text to uppercase.
 * @param options.toLowerCase - Whether to convert the text to lowercase.
 */
export function setText(element: HTMLElement, textContent: string, options?: { toUpperCase?: boolean; toLowerCase?: boolean }): void;

export { Element as default };
