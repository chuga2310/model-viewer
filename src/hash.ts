import CryptoJS from "crypto-js";
import { hash_b } from "./model-viewer-base";
import { hash_c } from "./model-viewer";
const hash_a = "bNrvE6ghq";

export function checkHashTextContent(
  arrayBuffer: any,
  hashedContent: string | null
) {
  const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
  const prefixString = hash_a + hash_b + hash_c;
  const modifiedWordArray =
    CryptoJS.enc.Utf8.parse(prefixString).concat(wordArray);
  const hash = CryptoJS.SHA1(modifiedWordArray).toString();
  if (hash === hashedContent) {
    return true;
  }
  return false;
}

export function createBlobUrlFromBuffer(arrayBuffer: any, mimeType: any) {
  // Create a Blob from the ArrayBuffer
  const blob = new Blob([arrayBuffer], { type: mimeType });
  // Generate a URL for the Blob
  const url = URL.createObjectURL(blob);
  return url;
}
