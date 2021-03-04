//1
export function buildPyramid (): void {
  let hashtag: string = '#';
  console.log (hashtag);
  while (hashtag.length <= 6) {
      hashtag += '#';
      console.log (hashtag);
  }
}

//2
export function numsToFizzBuzz (): void {
  for (let i = 1; i<=100; i++) {
    if (i%5 == 0 && i%3 == 0) {
        console.log ("FizzBuzz")
    }
    else if (i%3 == 0) {
        console.log ("Fizz")
    }
    else if (i%5 == 0 && i%3 != 0) {
        console.log ("Buzz")
    }
    else console.log (i)
  }
}

//3
export let createBoard = function(size: number) {
  let hash = '#';
  let space = ' '; 
  for (let i = 0; i < size; i++) {        
      hash += '\n'
      for (let d = 0; d < size; d++) {
      if((i+d) % 2 === 0) {
          hash += space
      }
      else {
          hash += "#"
      }
    };
  };
  console.log(hash)
}

createBoard(8);