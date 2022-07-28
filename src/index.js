module.exports = function toReadable (number) {
    let str = '';
  let arr = Array.from(String(number), Number);
  if (arr.length == 1) {
    switch (arr[0]) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two'; 
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    }
  } else if (arr.length == 2) {
    switch (arr[0]) {
        case 1: switch (arr[1]) {
            case 0: return 'ten';
            case 1: return 'eleven';
            case 2: return 'twelve';
            case 3: return 'thirteen';
            case 4: return 'fourteen';
            case 5: return 'fifteen';
            case 6: return 'sixteen';
            case 7: return 'seventeen';
            case 8: return 'eighteen';
            case 9: return 'nineteen';
        }
        case 2: str = str + 'twenty'; break;
        case 3: str = str + 'thirty'; break;
        case 4: str = str + 'forty'; break;
        case 5: str = str + 'fifty'; break;
        case 6: str = str + 'sixty'; break;
        case 7: str = str + 'seventy'; break;
        case 8: str = str + 'eighty'; break;
        case 9: str = str + 'ninety'; break;
    }
    switch (arr[1]) {
        case 0: return str;
        case 1: return str + ' one';
        case 2: return str + ' two';
        case 3: return str + ' three';
        case 4: return str + ' four';
        case 5: return str + ' five';
        case 6: return str + ' six';
        case 7: return str + ' seven';
        case 8: return str + ' eight';
        case 9: return str + ' nine';
    }
  } else if (arr.length == 3) {
    switch (arr[0]) {
        case 1: str = str + 'one hundred'; break;
        case 2: str = str + 'two hundred'; break;
        case 3: str = str + 'three hundred'; break;
        case 4: str = str + 'four hundred'; break;
        case 5: str = str + 'five hundred'; break;
        case 6: str = str + 'six hundred'; break;
        case 7: str = str + 'seven hundred'; break;
        case 8: str = str + 'eight hundred'; break;
        case 9: str = str + 'nine hundred'; break;
    }
    switch (arr[1]) {
        case 0: switch (arr[2]) {
            case 0: return str;
            case 1: return str + ' one';
            case 2: return str + ' two';
            case 3: return str + ' three';
            case 4: return str + ' four';
            case 5: return str + ' five';
            case 6: return str + ' six';
            case 7: return str + ' seven';
            case 8: return str + ' eight';
            case 9: return str + ' nine';
        }
        case 1: switch (arr[2]) {
            case 0: return str + ' ten';
            case 1: return str + ' eleven';
            case 2: return str + ' twelve';
            case 3: return str + ' thirteen';
            case 4: return str + ' fourteen';
            case 5: return str + ' fifteen';
            case 6: return str + ' sixteen';
            case 7: return str + ' seventeen';
            case 8: return str + ' eighteen';
            case 9: return str + ' nineteen';
        }
        case 2: str = str + ' twenty'; break;
        case 3: str = str + ' thirty'; break;
        case 4: str = str + ' forty'; break;
        case 5: str = str + ' fifty'; break;
        case 6: str = str + ' sixty'; break;
        case 7: str = str + ' seventy'; break;
        case 8: str = str + ' eighty'; break;
        case 9: str = str + ' ninety'; break;
    }
    switch (arr[2]) {
        case 0: return str;
        case 1: return str + ' one';
        case 2: return str + ' two';
        case 3: return str + ' three';
        case 4: return str + ' four';
        case 5: return str + ' five';
        case 6: return str + ' six';
        case 7: return str + ' seven';
        case 8: return str + ' eight';
        case 9: return str + ' nine';
    }
  }
}
