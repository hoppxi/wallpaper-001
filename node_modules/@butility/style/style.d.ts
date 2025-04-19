export { Font, CSS, Color, Style as default };

/**
 * A namespace that provides various style-related utility functions and 
 * classes for color manipulation, theme management, font loading, and CSS manipulation.
 * 
 * @namespace Style
 */
declare namespace Style {
    export { calculateLuminance }
    export { colorBrightness }
    export { colorContrast }
    export { darkenColor }
    export { generateColorGradient }
    export { generateRandomColor }
    export { hexToRgb }
    export { hueToRgb }
    export { invertColor }
    export { lightenColor }
    export { mixColors }
    export { rgbToHex }
    export { rgbToHsl }
    export { hexToRgba }
    export { hslToRgb }
    export { rgbaToHex }
    export { ThemeManager }
    export { setStateBasedStyle }
    export { loadWebFont }
    export { loadWebFontAsync }
    export { addStyles }
    export { removeStylesByProps }
    export { resetStyles }
    export { load }
    export { loadAsync }
    export { getAllStyles }
}

/**
 * A namespace for color utility functions.
 * These functions help in manipulating and converting colors,
 * such as calculating luminance, generating gradients, converting between color formats, and more.
 * 
 * @namespace Color
 */
declare namespace Color {
    export { calculateLuminance };
    export { colorBrightness };
    export { colorContrast };
    export { darkenColor };
    export { generateColorGradient };
    export { generateRandomColor };
    export { hexToRgb };
    export { hexToRgba };
    export { hslToRgb };
    export { hueToRgb };
    export { invertColor };
    export { lightenColor };
    export { mixColors };
    export { rgbToHex };
    export { rgbToHsl };
    export { rgbaToHex };
}

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
 * Sets CSS styles on an HTML element based on various states (e.g., 'hover', 'active', 'focus', 'click', or 'custom' events).
 * The styles will automatically be applied when the specified state is triggered.
 *
 * @param element - The HTML element on which the styles will be applied.
 * @param config - An object that maps each state to a `CSSStyleDeclaration` or a `CustomEvent`.
 *                 - For example, the 'hover' state can trigger specific styles when the user hovers over the element.
 *                 - Custom states can be defined for more advanced use cases using events.
 */
declare function setStateBasedStyle(element: HTMLElement, config: StateStyleConfig): void;

/**
 * Class to manage themes, including creating, setting, and retrieving the current theme.
 */
declare class ThemeManager {
    private themes: ThemeConfig;
    private currentTheme: string | null;

    /**
     * Creates a new ThemeManager instance with the provided initial themes.
     * 
     * @param initialThemes - An object containing the initial theme configurations.
     */
    constructor(initialThemes: ThemeConfig);

    /**
     * Creates a new theme and adds it to the theme manager.
     * 
     * @param name - The name of the theme.
     * @param theme - The theme object containing CSS property-value pairs.
     */
    createTheme(name: string, theme: string): void;

    /**
     * Sets the current theme to the specified theme name.
     * 
     * @param name - The name of the theme to set.
     */
    setTheme(name: string): void;

    /**
     * Returns the name of the currently active theme, or null if no theme is set.
     * 
     * @returns The name of the current theme.
     */
    getCurrentTheme(): string | null;

    /**
     * Loads the theme from local storage if available.
     * 
     * @private
     */
    private loadThemeFromStorage(): void;

    /**
     * Detects the system's preferred color scheme (light or dark).
     * 
     * @private
     */
    private detectSystemTheme(): void;

    /**
     * Watches for system theme changes (e.g., light to dark) and applies them.
     * 
     * @private
     */
    private watchSystemTheme(): void;
}

/**
 * Defines the structure of a theme configuration, where each theme is an object of key-value pairs representing CSS properties.
 */
interface ThemeConfig {
    [themeName: string]: {
        [key: string]: string;
    };
}

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
 * Calculates the luminance of a given color.
 * 
 * @param color - The color in any format (e.g., hex, rgb).
 * @returns The luminance value as a number between 0 and 1.
 */
export function calculateLuminance(color: string): number;

/**
 * Determines the brightness level of a color.
 * 
 * @param color - The color in any format (e.g., hex, rgb).
 * @returns A number representing the brightness level of the color.
 */
export function colorBrightness(color: string): number;

/**
 * Calculates the contrast ratio between two colors.
 * 
 * @param color1 - The first color in any format (e.g., hex, rgb).
 * @param color2 - The second color in any format (e.g., hex, rgb).
 * @returns The contrast ratio between the two colors.
 */
export function colorContrast(color1: string, color2: string): number;

/**
 * Darkens a given color by a specified percentage.
 * 
 * @param color - The color to darken (e.g., hex, rgb).
 * @param percentage - The percentage to darken the color (between 0 and 100).
 * @returns The darkened color as a string.
 */
export function darkenColor(color: string, percentage: number): string;

/**
 * Generates a color gradient between two colors.
 * 
 * @param startColor - The starting color of the gradient.
 * @param endColor - The ending color of the gradient.
 * @param steps - The number of steps in the gradient.
 * @returns An array of colors representing the gradient.
 */
export function generateColorGradient(startColor: string, endColor: string, steps: number): string[];

/**
 * Generates a random color in hexadecimal format.
 * 
 * @returns A random color as a hex string.
 */
export function generateRandomColor(): string;

/**
 * Converts a hexadecimal color to an RGB object.
 * 
 * @param hex - The hex string (e.g., "#FFFFFF").
 * @returns An object with `r`, `g`, and `b` values.
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number; };

/**
 * Converts a hexadecimal color to an RGBA string.
 * 
 * @param hex - The hex string (e.g., "#FFFFFF").
 * @param a - The alpha value to include in the RGBA string.
 * @returns The RGBA color string, or `null` if the input is invalid.
 */
export function hexToRgba(hex: string, a: number): string | null;

/**
 * Converts HSL values to RGB.
 * 
 * @param hue - The hue value (0-360).
 * @param saturation - The saturation value (0-100).
 * @param lightness - The lightness value (0-100).
 * @returns An object with `r`, `g`, and `b` values.
 */
export function hslToRgb(hue: number, saturation: number, lightness: number): { r: number; g: number; b: number; };

/**
 * Converts a hue value to an RGB component.
 * 
 * @param p - Temporary component 1.
 * @param q - Temporary component 2.
 * @param t - Hue position value.
 * @returns The calculated RGB component value.
 */
export function hueToRgb(p: number, q: number, t: number): number;

/**
 * Inverts the given color.
 * 
 * @param color - The color to invert (e.g., hex, rgb).
 * @returns The inverted color as a string.
 */
export function invertColor(color: string): string;

/**
 * Lightens a given color by a specified percentage.
 * 
 * @param color - The color to lighten (e.g., hex, rgb).
 * @param percentage - The percentage to lighten the color (between 0 and 100).
 * @returns The lightened color as a string.
 */
export function lightenColor(color: string, percentage: number): string;

/**
 * Mixes two colors together based on a specified weight.
 * 
 * @param color1 - The first color to mix.
 * @param color2 - The second color to mix.
 * @param weight - The weight for mixing the two colors (between 0 and 1).
 * @returns The resulting mixed color as a string.
 */
export function mixColors(color1: string, color2: string, weight: number): string;

/**
 * Converts RGB values to a hexadecimal color string.
 * 
 * @param r - The red component (0-255).
 * @param g - The green component (0-255).
 * @param b - The blue component (0-255).
 * @returns The hexadecimal color string.
 */
export function rgbToHex(r: number, g: number, b: number): string;

/**
 * Converts RGB values to HSL values.
 * 
 * @param red - The red component (0-255).
 * @param green - The green component (0-255).
 * @param blue - The blue component (0-255).
 * @returns An object with `h`, `s`, and `l` (hue, saturation, lightness) values.
 */
export function rgbToHsl(red: number, green: number, blue: number): { h: number; s: number; l: number; };

/**
 * Converts RGBA values to a hexadecimal color string.
 * 
 * @param r - The red component (0-255).
 * @param g - The green component (0-255).
 * @param b - The blue component (0-255).
 * @param a - The alpha component (0-1).
 * @returns The hexadecimal color string including alpha.
 */
export function rgbaToHex(r: number, g: number, b: number, a: number): string;


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
