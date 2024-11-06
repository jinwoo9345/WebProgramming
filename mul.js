
onmessage = function(e){
    let res = 0;
    let num1 = parseInt(e.data.num1);
    let num2 = parseInt(e.data.num2);
    res=num1*num2;
    this.postMessage(res);
}