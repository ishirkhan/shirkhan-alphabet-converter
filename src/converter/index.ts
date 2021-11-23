import { Khan as KhanConverter } from "./khan";
import { Uly as UlyConverter } from "./uly";

export function u2uly(word: string) {
  return new UlyConverter().convert(word);
}

export function uly2u(word: string) {
  return new UlyConverter().forward(word);
}

export function u2khan(word: string) {
  return new KhanConverter().convert(word);
}

export function khan2u(word: string) {
  return new KhanConverter().forward(word);
}

export function khanText2u(text: string) {
  return new KhanConverter().text2u(text);
}

export { KhanConverter, UlyConverter };
