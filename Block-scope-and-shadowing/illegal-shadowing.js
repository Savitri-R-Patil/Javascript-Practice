let a=90;
{
    var a=23;
}

// illegal because var even though inside block but it is always created in global space not in block space since let and var with same variable are in same scope it gives error 
 

// it works 
var b=90;
{
    let b=23;
}
