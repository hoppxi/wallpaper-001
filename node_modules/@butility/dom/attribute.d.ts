/**
 * Namespace for managing and manipulating HTML element attributes.
 * 
 * @namespace Attribute
 */
declare namespace Attribute {
    export { attributesToQueryString };
    export { compareAttributes };
    export { copyAttributes };
    export { findElementByAttribute };
    export { getAllAttributes };
    export { getAttribute };
    export { getAttributesByPrefix };
    export { hasAnyAttributes };
    export { hasAttribute };
    export { removeAllAttributes };
    export { removeAttribute };
    export { removeAttributesByName };
    export { removeAttributesByPrefix };
    export { setAttribute };
    export { setAttributesFromQueryString };
    export { toggleAttribute };
    export { toggleAttributes };
}

/**
 * Options for comparing attributes between two HTML elements.
 */
interface CompareAttributesOptions {
    /**
     * Function to execute if the attribute comparison is true.
     * @param attrName - The name of the attribute being compared.
     * @param el1Value - The value of the attribute in the first element.
     * @param el2Value - The value of the attribute in the second element.
     */
    onTrue?: (attrName: string, el1Value: string | null, el2Value: string | null) => void;

    /**
     * Function to execute if the attribute comparison is false.
     * @param attrName - The name of the attribute being compared.
     * @param el1Value - The value of the attribute in the first element.
     * @param el2Value - The value of the attribute in the second element.
     */
    onFalse?: (attrName: string, el1Value: string | null, el2Value: string | null) => void;

    /**
     * List of attribute names to ignore during comparison.
     */
    ignoreAttributes?: string[];

    /**
     * Custom logic for comparing attribute values.
     * @param el1Value - The value of the attribute in the first element.
     * @param el2Value - The value of the attribute in the second element.
     * @returns A boolean indicating whether the custom comparison passes.
     */
    customCompare?: (el1Value: string | null, el2Value: string | null) => boolean;
}

/**
 * Options for removing attributes based on a prefix.
 */
interface RemoveAttributesByPrefixOptions {
    /**
     * Callback function invoked when an attribute is removed.
     * @param attrName - The name of the attribute that was removed.
     */
    onRemove?: (attrName: string) => void;

    /**
     * List of attributes to protect from removal.
     */
    protectedAttr?: string[];
}

/**
 * Options for setting attributes on an element.
 */
interface SetAttributesOptions {
    /**
     * List of attribute names to allow setting (whitelist).
     */
    whitelist?: string[];

    /**
     * List of attribute names to prevent setting (blacklist).
     */
    blacklist?: string[];

    /**
     * Validation function to check if an attribute is allowed.
     * @param key - The name of the attribute.
     * @param value - The value of the attribute.
     * @returns A boolean indicating whether the attribute can be set.
     */
    validate?: (key: string, value: string) => boolean;

    /**
     * Function to transform the value of the attribute before setting it.
     * @param key - The name of the attribute.
     * @param value - The value of the attribute.
     * @returns The transformed value of the attribute.
     */
    transformValue?: (key: string, value: string) => string;

    /**
     * A prefix to add to all attribute names before setting them.
     */
    addPrefix?: string;

    /**
     * Callback invoked after attributes are set.
     * @param attributes - The object containing the attributes that were set.
     */
    onAttributeSet?: (attributes: object) => void;

    /**
     * Callback for handling errors during attribute setting.
     * @param error - The error object.
     */
    onError?: (error: Error) => void;

    /**
     * Whether to log attribute operations for debugging purposes.
     */
    log?: boolean;
}

/**
 * Options for retrieving an attribute from an element.
 */
interface GetAttributeOptions  {
    /**
     * Whether to include the `data-` prefix when retrieving attributes.
     */
    dataPrefix?: boolean;

    /**
     * Default value to return if the attribute does not exist.
     */
    defaultValue?: string;

    /**
     * Function to transform the value of the attribute before returning it.
     * @param value - The raw attribute value.
     * @returns The transformed attribute value.
     */
    transform?: (value: string | null) => string | null;
}

/**
 * Result of comparing attributes between two elements.
 * The keys are attribute names, and the values are objects containing the attribute values from both elements.
 */
type CompareAttributesResult = Record<string, { el1Value: string | null, el2Value: string | null }>;

/**
 * Converts all attributes of an element into a query string format.
 * @param element - The HTML element whose attributes should be converted.
 * @returns A string representing the element's attributes in query string format.
 */
export function attributesToQueryString(element: HTMLElement): string;

/**
 * Compares the attributes of two HTML elements.
 * @param el1 - The first HTML element.
 * @param el2 - The second HTML element.
 * @param options - Additional options for customizing the comparison.
 * @returns A record of attributes and their values in both elements.
 */
export function compareAttributes(el1: HTMLElement, el2: HTMLElement, options?: CompareAttributesOptions): CompareAttributesResult;

/**
 * Copies all attributes from one element to another.
 * @param element - The source element whose attributes are to be copied.
 * @param target - The target element to which the attributes will be copied.
 */
export function copyAttributes(element: HTMLElement, target: HTMLElement): void;

/**
 * Finds all elements that have a specific attribute.
 * @param element - The root HTML element to search within.
 * @param attributeName - The name of the attribute to search for.
 * @returns An array of elements that have the specified attribute.
 */
export function findElementByAttribute(element: HTMLElement, attributeName: string): HTMLElement[];

/**
 * Retrieves all attributes of an element as a key-value record.
 * @param element - The HTML element from which to get attributes.
 * @returns A record of attribute names and their values.
 */
export function getAllAttributes(element: HTMLElement): Record<string, string>;

/**
 * Retrieves the value of a specific attribute from an element.
 * @param element - The HTML element from which to get the attribute.
 * @param attributeName - The name of the attribute.
 * @param options - Additional options for retrieving the attribute.
 * @returns A record with the attribute name and value.
 */
export function getAttribute(element: HTMLElement, attributeName: string, options: GetAttributeOptions): Record<string, string | null>;

/**
 * Retrieves attributes from an element that match a given prefix.
 * @param element - The HTML element from which to get attributes.
 * @param prefix - The prefix to filter attributes by.
 * @returns A record of attribute names and values that match the prefix.
 */
export function getAttributesByPrefix(element: HTMLElement, prefix: string): Record<string, string>;

/**
 * Checks if an element has any attributes.
 * @param element - The HTML element to check.
 * @returns True if the element has any attributes, false otherwise.
 */
export function hasAnyAttributes(element: HTMLElement): boolean;

/**
 * Checks if an element has a specific attribute.
 * @param element - The HTML element to check.
 * @param attributeName - The name of the attribute to check for.
 * @returns True if the element has the attribute, false otherwise.
 */
export function hasAttribute(element: HTMLElement, attributeName: string): boolean;

/**
 * Removes all attributes from an element.
 * @param element - The HTML element from which to remove all attributes.
 */
export function removeAllAttributes(element: HTMLElement): void;

/**
 * Removes a specific attribute from an element.
 * @param element - The HTML element from which to remove the attribute.
 * @param attributeName - The name of the attribute to remove.
 */
export function removeAttribute(element: HTMLElement, attributeName: string): void;

/**
 * Removes multiple attributes from an element by their names.
 * @param element - The HTML element from which to remove attributes.
 * @param attributeNames - The names of the attributes to remove.
 */
export function removeAttributesByName(element: HTMLElement, ...attributeNames: string[]): void;

/**
 * Removes attributes from an element that match a specified prefix.
 * @param element - The HTML element from which to remove attributes.
 * @param prefixes - The prefixes used to filter attributes for removal.
 * @param options - Additional options for handling attribute removal.
 */
export function removeAttributesByPrefix(element: HTMLElement, prefixes: string | string[], options: RemoveAttributesByPrefixOptions): void;

/**
 * Sets an attribute or multiple attributes on an element.
 * @param element - The HTML element on which to set attributes.
 * @param attribute - The object containing attributes as key-value pairs.
 * @param options - Additional options for setting attributes.
 */
export function setAttribute(element: HTMLElement, attribute: object, options?: SetAttributesOptions): void;

/**
 * Sets attributes on an element from a query string.
 * @param element - The HTML element on which to set attributes.
 * @param queryString - The query string containing attributes.
 * @param options - Additional options for setting attributes.
 */
export function setAttributesFromQueryString(element: HTMLElement, queryString: string, options?: SetAttributesOptions): void;

/**
 * Toggles the presence of a specific attribute on an element.
 * @param element - The HTML element on which to toggle the attribute.
 * @param attributeName - The name of the attribute to toggle.
 * @param attributeValue - The value to set if the attribute is added.
 */
export function toggleAttribute(element: HTMLElement, attributeName: string, attributeValue: string | boolean): void;

/**
 * Toggles multiple attributes on an element.
 * @param element - The HTML element on which to toggle attributes.
 * @param attributes - A record of attribute names and boolean values indicating whether to add (true) or remove (false) each attribute.
 */
export function toggleAttributes(element: HTMLElement, attributes: Record<string, boolean>): void;

export { Attribute as default };
