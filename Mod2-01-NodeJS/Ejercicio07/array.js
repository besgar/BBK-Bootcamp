function numerosConsecutivos(numero){
    let array=[];

    for(let i=1; i<=10; i++){
        array.push(numero+i);
    }
    return array;
};

module.exports=numerosConsecutivos;