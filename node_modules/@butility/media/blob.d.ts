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

export { Blob as default };
