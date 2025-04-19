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
 * Type for an event handler function.
 * @param event - The event object.
 */
type EventHandler = (event: Event) => void;

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

export { EventUtils as default };
