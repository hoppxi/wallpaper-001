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
 * Default export for the File namespace.
 */
export { File as default };
