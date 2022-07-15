/// <reference types="react" />
export declare const DEFAULT_MODE_STORAGE_KEY = "mode";
export declare const DEFAULT_COLOR_SCHEME_STORAGE_KEY = "color-scheme";
export declare const DEFAULT_ATTRIBUTE = "data-color-scheme";
export interface GetInitColorSchemeScriptOptions {
    /**
     * Indicate to the browser which color scheme is used (light or dark) for rendering built-in UI
     * @default true
     */
    enableColorScheme?: boolean;
    /**
     * If `true`, the initial color scheme is set to the user's prefers-color-scheme mode
     * @default false
     */
    enableSystem?: boolean;
    /**
     * The default color scheme to be used on the light mode
     */
    defaultLightColorScheme?: string;
    /**
     * The default color scheme to be used on the dark mode
     */
    defaultDarkColorScheme?: string;
    /**
     * The node (provided as string) used to attach the color-scheme attribute
     * @default 'document.documentElement'
     */
    colorSchemeNode?: string;
    /**
     * localStorage key used to store `mode`
     * @default 'mode'
     */
    modeStorageKey?: string;
    /**
     * localStorage key used to store `colorScheme`
     * @default 'color-scheme'
     */
    colorSchemeStorageKey?: string;
    /**
     * DOM attribute for applying color scheme
     * @default 'data-color-scheme'
     */
    attribute?: string;
}
export default function getInitColorSchemeScript(options?: GetInitColorSchemeScriptOptions): JSX.Element;
