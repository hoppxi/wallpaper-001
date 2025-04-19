
export { ThemeManager as default };

/**
 * Defines the structure of a theme configuration, where each theme is an object of key-value pairs representing CSS properties.
 */
interface ThemeConfig {
    [themeName: string]: {
        [key: string]: string;
    };
}

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
