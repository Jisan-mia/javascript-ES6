const ages = [13, 15, 14, 17, 16];
const ages2 = [15, 17, 16];
const ages3 =[25, 20, 36, 22];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5,  ...ages2]

//console.log(allAges2);

const business = 600;
const minister = 450;
const sochib = 545;
const takaPoisa = [650, 450, 500, 800, 450, 656];
const maximum = Math.max(...takaPoisa);
//console.log(maximum);

const nums =[56, 45, 4, 85, 54, 24, 6, 45, 68, 97];
const maxiMum = Math.max(...nums);
console.log(maxiMum);