

/**
 * A namespace for various IP-related utilities and functions.
 * Contains methods for validating, converting, generating, and analyzing IP addresses (IPv4 and IPv6),
 * as well as working with subnets and network masks.
 *
 * @namespace IP
 */
declare namespace IP {
    export { isPrivateIP };
    export { isValidIPv4 };
    export { isValidIPv6 };
    export { isValidSubnetMask };
    export { calculateNetworkAddress };
    export { convertIPv4ToIPv6 };
    export { convertIPv6ToIPv4 };
    export { generateRandomIPv4 };
    export { generateRandomIPv6 };
    export { getIPVersion };
    export { getLocationByIP };
    export { getUserIPAddress };
    export { extractFromCIDR };
    export { areIPsInSameNetwork };
    export { normalizeIPv6 };
}

/**
 * Checks if two IP addresses are in the same network based on a subnet mask.
 * @param ip1 - The first IP address.
 * @param ip2 - The second IP address.
 * @param mask - The subnet mask.
 * @returns `true` if the IPs are in the same network, otherwise `false`.
 */
export function areIPsInSameNetwork(ip1: string, ip2: string, mask: string): boolean;

/**
 * Calculates the network address based on an IP address and subnet mask.
 * @param ip - The IP address.
 * @param mask - The subnet mask.
 * @returns The network address, or `null` if invalid.
 */
export function calculateNetworkAddress(ip: string, mask: string): string | null;

/**
 * Converts an IPv4 address to its equivalent IPv6 address.
 * @param ip - The IPv4 address to convert.
 * @returns The corresponding IPv6 address, or `null` if conversion fails.
 */
export function convertIPv4ToIPv6(ip: string): string | null;

/**
 * Converts an IPv6 address to its equivalent IPv4 address.
 * @param ip - The IPv6 address to convert.
 * @returns The corresponding IPv4 address, or `null` if conversion fails.
 */
export function convertIPv6ToIPv4(ip: string): string | null;

/**
 * Extracts the IP address and subnet mask from a CIDR notation string.
 * @param cidr - The CIDR string.
 * @returns An object containing the IP address and subnet mask.
 */
export function extractFromCIDR(cidr: string): { ip: string; mask: string; };

/**
 * Generates a random valid IPv4 address.
 * @returns A random IPv4 address.
 */
export function generateRandomIPv4(): string;

/**
 * Generates a random valid IPv6 address.
 * @returns A random IPv6 address.
 */
export function generateRandomIPv6(): string;

/**
 * Determines the IP version (IPv4 or IPv6) of a given IP address.
 * @param ip - The IP address to check.
 * @returns `4` if it's an IPv4 address, `6` if it's an IPv6 address.
 */
export function getIPVersion(ip: string): 4 | 6;

/**
 * Retrieves the geographical location of an IP address.
 * @param ip - The IP address to look up.
 * @param callback - A function that receives the location data.
 */
export function getLocationByIP(ip: string, callback: Function): void;

/**
 * Retrieves the user's current IP address.
 * @param callback - A function that receives the user's IP address.
 */
export function getUserIPAddress(callback: Function): void;

/**
 * Checks if the given IP address is a private IP.
 * @param ip - The IP address to check.
 * @returns `true` if the IP is private, otherwise `false`.
 */
export function isPrivateIP(ip: string): boolean;

/**
 * Checks if the given IP address is a valid IPv4 address.
 * @param ip - The IPv4 address to check.
 * @returns `true` if the IPv4 address is valid, otherwise `false`.
 */
export function isValidIPv4(ip: string): boolean;

/**
 * Checks if the given IP address is a valid IPv6 address.
 * @param ip - The IPv6 address to check.
 * @returns `true` if the IPv6 address is valid, otherwise `false`.
 */
export function isValidIPv6(ip: string): boolean;

/**
 * Validates a given subnet mask.
 * @param mask - The subnet mask to validate.
 * @returns `true` if the subnet mask is valid, otherwise `false`.
 */
export function isValidSubnetMask(mask: string): boolean;

/**
 * Normalizes an IPv6 address by compressing leading zeros.
 * @param ip - The IPv6 address to normalize.
 * @returns The normalized IPv6 address.
 */
export function normalizeIPv6(ip: string): string;

export { IP as default };
