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
 * Namespace for utility functions to manage CSS classes on HTML elements.
 * 
 * @namespace ClassUtils
 */
declare namespace ClassUtils {
    export { addClass };
    export { addClassOnInterval };
    export { addClassOnViewportEnter };
    export { addClasses };
    export { addUniqueClass };
    export { hasAnyClass };
    export { removeClass };
    export { removeClassOnInterval };
    export { replaceClass };
    export { replaceClassPrefix };
    export { replaceClasses };
    export { toggleClass };
    export { toggleClassConditionally };
    export { toggleClassOnConnectionStatus };
    export { toggleClassOnCopy };
    export { toggleClassOnDeviceMotion };
    export { toggleClassOnFocus };
    export { toggleClassOnGeolocationChange };
    export { toggleClassOnIdleTime };
    export { toggleClassOnMediaQueryChange };
    export { toggleClassOnOrientationChange };
    export { toggleClassOnSwipe };
}

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
 * Namespace for handling event-related utilities.
 * 
 * @namespace EventUtils
 */
declare namespace EventUtils {
    export { delegate };
    export { getEventData };
    export { off };
    export { on };
    export { once };
    export { setEventData };
    export { trigger };
    export { triggerEvent };
}

/**
 * Namespace providing various utilities for traversing and selecting DOM elements.
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
 * Type for an event handler function.
 * @param event - The event object.
 */
type EventHandler = (event: Event) => void;

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


/**
 * Adds a CSS class to an element.
 * @param element - The HTML element to which the class will be added.
 * @param className - The CSS class to add.
 * @param options - Optional settings.
 * @param options.checkIfExists - If true, the class is only added if it doesn't already exist.
 */
export function addClass(element: HTMLElement, className: string, options?: { checkIfExists?: boolean }): void;

/**
 * Adds a CSS class to an element at regular intervals.
 * @param element - The HTML element to which the class will be added.
 * @param className - The CSS class to add.
 * @param interval - Time in milliseconds between class additions.
 */
export function addClassOnInterval(element: HTMLElement, className: string, interval?: number): void;

/**
 * Adds a CSS class to an element when it enters the viewport.
 * @param element - The HTML element to which the class will be added.
 * @param className - The CSS class to add when the element enters the viewport.
 */
export function addClassOnViewportEnter(element: HTMLElement, className: string): void;

/**
 * Adds multiple CSS classes to an element.
 * @param element - The HTML element to which the classes will be added.
 * @param classNames - An array of class names to add.
 * @param options - Optional settings.
 * @param options.timeout - The time in milliseconds before adding the classes.
 * @param options.checkForDuplicates - If true, duplicates will not be added.
 * @returns A promise that resolves when the classes are added.
 */
export function addClasses(element: HTMLElement, classNames: string[], options?: { timeout?: number, checkForDuplicates?: boolean }): Promise<void>;

/**
 * Adds a unique CSS class to an element (ensures no duplicates).
 * @param element - The HTML element to which the class will be added.
 * @param className - The CSS class to add.
 */
export function addUniqueClass(element: HTMLElement, className: string): void;

/**
 * Checks if the element has any class from a list of class names.
 * @param element - The HTML element to check.
 * @param classArray - An array of class names to check against.
 * @returns True if the element has any of the specified classes, false otherwise.
 */
export function hasAnyClass(element: HTMLElement, classArray: string[]): boolean;

/**
 * Removes a CSS class from an element.
 * @param element - The HTML element from which to remove the class.
 * @param className - The CSS class to remove.
 * @param options - Optional settings.
 * @param options.logChanges - If true, log the class removal.
 * @param options.preserveState - If true, preserve the previous state.
 */
export function removeClass(element: HTMLElement, className: string, options?: { logChanges?: boolean; preserveState?: boolean }): void;

/**
 * Removes a CSS class from an element at regular intervals.
 * @param element - The HTML element from which to remove the class.
 * @param className - The CSS class to remove.
 * @param interval - Time in milliseconds between class removals.
 */
export function removeClassOnInterval(element: HTMLElement, className: string, interval?: number): void;

/**
 * Replaces an old CSS class with a new one on an element.
 * @param element - The HTML element on which to replace the class.
 * @param oldClass - The CSS class to replace.
 * @param newClass - The CSS class to add in place of the old one.
 * @param options - Optional settings.
 * @param options.enableUndo - If true, a function is returned that can be used to undo the class replacement.
 * @returns A function to undo the replacement, or null if undo is disabled.
 */
export function replaceClass(element: HTMLElement, oldClass: string, newClass: string, options?: { enableUndo?: boolean }): () => void | null;

/**
 * Replaces all CSS classes with a specific prefix on an element.
 * @param element - The HTML element on which to replace the class prefix.
 * @param oldPrefix - The old prefix to replace.
 * @param newPrefix - The new prefix to use for the replacement.
 */
export function replaceClassPrefix(element: HTMLElement, oldPrefix: string, newPrefix: string): void;

/**
 * Replaces multiple CSS classes on an element based on a mapping object.
 * @param element - The HTML element on which to replace the classes.
 * @param classMap - An object mapping old class names to new class names.
 */
export function replaceClasses(element: HTMLElement, classMap: { [s: string]: string }): void;

/**
 * Toggles a CSS class on an element.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to toggle.
 * @param options - Optional settings.
 * @param options.onAdd - Callback function to execute when the class is added.
 * @param options.onRemove - Callback function to execute when the class is removed.
 */
export function toggleClass(element: HTMLElement, className: string, options?: { onAdd?: Function; onRemove?: Function }): void;

/**
 * Toggles between two CSS classes based on a condition.
 * @param element - The HTML element on which to toggle the classes.
 * @param condition - The condition to determine which class to add.
 * @param trueClass - The CSS class to add if the condition is true.
 * @param falseClass - The CSS class to add if the condition is false.
 */
export function toggleClassConditionally(element: HTMLElement, condition: boolean, trueClass: string, falseClass: string): void;

/**
 * Toggles a CSS class based on the online/offline connection status.
 * @param element - The HTML element on which to toggle the class.
 * @param trueClass - The CSS class to add when the device is online.
 * @param falseClass - The CSS class to add when the device is offline.
 */
export function toggleClassOnConnectionStatus(element: HTMLElement, trueClass: string, falseClass: string): void;

/**
 * Toggles a CSS class on the element when text is copied.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to add when content is copied.
 */
export function toggleClassOnCopy(element: HTMLElement, className: string): void;

/**
 * Toggles a CSS class based on device motion events.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to add on device motion.
 */
export function toggleClassOnDeviceMotion(element: HTMLElement, className: string): void;

/**
 * Toggles a CSS class when the element gains or loses focus.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to toggle on focus.
 */
export function toggleClassOnFocus(element: HTMLElement, className: string): void;

/**
 * Toggles a CSS class based on geolocation changes.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to toggle on geolocation change.
 * @param options - Optional settings for geolocation monitoring.
 * @param options.enableThrottling - Whether to throttle the class toggling based on geolocation updates.
 * @param options.throttleInterval - The interval for throttling updates.
 * @param options.onClassToggle - A callback function to execute when the class is toggled.
 * @param options.onError - A callback function to handle geolocation errors.
 * @param options.geoOptions - Additional geolocation API options.
 * @returns A function to stop monitoring geolocation changes.
 */
export function toggleClassOnGeolocationChange(element: HTMLElement, className: string, options?: { enableThrottling?: boolean; throttleInterval?: number; onClassToggle?: Function; onError?: Function; geoOptions?: object }): () => void;

/**
 * Toggles a CSS class when the user is idle for a specified amount of time.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to add when the user is idle.
 * @param idleTime - The amount of idle time (in milliseconds) before the class is added.
 */
export function toggleClassOnIdleTime(element: HTMLElement, className: string, idleTime?: number): void;

/**
 * Toggles a CSS class based on a media query change.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to toggle when the media query matches.
 * @param mediaQuery - The media query to monitor.
 */
export function toggleClassOnMediaQueryChange(element: HTMLElement, className: string, mediaQuery: any): void;

/**
 * Toggles a CSS class based on screen orientation changes.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to toggle on orientation change.
 */
export function toggleClassOnOrientationChange(element: HTMLElement, className: string): void;

/**
 * Toggles a CSS class based on swipe gestures.
 * @param element - The HTML element on which to toggle the class.
 * @param className - The CSS class to toggle on swipe gestures.
 */
export function toggleClassOnSwipe(element: HTMLElement, className: string): void;


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


/**
 * Delegates an event to a child element that matches a selector.
 * @param parent - The parent HTML element that contains the child elements.
 * @param childSelector - The selector string for the child element(s) to which the event should be delegated.
 * @param event - The event type (e.g., "click", "mouseover").
 * @param handler - The event handler function to execute when the event is triggered.
 */
export function delegate<T extends HTMLElement>(parent: T, childSelector: string, event: string, handler: EventHandler): void;

/**
 * Retrieves custom data associated with a given event.
 * @param event - The event object from which to retrieve data.
 * @returns The custom event data.
 */
export function getEventData(event: Event): any;

/**
 * Removes an event listener from an element.
 * @param element - The HTML element from which to remove the event listener.
 * @param event - The event type (e.g., "click", "mouseover").
 * @param handler - The event handler function that was previously attached.
 */
export function off<T extends HTMLElement>(element: T, event: string, handler: EventHandler): void;

/**
 * Attaches an event listener to an element.
 * @param element - The HTML element to which the event listener will be attached.
 * @param event - The event type (e.g., "click", "mouseover").
 * @param handler - The event handler function to execute when the event is triggered.
 */
export function on<T extends HTMLElement>(element: T, event: string, handler: EventHandler): void;

/**
 * Attaches an event listener to an element that will trigger only once.
 * @param element - The HTML element to which the event listener will be attached.
 * @param event - The event type (e.g., "click", "mouseover").
 * @param handler - The event handler function to execute when the event is triggered, but only once.
 */
export function once<T extends HTMLElement>(element: T, event: string, handler: EventHandler): void;

/**
 * Sets custom data for an event.
 * @param event - The event object to which the data will be attached.
 * @param data - The custom data to associate with the event.
 */
export function setEventData(event: Event, data: any): void;

/**
 * Triggers a specified event on an element.
 * @param element - The HTML element on which to trigger the event.
 * @param event - The event type to trigger (e.g., "click", "mouseover").
 */
export function trigger<T extends HTMLElement>(element: T, event: string): void;

/**
 * Triggers a custom event with optional configuration on an element.
 * @param element - The HTML element on which to trigger the event.
 * @param eventType - The type of the event to trigger (e.g., "customEvent").
 * @param options - Optional configuration for the custom event (e.g., `detail`, `bubbles`, `cancelable`).
 */
export function triggerEvent<T extends HTMLElement>(element: T, eventType: string, options?: CustomEventInit): void;

/**
 * Creates an HTMLAnchorElement (`<a>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<a>` element.
 * @returns A newly created `<a>` element.
 */
export function a(...attributesOrChildren: any[]): HTMLAnchorElement;

/**
 * Creates an HTMLElement for an `<abbr>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<abbr>` element.
 * @returns A newly created `<abbr>` element.
 */
export function abbr(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLAreaElement (`<area>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<area>` element.
 * @returns A newly created `<area>` element.
 */
export function area(...attributesOrChildren: any[]): HTMLAreaElement;

/**
 * Creates an HTMLElement for an `<article>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<article>` element.
 * @returns A newly created `<article>` element.
 */
export function article(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLElement for an `<aside>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<aside>` element.
 * @returns A newly created `<aside>` element.
 */
export function aside(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLAudioElement (`<audio>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<audio>` element.
 * @returns A newly created `<audio>` element.
 */
export function audio(...attributesOrChildren: any[]): HTMLAudioElement;

/**
 * Creates an HTMLBaseElement (`<base>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<base>` element.
 * @returns A newly created `<base>` element.
 */
export function base(...attributesOrChildren: any[]): HTMLBaseElement;

/**
 * Creates an HTMLElement for a `<bdi>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<bdi>` element.
 * @returns A newly created `<bdi>` element.
 */
export function bdi(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLBodyElement (`<body>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<body>` element.
 * @returns A newly created `<body>` element.
 */
export function body(...attributesOrChildren: any[]): HTMLBodyElement;

/**
 * Creates an HTMLButtonElement (`<button>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<button>` element.
 * @returns A newly created `<button>` element.
 */
export function button(...attributesOrChildren: any[]): HTMLButtonElement;

/**
 * Creates an HTMLCanvasElement (`<canvas>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<canvas>` element.
 * @returns A newly created `<canvas>` element.
 */
export function canvas(...attributesOrChildren: any[]): HTMLCanvasElement;

/**
 * Creates a custom HTML element with the specified name.
 * @param name - The name of the custom element to create.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the custom element.
 * @returns A newly created custom element.
 */
export function custom(name: string, ...attributesOrChildren: any[]): HTMLUnknownElement;

/**
 * Creates an HTMLDataListElement (`<datalist>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<datalist>` element.
 * @returns A newly created `<datalist>` element.
 */
export function datalist(...attributesOrChildren: any[]): HTMLDataListElement;

/**
 * Creates an HTMLDetailsElement (`<details>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<details>` element.
 * @returns A newly created `<details>` element.
 */
export function details(...attributesOrChildren: any[]): HTMLDetailsElement;

/**
 * Creates an HTMLDialogElement (`<dialog>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<dialog>` element.
 * @returns A newly created `<dialog>` element.
 */
export function dialog(...attributesOrChildren: any[]): HTMLDialogElement;

/**
 * Creates an HTMLDivElement (`<div>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<div>` element.
 * @returns A newly created `<div>` element.
 */
export function div(...attributesOrChildren: any[]): HTMLDivElement;

/**
 * Creates an HTMLEmbedElement (`<embed>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<embed>` element.
 * @returns A newly created `<embed>` element.
 */
export function embed(...attributesOrChildren: any[]): HTMLEmbedElement;

/**
 * Creates an HTMLFieldSetElement (`<fieldset>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<fieldset>` element.
 * @returns A newly created `<fieldset>` element.
 */
export function fieldset(...attributesOrChildren: any[]): HTMLFieldSetElement;

/**
 * Creates an HTMLElement for a `<figcaption>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<figcaption>` element.
 * @returns A newly created `<figcaption>` element.
 */
export function figcaption(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLElement for a `<figure>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<figure>` element.
 * @returns A newly created `<figure>` element.
 */
export function figure(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLElement for a `<footer>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<footer>` element.
 * @returns A newly created `<footer>` element.
 */
export function footer(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLFormElement (`<form>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<form>` element.
 * @returns A newly created `<form>` element.
 */
export function form(...attributesOrChildren: any[]): HTMLFormElement;

// For brevity, the same pattern continues for the remaining elements:

/**
 * Creates an HTMLHeadingElement (`<h1>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<h1>` element.
 * @returns A newly created `<h1>` element.
 */
export function h1(...attributesOrChildren: any[]): HTMLHeadingElement;

/**
 * Creates an HTMLHeadingElement (`<h2>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<h2>` element.
 * @returns A newly created `<h2>` element.
 */
export function h2(...attributesOrChildren: any[]): HTMLHeadingElement;

/**
 * Creates an HTMLHeadingElement (`<h3>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<h3>` element.
 * @returns A newly created `<h3>` element.
 */
export function h3(...attributesOrChildren: any[]): HTMLHeadingElement;

/**
 * Creates an HTMLHeadingElement (`<h4>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<h4>` element.
 * @returns A newly created `<h4>` element.
 */
export function h4(...attributesOrChildren: any[]): HTMLHeadingElement;

/**
 * Creates an HTMLHeadingElement (`<h5>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<h5>` element.
 * @returns A newly created `<h5>` element.
 */
export function h5(...attributesOrChildren: any[]): HTMLHeadingElement;

/**
 * Creates an HTMLHeadingElement (`<h6>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<h6>` element.
 * @returns A newly created `<h6>` element.
 */
export function h6(...attributesOrChildren: any[]): HTMLHeadingElement;

/**
 * Creates an HTMLHeadElement (`<head>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<head>` element.
 * @returns A newly created `<head>` element.
 */
export function head(...attributesOrChildren: any[]): HTMLHeadElement;

/**
 * Creates an HTMLElement for a `<header>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<header>` element.
 * @returns A newly created `<header>` element.
 */
export function header(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLIFrameElement (`<iframe>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<iframe>` element.
 * @returns A newly created `<iframe>` element.
 */
export function iframe(...attributesOrChildren: any[]): HTMLIFrameElement;

/**
 * Creates an HTMLImageElement (`<img>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<img>` element.
 * @returns A newly created `<img>` element.
 */
export function img(...attributesOrChildren: any[]): HTMLImageElement;

/**
 * Creates an HTMLInputElement (`<input>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<input>` element.
 * @returns A newly created `<input>` element.
 */
export function input(...attributesOrChildren: any[]): HTMLInputElement;

/**
 * Creates an HTMLLabelElement (`<label>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<label>` element.
 * @returns A newly created `<label>` element.
 */
export function label(...attributesOrChildren: any[]): HTMLLabelElement;

/**
 * Creates an HTMLLegendElement (`<legend>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<legend>` element.
 * @returns A newly created `<legend>` element.
 */
export function legend(...attributesOrChildren: any[]): HTMLLegendElement;

/**
 * Creates an HTMLLIElement (`<li>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<li>` element.
 * @returns A newly created `<li>` element.
 */
export function li(...attributesOrChildren: any[]): HTMLLIElement;

/**
 * Creates an HTMLLinkElement (`<link>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<link>` element.
 * @returns A newly created `<link>` element.
 */
export function link(...attributesOrChildren: any[]): HTMLLinkElement;

/**
 * Creates an HTMLElement for a `<main>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<main>` element.
 * @returns A newly created `<main>` element.
 */
export function main(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLMapElement (`<map>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<map>` element.
 * @returns A newly created `<map>` element.
 */
export function map(...attributesOrChildren: any[]): HTMLMapElement;

/**
 * Creates an HTMLElement for a `<mark>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<mark>` element.
 * @returns A newly created `<mark>` element.
 */
export function mark(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLMetaElement (`<meta>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<meta>` element.
 * @returns A newly created `<meta>` element.
 */
export function meta(...attributesOrChildren: any[]): HTMLMetaElement;

/**
 * Creates an HTMLMeterElement (`<meter>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<meter>` element.
 * @returns A newly created `<meter>` element.
 */
export function meter(...attributesOrChildren: any[]): HTMLMeterElement;

/**
 * Creates an HTMLElement for a `<nav>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<nav>` element.
 * @returns A newly created `<nav>` element.
 */
export function nav(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLObjectElement (`<object>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<object>` element.
 * @returns A newly created `<object>` element.
 */
export function object(...attributesOrChildren: any[]): HTMLObjectElement;

/**
 * Creates an HTMLOListElement (`<ol>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<ol>` element.
 * @returns A newly created `<ol>` element.
 */
export function ol(...attributesOrChildren: any[]): HTMLOListElement;

/**
 * Creates an HTMLOptionElement (`<option>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<option>` element.
 * @returns A newly created `<option>` element.
 */
export function option(...attributesOrChildren: any[]): HTMLOptionElement;

/**
 * Creates an HTMLOutputElement (`<output>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<output>` element.
 * @returns A newly created `<output>` element.
 */
export function output(...attributesOrChildren: any[]): HTMLOutputElement;

/**
 * Creates an HTMLParagraphElement (`<p>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<p>` element.
 * @returns A newly created `<p>` element.
 */
export function p(...attributesOrChildren: any[]): HTMLParagraphElement;

/**
 * Creates an HTMLPictureElement (`<picture>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<picture>` element.
 * @returns A newly created `<picture>` element.
 */
export function picture(...attributesOrChildren: any[]): HTMLPictureElement;

/**
 * Creates an HTMLProgressElement (`<progress>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<progress>` element.
 * @returns A newly created `<progress>` element.
 */
export function progress(...attributesOrChildren: any[]): HTMLProgressElement;

/**
 * Creates an HTMLScriptElement (`<script>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<script>` element.
 * @returns A newly created `<script>` element.
 */
export function script(...attributesOrChildren: any[]): HTMLScriptElement;

/**
 * Creates an HTMLElement for a `<section>` tag.
 * @param attributesOrChildren - A spread of attributes or child elements to append to the `<section>` element.
 * @returns A newly created `<section>` element.
 */
export function section(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLSelectElement (`<select>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<select>` element.
 */
export function select(...attributesOrChildren: any[]): HTMLSelectElement;


/**
 * Creates an HTMLSourceElement (`<source>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<source>` element.
 */
export function source(...attributesOrChildren: any[]): HTMLSourceElement;

/**
 * Creates an HTMLSpanElement (`<span>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<span>` element.
 */
export function span(...attributesOrChildren: any[]): HTMLSpanElement;

/**
 * Creates an HTMLStyleElement (`<style>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<style>` element.
 */
export function style(...attributesOrChildren: any[]): HTMLStyleElement;

/**
 * Creates an HTMLElement (`<summary>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<summary>` element.
 */
export function summary(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLTableElement (`<table>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<table>` element.
 */
export function table(...attributesOrChildren: any[]): HTMLTableElement;

/**
 * Creates an HTMLElement (`<tbody>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<tbody>` element.
 */
export function tbody(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLElement (`<td>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<td>` element.
 */
export function td(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLTextAreaElement (`<textarea>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<textarea>` element.
 */
export function textarea(...attributesOrChildren: any[]): HTMLTextAreaElement;

/**
 * Creates an HTMLElement (`<tfoot>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<tfoot>` element.
 */
export function tfoot(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLElement (`<th>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<th>` element.
 */
export function th(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLElement (`<thead>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<thead>` element.
 */
export function thead(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLTimeElement (`<time>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<time>` element.
 */
export function time(...attributesOrChildren: any[]): HTMLTimeElement;

/**
 * Creates an HTMLTitleElement (`<title>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<title>` element.
 */
export function title(...attributesOrChildren: any[]): HTMLTitleElement;

/**
 * Creates an HTMLElement (`<tr>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<tr>` element.
 */
export function tr(...attributesOrChildren: any[]): HTMLElement;

/**
 * Creates an HTMLTrackElement (`<track>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<track>` element.
 */
export function track(...attributesOrChildren: any[]): HTMLTrackElement;

/**
 * Creates an HTMLUListElement (`<ul>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<ul>` element.
 */
export function ul(...attributesOrChildren: any[]): HTMLUListElement;

/**
 * Creates an HTMLVideoElement (`<video>`) with optional attributes or children.
 * @param attributesOrChildren - A spread of attributes or child elements to append
 * @returns A newly created `<video>` element.
 */
export function video(...attributesOrChildren: any[]): HTMLVideoElement;

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

export { Attribute, ClassUtils, Element, EventUtils, Traverse };
