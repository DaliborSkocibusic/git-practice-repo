2 == '2'; // Outputs true. 2 number logically equivalent to '2'
2 === 2; // Outputs true, they are the same
2 === '2';// False, logically equivalent but different type
'2' + 3 == 23; // String 2 + 3 makes the number / String 23

'2' + 3 === 23; // False, differrent type


'2' + 3 === 5; // False: Adding string with number is str concatanation
10 % 3; // 1: Remainder when 10 div 3 is 1
10 % 3 === 1; // True: As above, checks to see if the same. 
(100 % 7) % 5;//2: 100 % 7 is 2. 2 % 5 is 2.
(100 % 7) % 5 !== 0; //True: as above left side is 2, 2 !== 0 is true
(100 % 7) % 9 == 2; // True: 100%7 is 2. 2 % 9 is 2. left equals right
!(10 % 2); // True: 10%2 is 0. !0 is true
!!!!((10 % 7) % 3); //False: 10%7 is 3. 3%3 is 0.!0 is true, !!0 is false, !!!0 is true, !!!!0 is false
10 % 3 === -1 % 2; // False: 10%3 is 1. -1 % 2 is -1. 1 === -1 is false.
(892783 != '89278' + 3) == 0;// True. '89278' + 3 is '892783. LHS != RHS is false. False == 0 is true
true && false; // False
false || true; // True
true || false; // True
true || false; // True || false is true. True + true is true.
true || false + true; // True: Answer is true. But true + true is 2...
true * false && false + true; //0: True * false is 0. + is next. False + true is 1. 0 && 1 is 0
10 && 123 && -1 && 3; //3:  All truthy values, will give last element. 
10 && 123 && 0 && 3; // 0: contains a falsey value. Will be 0
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1; // 0
//parseInt('Roisin'): NaN. 
//Equation now (10 && (123 || '') && NaN) || 23 / 23 - 1; 
//(123 || ''); = 123. 
//Equation now (10 && 123 && NaN) || 23 / 23 - 1;
// (10 && 123 && NaN) = NaN
//Equation now NaN || 23 / 23 - 1; 
//23/23 - 1 = 0
//Equation now NaN || 0
//NaN || 0 is 0

3 && 'Calum' && ('' || 26); //26
// ('' || 26) is 26
// Equation now 3 && 'Calum' && 26; 
// All truthy so final value remains. 26
3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog'));
//"CatDog"
// ('' + 1 && 'Cat' + 'Dog') All truth so final value.
// Except lat two elements are string concat so it becomes
// "CatDog"
// New equation 3 && 'Remi' && (null || 86 * 0 || CatDog');
// (null || 86 * 0 || CatDog') Becomes "CatDog"
// (null || 86 * 0 || CatDog') Becomes "CatDog"