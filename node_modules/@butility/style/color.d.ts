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

export { Color as default };
