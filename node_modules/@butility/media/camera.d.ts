/**
 * Supported video file types for recording.
 */
type VideoFileTypes = 
    "mp4" | "webm" | "avi" | "mkv" | "mov" | "flv" | 
    "wmv" | "m4v" | "ogg";

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
 * Camera-related functions for capturing photos and videos.
 */
declare namespace Camera {
    export { capturePhoto };
    export { openCamera };
    export { recordVideo };
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
 * Default export for the Camera namespace.
 */
export { Camera as default };
