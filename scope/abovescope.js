function a(){
    var b=10;
    c();
    function c(){

    }
}

a();
console.log(b);   //because it is in glaobal space and has lexical environmnet(reference to environment of its parent as null where 'b' doesn;t exists