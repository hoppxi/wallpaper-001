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

export { Audiovisual as default };
