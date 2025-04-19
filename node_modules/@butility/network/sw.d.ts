
/**
 * A namespace containing utility functions and types for handling service workers, caching strategies, 
 * background sync, and push notifications.
 *
 * @namespace SW
 */
declare namespace SW {
    export { handleBackgroundSync };
    export { handleCachingStrategy };
    export { showPushNotification };
    export { sendMessageToSW };
    export { registerServiceWorker };
}

/**
 * Callback type used when the service worker detects a new version of the cache.
 *
 * @callback CacheUpdateCallback
 * @param oldVersion - The previous version of the cache.
 * @param newVersion - The new version of the cache.
 */
type CacheUpdateCallback = (
    oldVersion: string,
    newVersion: string,
) => void;

/**
 * Options for registering a service worker.
 *
 * @interface SWRegisterOptions
 */
interface SWRegisterOptions {
    /**
     * The scope in which the service worker will operate.
     * If not provided, the service worker will operate in the entire origin.
     */
    scope?: string;

    /**
     * Defines how the cache will be updated.
     * - "imports": Only updates cache for resources imported by the service worker.
     * - "all": Updates cache for all resources.
     * - "none": Disables cache updates.
     */
    updateViaCache?: 'imports' | 'all' | 'none';

    /**
     * Optional callback that is triggered when a new cache version is detected.
     * @param oldVersion - The old cache version.
     * @param newVersion - The new cache version.
     */
    onUpdateFound?: CacheUpdateCallback;
}

/**
 * Options for controlling caching strategies.
 *
 * @interface CachingOptions
 */
interface CachingOptions {
    /**
     * The name of the cache to use.
     */
    cacheName: string;

    /**
     * If `true`, the strategy will prioritize cache over network requests (cache-first strategy).
     * Default is `false` (network-first strategy).
     */
    cacheFirst?: boolean;

    /**
     * The time in seconds to wait before falling back to the cache when a network request times out.
     * This is only applicable for network-first strategies.
     */
    networkTimeoutSeconds?: number;
}

/**
 * Options for configuring background sync.
 *
 * @interface BackgroundSyncOptions
 */
interface BackgroundSyncOptions {
    /**
     * The tag used to uniquely identify the background sync task.
     */
    tag: string;

    /**
     * The retry interval in seconds for failed requests.
     * Default is no retry delay.
     */
    retryDelay?: number;

    /**
     * The maximum number of retry attempts for failed requests.
     */
    maxRetry?: number;
}

/**
 * Represents an event triggered when a notification action occurs.
 *
 * @interface NotificationEvent
 */
interface NotificationEvent {
    /**
     * The action that was triggered by the notification.
     */
    readonly action: string;

    /**
     * The notification that triggered the event.
     */
    readonly notification: Notification;

    /**
     * Allows the event to continue running until the provided promise resolves.
     * Useful for ensuring asynchronous operations complete during the event.
     *
     * @param f - A promise that will extend the event until it resolves.
     */
    waitUntil(f: Promise<any>): void;
}

/**
 * Options for displaying push notifications.
 *
 * @interface PushNotificationOptions
 */
interface PushNotificationOptions {
    /**
     * The title of the notification.
     */
    title: string;

    /**
     * The body text of the notification.
     */
    body: string;

    /**
     * An optional icon URL for the notification.
     */
    icon?: string;

    /**
     * Optional callback triggered when the notification is clicked.
     * @param event - The event object associated with the notification click.
     */
    onNotificationClick?: (event: NotificationEvent) => void;
}

/**
 * Handles background sync for failed network requests.
 *
 * @param url - The URL of the request to sync.
 * @param options - The configuration options for background sync.
 * @returns A promise that resolves when the sync is complete.
 */
export function handleBackgroundSync(url: string, options: BackgroundSyncOptions): Promise<void>;

/**
 * Handles caching strategies for a given request.
 *
 * @param request - The network request object.
 * @param options - The caching strategy options.
 * @returns A promise that resolves to a cached or network response.
 */
export function handleCachingStrategy(request: Request, options: CachingOptions): Promise<Response>;

/**
 * Registers a service worker with the given path and options.
 *
 * @param swPath - The path to the service worker file.
 * @param options - The registration options, including scope and cache update strategy.
 * @returns A promise that resolves to the ServiceWorkerRegistration object, or `undefined` if registration fails.
 */
export function registerServiceWorker(swPath: string, options: SWRegisterOptions): Promise<ServiceWorkerRegistration | undefined>;

/**
 * Sends a message to the active service worker.
 *
 * @param message - The message to send to the service worker.
 * @returns A promise that resolves when the message is successfully sent.
 */
export function sendMessageToSW(message: string): Promise<void>;

/**
 * Displays a push notification through the service worker registration.
 *
 * @param registration - The service worker registration to use for displaying the notification.
 * @param options - The options for the notification, including title, body, and optional click handler.
 */
export function showPushNotification(registration: ServiceWorkerRegistration, options: PushNotificationOptions): void;

export { SW as default };
