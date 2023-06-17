let display = document.getElementById("display");
let result = "0";
const SYMBOL = ["+", "-", "*", "/", "."];
let equalFlg = Boolean("");//イコール押下でtrue

//数字
function inputNum(num) {
  if(equalFlg == false) {//直前がイコール以外
    if(result == "0" && num.value == "00") {
      result = "0";
    }else if(result == "0") {
      result = "" + num.value;
    }else{
      result += num.value;
    }
  }else {//直前がイコール
    if(num.value == "00") {
      result = "0";
    }else {
      result = "" + num.value;
    }
  equalFlg = Boolean("");
  }
  display.textContent = result;
}

//演算子・小数点
function inputOperator(operator) {
  let resultEnd = result.slice(-1);
  if(SYMBOL.includes(resultEnd) == true) {
    result = result.slice(0, -1);
    result += operator.value;
  }else {
    result += operator.value;
  }
  equalFlg = Boolean("");
  display.textContent = result;
}

//AC
function inputAc() {
  result = "0";
  equalFlg = Boolean("");
  display.textContent = "0";
}

//イコール
function inputEqual() {
  display.textContent = eval(result);
  result = display.textContent;
  equalFlg = Boolean("true");
}
