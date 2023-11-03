      break;
    case "ok":
      return total*.15;
      break;
    case "good":
      return total*.20;
      break;
      case "excellent":
      return total*.30;
      break;
    default:
      return total*.18;
      break;
  }
};
console.log(tipCalculator('excellent', 50))
