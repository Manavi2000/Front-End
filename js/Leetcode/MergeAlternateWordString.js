//https://leetcode.com/submissions/detail/1113164440/
//6/Dec/2023
var mergeAlternately = function(word1, word2) {
    var output="";
    var w1=0,w2=0
    for(var i=0 ; i<word1.length+word2.length ; i++){
        if( w1 <word1.length && w2 < word2.length)
        output+= (i%2==0)? word1[w1++] : word2[w2++];
        else if ( w1 <word1.length){
            output+=word1.substring(w1);
            break;
        }
        else{
            output+=word2.substring(w2);
            break;
        }
    }
   
return output;}
