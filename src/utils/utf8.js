export const utf8Decode = (strData) => {
  let tmpArr = [];

  let i = 0;
  let c1 = 0;
  let seqlen = 0;

  strData += '';

  while (i < strData.length) {
    c1 = strData.charCodeAt(i) & 0xff;
    seqlen = 0;

    if (c1 <= 0xbf) {
      c1 = c1 & 0x7f;
      seqlen = 1;
    } else if (c1 <= 0xdf) {
      c1 = c1 & 0x1f;
      seqlen = 2;
    } else if (c1 <= 0xef) {
      c1 = c1 & 0x0f;
      seqlen = 3;
    } else {
      c1 = c1 & 0x07;
      seqlen = 4;
    }

    for (var ai = 1; ai < seqlen; ++ai) {
      c1 = (c1 << 0x06) | (strData.charCodeAt(ai + i) & 0x3f);
    }

    if (seqlen === 4) {
      c1 -= 0x10000;
      tmpArr.push(String.fromCharCode(0xd800 | ((c1 >> 10) & 0x3ff)));
      tmpArr.push(String.fromCharCode(0xdc00 | (c1 & 0x3ff)));
    } else {
      tmpArr.push(String.fromCharCode(c1));
    }

    i += seqlen;
  }

  return tmpArr.join('');
};
