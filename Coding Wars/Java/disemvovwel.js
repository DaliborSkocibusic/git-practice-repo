str = "This website is for losers LOL!"

str = str.match(/[^aeiou]/ig).join("");
console.log(str);