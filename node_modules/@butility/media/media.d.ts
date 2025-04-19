/**
 * Main entry to import all methods
 * @namespace Media
 */
declare namespace Media {
    export { blobToHex };
    export { calculateAspectRatio };
    export { capturePhoto };
    export { chunkBlob };
    export { compressImage };
    export { controlPlayback };
    export { controlVolume };
    export { convertBase64ToBlob };
    export { convertBlobToBase64 };
    export { convertImageToBase64 };
    export { cropImage };
    export { decompressDEFLATE };
    export { decryptBlob };
    export { detectFullscreenSupport };
    export { downloadBlob };
    export { downloadFile };
    export { encryptBlob };
    export { enterFullscreen };
    export { exitFullscreen };
    export { flipImage };
    export { getAvailableCaptionTracks };
    export { getFullscreenElement };
    export { mergeBlobs };
    export { openCamera };
    export { preloadImagesWithCallback };
    export { readBlobAsText };
    export { recordVideo };
    export { registerVideoEvents };
    export { resizeImage };
    export { rotateImage };
    export { seekTo };
    export { setCaptionTrack };
    export { skipWithDir };
    export { textToBlob };
    export { toggleCaptions };
    export { unzip };
    export { updateVideoSourceAndResolution };
    export { uploadFile };
    export { validateFileSize };
    export { validateFileType };
    export { verifyBlob };
    export { videoTones };
    export { zip };
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
 * FullScreen-related utility functions for handling fullscreen operations.
 */
declare namespace FullScreen {
    export { detectFullscreenSupport };
    export { enterFullscreen };
    export { exitFullscreen };
    export { getFullscreenElement };
}

/**
 * File-related utility functions for operations such as compression, decompression, validation, and upload.
 */
declare namespace File {
    export { decompressDEFLATE };
    export { downloadFile };
    export { unzip };
    export { uploadFile };
    export { validateFileSize };
    export { validateFileType };
    export { zip };
}

/**
 * Camera-related functions for capturing photos and videos.
 */
declare namespace Camera {
    export { capturePhoto };
    export { openCamera };
    export { recordVideo };
}

/**
 * Blob-related utility functions.
 */
declare namespace Blob {
    export { blobToHex };
    export { chunkBlob };
    export { convertBase64ToBlob };
    export { convertBlobToBase64 };
    export { decryptBlob };
    export { downloadBlob };
    export { encryptBlob };
    export { mergeBlobs };
    export { readBlobAsText };
    export { textToBlob };
    export { verifyBlob };
}

/**
 * Audiovisual namespace containing media control functions.
 */
declare namespace Audiovisual {
    export { controlPlayback };
    export { controlVolume };
    export { getAvailableCaptionTracks };
    export { registerVideoEvents };
    export { seekTo };
    export { setCaptionTrack };
    export { skipWithDir };
    export { toggleCaptions };
    export { updateVideoSourceAndResolution };
    export { videoTones };
}

/**
 * Options for verifying a blob.
 */
interface VerifyBlobOptions {
    /**
     * Maximum allowed size for the blob in bytes.
     */
    maxSize?: number;

    /**
     * List of allowed MIME types for the blob.
     */
    allowedTypes?: string[];
}

/**
 * Converts a blob to a hexadecimal string.
 * 
 * @param blob The blob to convert.
 * @returns A promise that resolves to the hexadecimal string representation of the blob.
 */
export function blobToHex(blob: Blob): Promise<string>;

/**
 * Splits a blob into chunks of a specified size.
 * 
 * @param blob The blob to split.
 * @param chunkSize The size of each chunk in bytes.
 * @returns An array of blob chunks.
 */
export function chunkBlob(blob: Blob, chunkSize: number): Blob[];

/**
 * Converts a base64 string to a blob.
 * 
 * @param base64 The base64 string to convert.
 * @param contentType The MIME type of the resulting blob.
 * @param onProgress (Optional) A function to track the progress of the conversion.
 * @returns The resulting blob.
 */
export function convertBase64ToBlob(
    base64: string,
    contentType: string,
    onProgress?: Function | null,
): Blob;

/**
 * Converts a blob to a base64 string.
 * 
 * @param blob The blob to convert.
 * @param onProgress (Optional) A function to track the progress of the conversion.
 * @returns A promise that resolves to the base64 string.
 */
export function convertBlobToBase64(
    blob: Blob,
    onProgress?: (progress: number) => void | null,
): Promise<string>;

/**
 * Decrypts a blob using a provided cryptographic key.
 * 
 * @param encryptedBlob The encrypted blob to decrypt.
 * @param key The cryptographic key to use for decryption.
 * @returns A promise that resolves to the decrypted blob.
 */
export function decryptBlob(encryptedBlob: Blob, key: CryptoKey): Promise<Blob>;

/**
 * Downloads a blob as a file with the specified filename.
 * 
 * @param blob The blob to download.
 * @param filename The name of the file to save the blob as.
 * @param fallbackContentType The MIME type to use if the blob's type is not recognized.
 */
export function downloadBlob(
    blob: Blob,
    filename: string,
    fallbackContentType?: string,
): void;

/**
 * Encrypts a blob using a provided cryptographic key.
 * 
 * @param blob The blob to encrypt.
 * @param key The cryptographic key to use for encryption.
 * @returns A promise that resolves to the encrypted blob.
 */
export function encryptBlob(blob: Blob, key: CryptoKey): Promise<Blob>;

/**
 * Merges multiple blobs into a single blob.
 * 
 * @param blobs An array of blobs to merge.
 * @param contentType The MIME type of the resulting merged blob.
 * @param bufferSize The buffer size to use for merging, in bytes.
 * @returns The merged blob.
 */
export function mergeBlobs(
    blobs: Blob[],
    contentType: string,
    bufferSize: number,
): Blob;

/**
 * Reads a blob as a text string or ArrayBuffer.
 * 
 * @param blob The blob to read.
 * @param encoding The character encoding to use (e.g., 'UTF-8').
 * @returns A promise that resolves to the text content or ArrayBuffer of the blob.
 */
export function readBlobAsText(blob: Blob, encoding: string): Promise<string | ArrayBuffer | null>;

/**
 * Converts a text string to a blob.
 * 
 * @param text The text content to convert.
 * @param encoding The character encoding to use for the blob.
 * @returns The resulting blob.
 */
export function textToBlob(text: any, encoding: string): Blob;

/**
 * Verifies a blob against specified validation options.
 * 
 * @param blob The blob to verify.
 * @param options Validation options for verifying the blob.
 * @returns `true` if the blob passes the verification checks, otherwise `false`.
 */
export function verifyBlob(blob: Blob, options: VerifyBlobOptions): boolean;

/**
 * Types of actions related to playback control.
 */
type PlaybackActions = "play" | "pause" | "toggle";

/**
 * Types of directions for skipping media.
 */
type Direction = "forward" | "backward";

/**
 * Types of volume-related actions.
 */
type VolumeActions = 'setVolume' | 'mute' | 'unmute' | 'toggleMute';

/**
 * Supported video file formats.
 */
type VideoFileTypes = "mp4" | "webm" | "avi" | "mkv" | "mov" | "flv" | "wmv" | "m4v" | "ogg";

/**
 * Supported audio file formats.
 */
type AudioFileTypes = "mp3" | "wav" | "ogg" | "aac" | "flac" | "m4a" | "wma" | "alac" | "aiff";

/**
 * Callback functions for media events.
 */
interface MediaEventCallback {
    /**
     * Callback triggered when playback starts.
     */
    onPlay?: () => void;

    /**
     * Callback triggered when playback is paused.
     */
    onPause?: () => void;

    /**
     * Callback triggered when the media's time is updated.
     * @param currentTime The current playback time in seconds.
     */
    onTimeUpdate?: (currentTime: number) => void;

    /**
     * Callback triggered when the media playback ends.
     */
    onEnd?: () => void;
}

/**
 * Options for adjusting media tone settings like brightness, contrast, and saturation.
 */
interface MediaToneOptions {
    /**
     * Brightness level. Accepts a number or null to reset.
     */
    brightness?: number | null;

    /**
     * Contrast level. Accepts a number or null to reset.
     */
    contrast?: number | null;

    /**
     * Saturation level. Accepts a number or null to reset.
     */
    saturation?: number | null;

    /**
     * Custom filter applied to the media element.
     */
    filter?: string | null;
}

/**
 * Controls playback of a given media element.
 * 
 * @param videoElement The video or audio element to control.
 * @param action The playback action to perform ("play", "pause", or "toggle").
 * @returns A promise that resolves when the action is complete.
 */
export function controlPlayback(
    videoElement: HTMLVideoElement | HTMLAudioElement,
    action: PlaybackActions,
): Promise<void>;

/**
 * Controls the volume of a given media element.
 * 
 * @param videoElement The video or audio element to control.
 * @param action The volume action to perform ("setVolume", "mute", "unmute", or "toggleMute").
 * @param volumeLevel (Optional) The volume level to set, only used with "setVolume".
 * @returns A promise that resolves when the action is complete.
 */
export function controlVolume(
    videoElement: HTMLVideoElement | HTMLAudioElement,
    action: VolumeActions,
    volumeLevel?: number,
): Promise<void>;

/**
 * Retrieves available caption tracks from a media element.
 * 
 * @param videoElement The video or audio element to retrieve caption tracks from.
 * @returns A promise that resolves to an array of available TextTrack objects.
 */
export function getAvailableCaptionTracks(
    videoElement: HTMLVideoElement | HTMLAudioElement,
): Promise<TextTrack[]>;

/**
 * Registers event callbacks for a media element.
 * 
 * @param videoElement The video or audio element to register callbacks for.
 * @param callbacks An object containing callback functions for different media events.
 * @returns A promise that resolves when the event listeners are registered.
 */
export function registerVideoEvents(
    videoElement: HTMLVideoElement | HTMLAudioElement,
    callbacks: MediaEventCallback,
): Promise<void>;

/**
 * Seeks to a specific time in the media.
 * 
 * @param videoElement The video or audio element to seek in.
 * @param timeInSeconds The time to seek to, in seconds.
 * @returns A promise that resolves when the seek operation is complete.
 */
export function seekTo(
    videoElement: HTMLVideoElement | HTMLAudioElement,
    timeInSeconds: number,
): Promise<void>;

/**
 * Sets the active caption track for a media element.
 * 
 * @param videoElement The video or audio element to set the caption track for.
 * @param trackIndex The index of the caption track to activate.
 * @returns A promise that resolves when the caption track is set.
 */
export function setCaptionTrack(
    videoElement: HTMLVideoElement | HTMLAudioElement,
    trackIndex: number,
): Promise<void>;

/**
 * Skips forward or backward by a specified number of seconds in the media.
 * 
 * @param videoElement The video or audio element to skip in.
 * @param seconds The number of seconds to skip.
 * @param direction The direction to skip ("forward" or "backward").
 * @returns A promise that resolves when the skip operation is complete.
 */
export function skipWithDir(
    videoElement: HTMLVideoElement | HTMLAudioElement,
    seconds: number,
    direction: Direction,
): Promise<void>;

/**
 * Toggles captions on or off for a media element.
 * 
 * @param videoElement The video or audio element to toggle captions for.
 * @returns A promise that resolves when captions are toggled.
 */
export function toggleCaptions(
    videoElement: HTMLVideoElement | HTMLAudioElement,
): Promise<void>;

/**
 * Updates the video source and optional resolution for a media element.
 * 
 * @param videoElement The video or audio element to update the source for.
 * @param sourceUrl The URL of the new media source.
 * @param type The type of the media file (video or audio).
 * @param resolution (Optional) The resolution to set for the video.
 * @returns A promise that resolves when the source and resolution are updated.
 */
export function updateVideoSourceAndResolution(
    videoElement: HTMLVideoElement | HTMLAudioElement,
    sourceUrl: string,
    type: VideoFileTypes | AudioFileTypes,
    resolution?: string,
): Promise<void>;

/**
 * Applies tone options like brightness, contrast, and saturation to a media element.
 * 
 * @param videoElement The video or audio element to apply the tones to.
 * @param options An object containing tone settings.
 * @returns A promise that resolves when the tone options are applied.
 */
export function videoTones(
    videoElement: HTMLVideoElement | HTMLAudioElement,
    options: MediaToneOptions,
): Promise<void>;

/**
 * Supported Image file types for capturing
 */
type ImageFileTypes =
    "jpeg" | "jpg" | "png" | "gif" | "bmp" | "tiff" | 
    "svg+xml";

/**
 * Base interface for camera options, containing the target element to attach the camera stream.
 */
interface CameraOptions {
    /**
     * The ID of the target HTML element where the camera stream will be displayed.
     */
    targetElementId: string;
}

/**
 * Options for capturing a photo from the camera.
 */
interface PhotoCaptureOptions extends CameraOptions {
    /**
     * The file type for the captured photo.
     * Supported formats include "jpeg", "jpg", "png", "gif", "bmp", "tiff", and "svg+xml".
     */
    fileType: ImageFileTypes;
}

/**
 * Options for recording a video from the camera.
 */
interface VideoRecordOptions extends CameraOptions {
    /**
     * The duration of the video to record, in seconds.
     * After this duration, the recording will automatically stop.
     */
    duration: number;

    /**
     * The file type for the recorded video.
     * Supported formats include "mp4", "webm", "avi", "mkv", "mov", "flv", "wmv", "m4v", and "ogg".
     * The format determines the container used to store the video.
     */
    fileType: VideoFileTypes;

    /**
     * Callback function to start the video recording process.
     * 
     * @param startRecording - A function that initiates the recording process.
     * This function should be called to begin the recording when desired.
     */
    start: (startRecording: Function) => void;

    /**
     * Callback function to stop the video recording.
     * 
     * @param mediaRecorder - The `MediaRecorder` instance responsible for recording the video stream.
     * This function should stop the recording process by calling `mediaRecorder.stop()`.
     */
    stop: (mediaRecorder: MediaRecorder) => void;

    /**
     * Optionally remove audio from the recording.
     * 
     * If `true`, the audio track will be excluded from the recorded video.
     * Defaults to `false`, meaning audio will be included by default.
     */
    removeAudio?: boolean;

    /**
     * Optionally remove video from the recording.
     * 
     * If `true`, the video track will be excluded from the recording (audio only).
     * Defaults to `false`, meaning video will be included by default.
     */
    removeVideo?: boolean;
}

/**
 * Captures a photo using the camera, with specified options.
 * 
 * @param options The options for capturing the photo, including the target element and file type.
 * @returns A promise that resolves to the captured photo as a Blob, or `null` if the capture fails.
 */
export function capturePhoto(options: PhotoCaptureOptions): Promise<Blob | null>;

/**
 * Opens the camera and returns the media stream.
 * 
 * @param options The options for opening the camera, including the target element ID.
 * @returns A promise that resolves to the MediaStream from the camera.
 */
export function openCamera(options: CameraOptions): Promise<MediaStream>;

/**
 * Records a video using the camera, with specified options.
 * 
 * It can also be used to record audio, customize with the options as needed.
 * 
 * @param options The options for recording the video, including duration and file type.
 * @returns A promise that resolves to the recorded video as a Blob.
 */
export function recordVideo(options: VideoRecordOptions): Promise<Blob>;

/**
 * Decompresses data compressed using the DEFLATE algorithm.
 * 
 * @param compressedData The compressed data as an ArrayBuffer.
 * @returns A promise that resolves to the decompressed data as an ArrayBuffer.
 */
export function decompressDEFLATE(compressedData: ArrayBuffer): Promise<ArrayBuffer>;

/**
 * Downloads a file from the given URL and saves it with the specified file name and optional file type.
 * 
 * @param fileUrl The URL of the file to download.
 * @param fileName The name to save the downloaded file as.
 * @param fileType (Optional) The MIME type of the file being downloaded.
 * @returns A promise that resolves when the download is complete.
 */
export function downloadFile(fileUrl: string, fileName: string, fileType?: string): Promise<any>;

/**
 * Extracts files from a zip archive.
 * 
 * @param zipBlob The blob containing the zip archive.
 * @returns A promise that resolves to an array of `File` objects extracted from the zip.
 */
export function unzip(zipBlob: Blob): Promise<File[]>;

/**
 * Uploads a file to the specified URL.
 * 
 * @param file The file to be uploaded.
 * @param url The URL to upload the file to.
 * @returns A promise that resolves when the file upload is complete.
 */
export function uploadFile(file: File, url: string): Promise<any>;

/**
 * Validates whether a file exceeds the specified maximum size.
 * 
 * @param file The file to validate.
 * @param maxSize The maximum allowed file size in bytes.
 * @returns `true` if the file size is within the allowed limit, otherwise `false`.
 */
export function validateFileSize(file: File, maxSize: number): boolean;

/**
 * Validates whether a file has an allowed MIME type and extension.
 * 
 * @param file The file to validate.
 * @param allowedTypes An array of allowed MIME types.
 * @param allowedExtensions An array of allowed file extensions.
 * @returns `true` if the file type and extension are valid, otherwise `false`.
 */
export function validateFileType(file: File, allowedTypes: string[], allowedExtensions: string[]): boolean;

/**
 * Creates a zip archive from an array of files.
 * 
 * @param files The array of files to compress into a zip archive.
 * @param zipFileName The name of the resulting zip file.
 * @returns A promise that resolves to a `Blob` representing the zip archive.
 */
export function zip(files: File[], zipFileName: string): Promise<Blob>;

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
