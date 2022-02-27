import { normalFilter } from '../filters/normal';
import injectScript from './injectScript';

export async function normal() {
  injectScript(normalFilter);
}
