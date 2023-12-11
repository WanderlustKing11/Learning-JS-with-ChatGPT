// Given a string variable 'StrRates', StrRates 
// is a string with delimited list of numbers. 
// This list can be of arbitrary length. The pattern 
// of this list is: 
// Rate1 "," Price 1,1 "," ... Raten "," Price1,n ":L" 
// LockPeriod1 ";" ... Rate2 "," Pricem,2 "," ... Raten "," 
// Pricem,n ":L" LockPeriodm ";".

// The objective of theprogram is to transform this string 
// into the following two-dimensional matrix and display it 
// as an html page, so the output should have a top row of 
// labels for LockPeriods over the Prices, and then there 
// should be a row for the 
// ['rate1', 'price1,1', 'price2,1', 'price3,1']. 
// Then the next row. 
// Here's an example input value: 
// "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;"

const exampleStrRates = '5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20';

const strRates = (str) => {
  const lockPeriods = []
  const row = [];
  
  const dataArr = str.split(';');
  dataArr.map((data) => {
    if (data) {
      const [rates, lockPeriod] = data.split(':L');
      lockPeriods.push('L' + lockPeriod);

      const ratePrices = rates.split(',');
      for (let i = 0; i < ratePrices.length; i += 2) {
        const rate = ratePrices[i];
        const price = ratePrices[i + 1];
        const index = i / 2;

        if (!row[index]) {
          row[index] = [rate];
        }
        row[index].push(price);
      }
    }
  });

  return [lockPeriods, ...row];
}

console.log(strRates(exampleStrRates));