function MD5(input) {
  console.info(input);
  return Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, input).map(function(chr){return (chr+256).toString(16).slice(-2)}).join('')
}

function RangeMD5(input) {
  if (input.map) {            // Test whether input is an array.
    return input.map(MD5); // Recurse over array if so.
  } else {
    return MD5(input)
  }
}
