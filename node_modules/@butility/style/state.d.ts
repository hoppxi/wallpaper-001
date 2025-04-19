/**
 * Sets CSS styles on an HTML element based on various states (e.g., 'hover', 'active', 'focus', 'click', or 'custom' events).
 * The styles will automatically be applied when the specified state is triggered.
 *
 * @param element - The HTML element on which the styles will be applied.
 * @param config - An object that maps each state to a `CSSStyleDeclaration` or a `CustomEvent`.
 *                 - For example, the 'hover' state can trigger specific styles when the user hovers over the element.
 *                 - Custom states can be defined for more advanced use cases using events.
 */
declare function setStateBasedStyle(element: HTMLElement, config: StateStyleConfig): void;

export { setStateBasedStyle as default };

/**
 * Represents the available states that can trigger style changes on an HTML element.
 * The states can include typical interactive states like 'hover', 'active', 'focus', 'click', or even custom events.
 */
type State = 'hover' | 'active' | 'focus' | 'click' | 'custom';

/**
 * A configuration object that maps various states to their corresponding styles or custom events.
 * 
 * @example
 * const config: StateStyleConfig = {
 *   hover: { color: 'red' },
 *   active: { backgroundColor: 'blue' },
 *   focus: new CustomEvent('focus', { 
 *      detail: { // custom data
 *      } 
 *   }),
 * };
 */
type StateStyleConfig = {
    [key in State]: CSSStyleDeclaration | CustomEvent;
};
