// Foncion qui tri un tableau de nombre

function solution(nums){
    return nums.sort(function(a,b){
      return a - b;
      });
  };


// autre methode sans utilisé sort


  function bubblesort(ar) {
    for (var i=0; i<ar.length-1; i++) {
      for (var j=i+1; j<ar.length; j++) {
        if (ar[i] > ar[j]) {
          var temp = ar[i];
          ar[i] = ar[j];
          ar[j] = temp;
        }
      }
    }
  }
  
  function solution(nums){
    if (nums == null || nums.length < 1) return [];
    else {
      bubblesort(nums);
      return nums;
    }
  }