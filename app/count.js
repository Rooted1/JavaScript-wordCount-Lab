module.exports = function(str){
  // word : function (str) {
  var result = {};
  var wordArr = str.replace(/[\n\t]/gi,' ')
                   .replace(/ {2,}/g, " ").split(' ');
      wordArr.forEach (function(word){
        if (Object.hasOwnProperty.call(result, word)){
          result[word] += 1;
        } else {
          result[word] = 1;
        }
      });
  
  return result;
}