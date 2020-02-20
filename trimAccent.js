/***
 * Function qui enleve tout accent
 */

const str = "Â, Ê, Î, Ô, Û, Ä, Ë, Ï, Ö, Ü, À, Æ, æ, Ç, É, È, Œ, œ, Ù"


function trimAccent(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

trimAccent(str)