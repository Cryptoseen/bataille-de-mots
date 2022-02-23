import { nouns } from '../nouns'

export function getRandomUsername () {

  // On retourne un mot au hasard
  let randomUsername = nouns[Math.floor(Math.random() * nouns.length)];
  return { randomUsername }
}
