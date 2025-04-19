/**
 * A namespace for utility functions to manage and manipulate CSS styles in the DOM.
 * These functions allow adding, removing, resetting styles, and loading external CSS resources.
 * 
 * @namespace CSS
 */
declare namespace CSS {
    export { addStyles };
    export { removeStylesByProps };
    export { resetStyles };
    export { load };
    export { loadAsync };
    export { getAllStyles };
}

/**
 * Interface representing the result of loading and parsing a CSS file.
 */
interface StyleResult {
    /**
     * The raw CSS text from the loaded file.
     */
    cssText: string;

    /**
     * An object representation of the CSS, structured by selector and properties.
     * Each selector key points to an object where keys are CSS property names (camelCase).
     */
    styleObject: { [selector: string]: { [property: string]: string } };

    /**
     * An object where each selector points to its inline CSS styles as a string.
     */
    inlineCss: { [selector: string]: string };

    /**
     * An object representation of the CSS, using camelCase for property names.
     * Each selector points to an object where the keys are camelCase property names and values are the property values.
     */
    camelCaseObject: { [selector: string]: { [property: string]: string } };

    /**
     * An object representation of the CSS, using hyphenated (kebab-case) property names.
     * Each selector points to an object where the keys are hyphenated property names and values are the property values.
     */
    hyphenatedObject: { [selector: string]: { [property: string]: string } };
}

/**
 * Adds the specified styles to one or more HTML elements.
 * 
 * @param elements - The element or elements to which the styles should be applied.
 * @param styles - The CSSStyleDeclaration object containing the styles to apply.
 */
export function addStyles(elements: HTMLElement | HTMLElement[], styles: CSSStyleDeclaration): void;

/**
 * Retrieves all computed CSS styles for a given HTML element.
 * 
 * @param element - The element from which to retrieve all computed styles.
 * @returns A CSSStyleDeclaration object containing all computed styles.
 */
export function getAllStyles(element: HTMLElement): CSSStyleDeclaration;

/**
 * Synchronously loads a CSS file from the specified URL and returns a parsed `StyleResult`.
 * 
 * @param url - The URL of the CSS file to load.
 * @returns A `StyleResult` object containing the loaded CSS text and its various representations.
 */
export function load(url: string): StyleResult;

/**
 * Asynchronously loads a CSS file from the specified URL and returns a promise that resolves to a parsed `StyleResult`.
 * 
 * @param url - The URL of the CSS file to load.
 * @returns A promise that resolves to a `StyleResult` object containing the loaded CSS text and its various representations.
 */
export function loadAsync(url: string): Promise<StyleResult>;

/**
 * Removes the specified CSS properties from an HTML element.
 * 
 * @param element - The element from which the CSS properties should be removed.
 * @param properties - The CSS property names to remove from the element.
 */
export function removeStylesByProps(element: HTMLElement, ...properties: string[]): void;

/**
 * Resets the styles of a given HTML element to match the provided CSSStyleDeclaration.
 * 
 * @param element - The element whose styles should be reset.
 * @param styles - A CSSStyleDeclaration object containing the styles to reset.
 */
export function resetStyles(element: HTMLElement, styles: CSSStyleDeclaration): void;

export { CSS as default };
