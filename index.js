function convertToRoman(num) {
  let roman = []
  while(true) {
    if(num >= 1000) {
      num -= 1000
      roman.push('M')
    }
    else if(num >= 500) {
      if(num >= 1000-100) {
        num -= 1000-100
        roman.push('CM')
      } else {
        num -= 500
        roman.push('D')
      }

      //num -= 500
      //roman.push('D')
    }
    else if(num >= 100) {
      if(num >= 500-100) {
        num -= 500-100
        roman.push('CD')
      } else {
        num -= 100
        roman.push('C')
      }
    }
    else if(num >= 50) {
      if(num >= 100-10) {
        num -= 100-10
        roman.push('XC')
      } else {
        num -= 50
        roman.push('L')
      }
    }
    else if(num >= 10) {
      if(num >= 50-10) {
        num -= 50-10
        roman.push('XL')
      } else {
        num -= 10
        roman.push('X')
      }
    }
    else if(num >= 5) {
      if(num >= 10-1) {
        num -= 10-1
        roman.push('IX')
      } else {
        num -= 5
        roman.push('V')
      }
    }
    else if(num >= 1) {
      if(num >= 5-1) {
        num -= 5-1
        roman.push('IV')
      } else {
        num -= 1
        roman.push('I')
      }
    }
    else {
      break;
    }
  }
  console.log(roman)
  return roman.join('');
}

convertToRoman(4)