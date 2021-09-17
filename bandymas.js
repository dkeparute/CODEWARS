function arrayMadness(a, b) {
  if(a.length >= 1) {
      for(i = 0; i<a.length; i++) {
          a = a[i];
          a[i] = a[i]**2
      }
      return a[i];
  }
//   if(b.length >= 1) {
//       b = b**2
//   }
//   if(a > b) {
//       return true;
//   } else {
//       return false;
//   }
}
console.log(arrayMadness([10,5,10]));

