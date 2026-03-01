{
    //block scope 
    var a=10;
    let b=90;
    const c=40;
    console.log(a);
    console.log(b);
    console.log(c);                
}
    console.log(a);    // only 'a' can be accessable  bcz it is inside global object 
    console.log(b);  //  'b' and 'c' cannot be accessable bcz they are inside seperate memoey space ---block object
    console.log(c);