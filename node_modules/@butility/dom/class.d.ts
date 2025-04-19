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

export { ClassUtils as default };
