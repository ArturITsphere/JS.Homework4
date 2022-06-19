console.log('---script 4-2---')
const context={
  a:1,
  b:2,
  c:3,
};
const sum =function(){
  let result=0;
  for (var key in this)
  {
    let number= this [key];
    if (Number.isInteger(number)&& number>0){
      result +=number;
    }
  }
  return result;
}
const sumFunction = sum.bind(context);
let sumFunctionResult=sumFunction();
console.log('context',context);
console.log('result: ${sumFunctionResult}');





  console.log('---script 4-4---');
  const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
  };
  function getCity(){
    let result=Array();
    let matrix= Object.enties (citiesAndContries);
    for(let i=0;  i< matrix.length; i++){
      let item =matix [i];
      if (Array.isArray(item) && item.Length ==2){
        let phrase ='${item[0]} -это ${item[1]}';
        result.push(phrase);
      }
    }
    console.log(matrix);
    return result;
  }
const getCityResult = getcity();
console.log(getCityResult);


console.log('---script 4-3---')
const va1Object0={
  values:[1,2,4,8,'8',3,10,null,false],
};
function ParseNumber(value){
  if (Number.isNaN(value))
  return null;
  return Number (value);
}
function getNewArray(){
  if (this.values===underfined){
  return;
  }
  let result=[];
for (const value of this.values) {
  const number = ParseNumber(value);
  if (number==null){
    continue;
  }
  if (number %2 == 0 && 2< number && number <10){
    result.push(number);
  }
 }
 return result;
};

  const getNewArrayFunc= getNewArray.bind(va1Object0);
  const newArrayResult = getNewArrayFunc();
  console.info(newArrayResult);



  console.log('---script 4-5---')

  const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда','Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'],
}
function getNameOfDay (lang,dayNumber){
  const daysOfWeek = namesOfDays[Lang];
  if (1>dayNumber || dayNumber>7){
    return underfined;
  }
  let index = dayNumber -1;
  let dayName = daysOfWeek[index];
  return dayName;
}
let dayName =getNameOfDay ('en',7);
console.log(dayName);
dayName = getNameOfDay('ru',3);
console.info (dayName);





