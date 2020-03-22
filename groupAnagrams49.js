const groupAnagrams = (strs) => {
  let hashMap = {};
  
  strs.forEach((str) => {
      let key = [...str].sort().join('');
      
      if (!hashMap[key]) {
          hashMap[key] = [];
      }
      
      hashMap[key].push(str);
  })
  
  return Object.values(hashMap)
}