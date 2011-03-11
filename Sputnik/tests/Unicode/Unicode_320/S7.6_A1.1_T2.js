// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.6_A1.1_T2;
 * @section: 7.6;
 * @assertion: IdentifierStart :: UnicodeLetter (any character in the Unicode categories "Lu", "Ll", "Lt", "Lm", "Lo", "Nl");
 * @description: UnicodeLetter :: Lowercase letter (Ll).
 * Complex test with eval;  
*/

//CHECK
Ll = [[0x0061, 0x007A], [0x00AA, 0x00AA], [0x00B5, 0x00B5], [0x00BA, 0x00BA], [0x00DF, 0x00F6], [0x00F8, 0x00FF], [0x0101, 0x0101], [0x0103, 0x0103], [0x0105, 0x0105], [0x0107, 0x0107], [0x0109, 0x0109], [0x010B, 0x010B], [0x010D, 0x010D], [0x010F, 0x010F], [0x0111, 0x0111], [0x0113, 0x0113], [0x0115, 0x0115], [0x0117, 0x0117], [0x0119, 0x0119], [0x011B, 0x011B], [0x011D, 0x011D], [0x011F, 0x011F], [0x0121, 0x0121], [0x0123, 0x0123], [0x0125, 0x0125], [0x0127, 0x0127], [0x0129, 0x0129], [0x012B, 0x012B], [0x012D, 0x012D], [0x012F, 0x012F], [0x0131, 0x0131], [0x0133, 0x0133], [0x0135, 0x0135], [0x0137, 0x0138], [0x013A, 0x013A], [0x013C, 0x013C], [0x013E, 0x013E], [0x0140, 0x0140], [0x0142, 0x0142], [0x0144, 0x0144], [0x0146, 0x0146], [0x0148, 0x0149], [0x014B, 0x014B], [0x014D, 0x014D], [0x014F, 0x014F], [0x0151, 0x0151], [0x0153, 0x0153], [0x0155, 0x0155], [0x0157, 0x0157], [0x0159, 0x0159], [0x015B, 0x015B], [0x015D, 0x015D], [0x015F, 0x015F], [0x0161, 0x0161], [0x0163, 0x0163], [0x0165, 0x0165], [0x0167, 0x0167], [0x0169, 0x0169], [0x016B, 0x016B], [0x016D, 0x016D], [0x016F, 0x016F], [0x0171, 0x0171], [0x0173, 0x0173], [0x0175, 0x0175], [0x0177, 0x0177], [0x017A, 0x017A], [0x017C, 0x017C], [0x017E, 0x0180], [0x0183, 0x0183], [0x0185, 0x0185], [0x0188, 0x0188], [0x018C, 0x018D], [0x0192, 0x0192], [0x0195, 0x0195], [0x0199, 0x019B], [0x019E, 0x019E], [0x01A1, 0x01A1], [0x01A3, 0x01A3], [0x01A5, 0x01A5], [0x01A8, 0x01A8], [0x01AA, 0x01AB], [0x01AD, 0x01AD], [0x01B0, 0x01B0], [0x01B4, 0x01B4], [0x01B6, 0x01B6], [0x01B9, 0x01BA], [0x01BD, 0x01BF], [0x01C6, 0x01C6], [0x01C9, 0x01C9], [0x01CC, 0x01CC], [0x01CE, 0x01CE], [0x01D0, 0x01D0], [0x01D2, 0x01D2], [0x01D4, 0x01D4], [0x01D6, 0x01D6], [0x01D8, 0x01D8], [0x01DA, 0x01DA], [0x01DC, 0x01DD], [0x01DF, 0x01DF], [0x01E1, 0x01E1], [0x01E3, 0x01E3], [0x01E5, 0x01E5], [0x01E7, 0x01E7], [0x01E9, 0x01E9], [0x01EB, 0x01EB], [0x01ED, 0x01ED], [0x01EF, 0x01F0], [0x01F3, 0x01F3], [0x01F5, 0x01F5], [0x01F9, 0x01F9], [0x01FB, 0x01FB], [0x01FD, 0x01FD], [0x01FF, 0x01FF], [0x0201, 0x0201], [0x0203, 0x0203], [0x0205, 0x0205], [0x0207, 0x0207], [0x0209, 0x0209], [0x020B, 0x020B], [0x020D, 0x020D], [0x020F, 0x020F], [0x0211, 0x0211], [0x0213, 0x0213], [0x0215, 0x0215], [0x0217, 0x0217], [0x0219, 0x0219], [0x021B, 0x021B], [0x021D, 0x021D], [0x021F, 0x021F], [0x0223, 0x0223], [0x0225, 0x0225], [0x0227, 0x0227], [0x0229, 0x0229], [0x022B, 0x022B], [0x022D, 0x022D], [0x022F, 0x022F], [0x0231, 0x0231], [0x0233, 0x0233], [0x0250, 0x02AD], [0x0390, 0x0390], [0x03AC, 0x03CE], [0x03D0, 0x03D1], [0x03D5, 0x03D7], [0x03D9, 0x03D9], [0x03DB, 0x03DB], [0x03DD, 0x03DD], [0x03DF, 0x03DF], [0x03E1, 0x03E1], [0x03E3, 0x03E3], [0x03E5, 0x03E5], [0x03E7, 0x03E7], [0x03E9, 0x03E9], [0x03EB, 0x03EB], [0x03ED, 0x03ED], [0x03EF, 0x03F3], [0x03F5, 0x03F5], [0x0430, 0x045F], [0x0461, 0x0461], [0x0463, 0x0463], [0x0465, 0x0465], [0x0467, 0x0467], [0x0469, 0x0469], [0x046B, 0x046B], [0x046D, 0x046D], [0x046F, 0x046F], [0x0471, 0x0471], [0x0473, 0x0473], [0x0475, 0x0475], [0x0477, 0x0477], [0x0479, 0x0479], [0x047B, 0x047B], [0x047D, 0x047D], [0x047F, 0x047F], [0x0481, 0x0481], [0x048B, 0x048B], [0x048D, 0x048D], [0x048F, 0x048F], [0x0491, 0x0491], [0x0493, 0x0493], [0x0495, 0x0495], [0x0497, 0x0497], [0x0499, 0x0499], [0x049B, 0x049B], [0x049D, 0x049D], [0x049F, 0x049F], [0x04A1, 0x04A1], [0x04A3, 0x04A3], [0x04A5, 0x04A5], [0x04A7, 0x04A7], [0x04A9, 0x04A9], [0x04AB, 0x04AB], [0x04AD, 0x04AD], [0x04AF, 0x04AF], [0x04B1, 0x04B1], [0x04B3, 0x04B3], [0x04B5, 0x04B5], [0x04B7, 0x04B7], [0x04B9, 0x04B9], [0x04BB, 0x04BB], [0x04BD, 0x04BD], [0x04BF, 0x04BF], [0x04C2, 0x04C2], [0x04C4, 0x04C4], [0x04C6, 0x04C6], [0x04C8, 0x04C8], [0x04CA, 0x04CA], [0x04CC, 0x04CC], [0x04CE, 0x04CE], [0x04D1, 0x04D1], [0x04D3, 0x04D3], [0x04D5, 0x04D5], [0x04D7, 0x04D7], [0x04D9, 0x04D9], [0x04DB, 0x04DB], [0x04DD, 0x04DD], [0x04DF, 0x04DF], [0x04E1, 0x04E1], [0x04E3, 0x04E3], [0x04E5, 0x04E5], [0x04E7, 0x04E7], [0x04E9, 0x04E9], [0x04EB, 0x04EB], [0x04ED, 0x04ED], [0x04EF, 0x04EF], [0x04F1, 0x04F1], [0x04F3, 0x04F3], [0x04F5, 0x04F5], [0x04F9, 0x04F9], [0x0501, 0x0501], [0x0503, 0x0503], [0x0505, 0x0505], [0x0507, 0x0507], [0x0509, 0x0509], [0x050B, 0x050B], [0x050D, 0x050D], [0x050F, 0x050F], [0x0561, 0x0587], [0x1E01, 0x1E01], [0x1E03, 0x1E03], [0x1E05, 0x1E05], [0x1E07, 0x1E07], [0x1E09, 0x1E09], [0x1E0B, 0x1E0B], [0x1E0D, 0x1E0D], [0x1E0F, 0x1E0F], [0x1E11, 0x1E11], [0x1E13, 0x1E13], [0x1E15, 0x1E15], [0x1E17, 0x1E17], [0x1E19, 0x1E19], [0x1E1B, 0x1E1B], [0x1E1D, 0x1E1D], [0x1E1F, 0x1E1F], [0x1E21, 0x1E21], [0x1E23, 0x1E23], [0x1E25, 0x1E25], [0x1E27, 0x1E27], [0x1E29, 0x1E29], [0x1E2B, 0x1E2B], [0x1E2D, 0x1E2D], [0x1E2F, 0x1E2F], [0x1E31, 0x1E31], [0x1E33, 0x1E33], [0x1E35, 0x1E35], [0x1E37, 0x1E37], [0x1E39, 0x1E39], [0x1E3B, 0x1E3B], [0x1E3D, 0x1E3D], [0x1E3F, 0x1E3F], [0x1E41, 0x1E41], [0x1E43, 0x1E43], [0x1E45, 0x1E45], [0x1E47, 0x1E47], [0x1E49, 0x1E49], [0x1E4B, 0x1E4B], [0x1E4D, 0x1E4D], [0x1E4F, 0x1E4F], [0x1E51, 0x1E51], [0x1E53, 0x1E53], [0x1E55, 0x1E55], [0x1E57, 0x1E57], [0x1E59, 0x1E59], [0x1E5B, 0x1E5B], [0x1E5D, 0x1E5D], [0x1E5F, 0x1E5F], [0x1E61, 0x1E61], [0x1E63, 0x1E63], [0x1E65, 0x1E65], [0x1E67, 0x1E67], [0x1E69, 0x1E69], [0x1E6B, 0x1E6B], [0x1E6D, 0x1E6D], [0x1E6F, 0x1E6F], [0x1E71, 0x1E71], [0x1E73, 0x1E73], [0x1E75, 0x1E75], [0x1E77, 0x1E77], [0x1E79, 0x1E79], [0x1E7B, 0x1E7B], [0x1E7D, 0x1E7D], [0x1E7F, 0x1E7F], [0x1E81, 0x1E81], [0x1E83, 0x1E83], [0x1E85, 0x1E85], [0x1E87, 0x1E87], [0x1E89, 0x1E89], [0x1E8B, 0x1E8B], [0x1E8D, 0x1E8D], [0x1E8F, 0x1E8F], [0x1E91, 0x1E91], [0x1E93, 0x1E93], [0x1E95, 0x1E9B], [0x1EA1, 0x1EA1], [0x1EA3, 0x1EA3], [0x1EA5, 0x1EA5], [0x1EA7, 0x1EA7], [0x1EA9, 0x1EA9], [0x1EAB, 0x1EAB], [0x1EAD, 0x1EAD], [0x1EAF, 0x1EAF], [0x1EB1, 0x1EB1], [0x1EB3, 0x1EB3], [0x1EB5, 0x1EB5], [0x1EB7, 0x1EB7], [0x1EB9, 0x1EB9], [0x1EBB, 0x1EBB], [0x1EBD, 0x1EBD], [0x1EBF, 0x1EBF], [0x1EC1, 0x1EC1], [0x1EC3, 0x1EC3], [0x1EC5, 0x1EC5], [0x1EC7, 0x1EC7], [0x1EC9, 0x1EC9], [0x1ECB, 0x1ECB], [0x1ECD, 0x1ECD], [0x1ECF, 0x1ECF], [0x1ED1, 0x1ED1], [0x1ED3, 0x1ED3], [0x1ED5, 0x1ED5], [0x1ED7, 0x1ED7], [0x1ED9, 0x1ED9], [0x1EDB, 0x1EDB], [0x1EDD, 0x1EDD], [0x1EDF, 0x1EDF], [0x1EE1, 0x1EE1], [0x1EE3, 0x1EE3], [0x1EE5, 0x1EE5], [0x1EE7, 0x1EE7], [0x1EE9, 0x1EE9], [0x1EEB, 0x1EEB], [0x1EED, 0x1EED], [0x1EEF, 0x1EEF], [0x1EF1, 0x1EF1], [0x1EF3, 0x1EF3], [0x1EF5, 0x1EF5], [0x1EF7, 0x1EF7], [0x1EF9, 0x1EF9], [0x1F00, 0x1F07], [0x1F10, 0x1F15], [0x1F20, 0x1F27], [0x1F30, 0x1F37], [0x1F40, 0x1F45], [0x1F50, 0x1F57], [0x1F60, 0x1F67], [0x1F70, 0x1F7D], [0x1F80, 0x1F87], [0x1F90, 0x1F97], [0x1FA0, 0x1FA7], [0x1FB0, 0x1FB4], [0x1FB6, 0x1FB7], [0x1FBE, 0x1FBE], [0x1FC2, 0x1FC4], [0x1FC6, 0x1FC7], [0x1FD0, 0x1FD3], [0x1FD6, 0x1FD7], [0x1FE0, 0x1FE7], [0x1FF2, 0x1FF4], [0x1FF6, 0x1FF7], [0x2071, 0x2071], [0x207F, 0x207F], [0x210A, 0x210A], [0x210E, 0x210F], [0x2113, 0x2113], [0x212F, 0x212F], [0x2134, 0x2134], [0x2139, 0x2139], [0x213D, 0x213D], [0x2146, 0x2149], [0xFB00, 0xFB06], [0xFB13, 0xFB17], [0xFF41, 0xFF5A]];
    
errorCount = 0;
count = 0;
for (indexI = 0; indexI < Ll.length; indexI++) {
  for (indexJ = Ll[indexI][0]; indexJ <= Ll[indexI][1]; indexJ++) {
    try {
      var identifier = String.fromCharCode(indexJ);
      var hex = decimalToHexString(indexJ);
      eval("var " + identifier + "=1");
      if (eval(identifier + "===1") !== true) {
        $ERROR('#' + hex + ' ');
        errorCount++;
      }
    } catch (e) {
      $ERROR('#' + hex + ' ');
      errorCount++;
    }
    count++;
  }
}

if (errorCount > 0) {  
  $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count);
}

function decimalToHexString(n) {
  n = Number(n);
  var h = "";
  for (var i = 3; i >= 0; i--) {
    if (n >= Math.pow(16, i)) {
      var t = Math.floor(n / Math.pow(16, i));
      n -= t * Math.pow(16, i);
      if ( t >= 10 ) {
        if ( t == 10 ) { h += "A"; }
        if ( t == 11 ) { h += "B"; }
        if ( t == 12 ) { h += "C"; }
        if ( t == 13 ) { h += "D"; }
        if ( t == 14 ) { h += "E"; }
        if ( t == 15 ) { h += "F"; }
      } else {
        h += String(t);
      }
    } else {
      h += "0";
    }
  }
  return h;
}
