/**
 * FullScreen-related utility functions for handling fullscreen operations.
 */
declare namespace FullScreen {
    export { detectFullscreenSupport };
    export { enterFullscreen };
    export { exitFullscreen };
    export { getFullscreenElement };
}

/**
 * Detects if the browser supports fullscreen mode.
 * 
 * @returns `true` if fullscreen mode is supported, otherwise `false`.
 */
export function detectFullscreenSupport(): boolean;

/**
 * Requests fullscreen mode for a specified HTML element.
 * 
 * @param element The element to display in fullscreen mode.
 * @returns `void`
 */
export function enterFullscreen(element: HTMLElement): void;

/**
 * Exits fullscreen mode if the document is currently in fullscreen.
 * 
 * @returns `void`
 */
export function exitFullscreen(): void;

/**
 * Gets the current element that is in fullscreen mode.
 * 
 * @returns The element that is currently in fullscreen, or `null` if no element is in fullscreen.
 */
export function getFullscreenElement(): Element | null;

/**
 * Default export for the FullScreen namespace.
 */
export { FullScreen as default };
