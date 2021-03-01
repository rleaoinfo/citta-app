//ver1
function diacriticSensitiveRegex(string = "") {
    return string
      .replace(/a/g, "[a,á,à,ä]")
      .replace(/e/g, "[e,é,ë]")
      .replace(/i/g, "[i,í,ï]")
      .replace(/o/g, "[o,ó,ö,ò]")
      .replace(/u/g, "[u,ü,ú,ù]");
  }
  //verz
  const clearText = (text: string) => {
    return text
      .replace(new RegExp("[aãàáäâ]", "gi"), "[aãàáäâ]")
      .replace(new RegExp("[eèéëê]", "gi"), "[eèéëê]")
      .replace(new RegExp("[iìíïî]", "gi"), "[iìíïî]")
      .replace(new RegExp("[oõòóöô]", "gi"), "[oõòóöô]")
      .replace(new RegExp("[uùúüû]", "gi"), "[uùúüû]")
      .replace(new RegExp("[nñ]", "gi"), "[nñ]")
      .replace(new RegExp("[cç]", "gi"), "[cç]");
  };

  export default clearText;