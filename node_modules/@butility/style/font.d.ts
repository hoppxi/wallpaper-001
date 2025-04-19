/**
 * A namespace for loading and managing web fonts. 
 * This includes functions to synchronously or asynchronously
 * load web fonts with various configuration options.
 * 
 * @namespace Font
 */
declare namespace Font {
    export { loadWebFont as load };
    export { loadWebFontAsync as loadAsync };
}


/**
 * 
 * The possible values for font display type while the browser is loading
 */
type FontDisplayType = 'swap' | 'block' | 'fallback' | 'optional';

/**
 * Represents the options available for loading a web font.
 */
interface FontOptions {
    /**
     * The name of the font family to load.
     */
    family: string;

    /**
     * The weight of the font to load (e.g., '400', '700', 'bold').
     */
    weight?: string;

    /**
     * The style of the font (e.g., 'normal', 'italic').
     */
    style?: string;

    /**
     * The subsets to load for the font (e.g., ['latin', 'cyrillic']).
     */
    subsets?: string[];

    /**
     * A list of CSS selectors (elements) where the font should be applied.
     */
    elements?: string[];

    /**
     * An array of fallback fonts to use if the web font fails to load.
     */
    fallbackFonts?: string[];

    /**
     * Defines how the browser should display text while the font is loading.
     */
    display?: FontDisplayType;

    /**
     * If `true`, the font will only be loaded when it appears in the viewport (lazy-loaded).
     */
    lazyLoad?: boolean;

    /**
     * If `true`, the font will be preloaded before being used.
     */
    preload?: boolean;

    /**
     * The time (in milliseconds) to wait before the font loading times out.
     */
    timeout?: number;

    /**
     * A callback function to invoke when the font is successfully loaded.
     */
    onLoadSuccess?: () => void;

    /**
     * A callback function to invoke if an error occurs while loading the font.
     */
    onLoadError?: (error: Error) => void;

    /**
     * Options to configure the IntersectionObserver used for lazy-loading fonts.
     */
    observerOptions?: IntersectionObserverInit;
}

/**
 * Synchronously loads a web font based on the provided options.
 * 
 * @param options - The configuration options for loading the web font.
 */
export function loadWebFont(options: FontOptions): void;

/**
 * Asynchronously loads a web font based on the provided options, returning a promise.
 * 
 * @param options - The configuration options for loading the web font.
 * @returns A promise that resolves when the font is successfully loaded or rejects on error.
 */
export function loadWebFontAsync(options: FontOptions): Promise<any>;
export { Font as default };
