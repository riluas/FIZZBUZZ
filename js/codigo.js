var num=0;

do {
  num=num+1

  if(num % 3 ==0 && num % 5==0){
    console.log("FIZZBUZZ");
  }
    else if (num % 3==0) {
      console.log("FIZZ");
    }
      else if (num % 5==0) {
        console.log("BUZZ");
      }
        else {
          console.log(num);
        }
} while (num<100);
