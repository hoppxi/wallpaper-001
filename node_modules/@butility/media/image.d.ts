/**
 * Axis options for flipping an image.
 * Can be either "horizontal" or "vertical".
 */
type Axis = "horizontal" | "vertical";

/**
 * Represents the coordinates and dimensions used for cropping an image.
 */
interface Coordinates { 
    /**
     * The width of the cropping area.
     */
    width: number; 

    /**
     * The height of the cropping area.
     */
    height: number; 

    /**
     * The x-coordinate (starting from the left) for the cropping area.
     */
    x: number; 

    /**
     * The y-coordinate (starting from the top) for the cropping area.
     */
    y: number; 
}

/**
 * Image-related utility functions for operations such as resizing, cropping, flipping, and rotating images.
 */
declare namespace Image {
    export { calculateAspectRatio };
    export { compressImage };
    export { convertImageToBase64 };
    export { cropImage };
    export { flipImage };
    export { preloadImagesWithCallback };
    export { resizeImage };
    export { rotateImage };
}

/**
 * Calculates the aspect ratio of an image based on its width and height.
 * 
 * @param width The width of the image.
 * @param height The height of the image.
 * @returns The aspect ratio of the image.
 */
export function calculateAspectRatio(width: number, height: number): number;

/**
 * Compresses an image file to a specified quality level.
 * 
 * @param file The image file to compress.
 * @param quality The compression quality, typically a value between 0 and 1.
 * @returns A promise that resolves to the compressed image as a Blob, or `null` if compression fails.
 */
export function compressImage(file: File, quality: any): Promise<Blob | null>;

/**
 * Converts an image file to a base64 string.
 * 
 * @param file The image file to convert.
 * @returns A promise that resolves to the base64 string representation of the image.
 */
export function convertImageToBase64(file: File): Promise<string>;

/**
 * Crops an image based on the specified coordinates and dimensions.
 * 
 * @param file The image file to crop.
 * @param coordinates The coordinates and dimensions for cropping the image.
 * @returns A promise that resolves to the cropped image as a Blob, or `null` if cropping fails.
 */
export function cropImage(file: File, coordinates: Coordinates): Promise<Blob | null>;

/**
 * Flips an image either horizontally or vertically.
 * 
 * @param file The image file to flip.
 * @param axis The axis to flip the image on, either "horizontal" or "vertical".
 * @returns A promise that resolves to the flipped image as a Blob, or `null` if flipping fails.
 */
export function flipImage(file: File, axis: Axis): Promise<Blob | null>;

/**
 * Preloads a list of images and executes a callback function once all images are loaded.
 * 
 * @param imageUrls An array of image URLs to preload.
 * @param callback The function to execute after all images have been preloaded.
 */
export function preloadImagesWithCallback(imageUrls: string[], callback: Function): void;

/**
 * Resizes an image to fit within the specified maximum width and height.
 * 
 * @param file The image file to resize.
 * @param maxWidth The maximum width for the resized image.
 * @param maxHeight The maximum height for the resized image.
 * @returns A promise that resolves to the resized image as a Blob, or `null` if resizing fails.
 */
export function resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob | null>;

/**
 * Rotates an image by a specified number of degrees.
 * 
 * @param file The image file to rotate.
 * @param degrees The number of degrees to rotate the image.
 * @returns A promise that resolves to the rotated image as a Blob, or `null` if rotation fails.
 */
export function rotateImage(file: File, degrees: number): Promise<Blob | null>;

/**
 * Default export for the Image namespace.
 */
export { Image as default };
