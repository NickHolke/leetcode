var defangIPaddr = function(address) {
  let regex = /\./g;
  return address.replace(regex, '[.]');
};