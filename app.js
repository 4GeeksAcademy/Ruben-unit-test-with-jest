const sum= (a,b)=>{
    return a+b;
}

const fromEuroToDollar = (euro)=>{
    return euro * 1.07
}

const fromDollarToYen = (dollar)=>{
    return (dollar/1.07)*156.5
}

const fromYenToPound = (yen)=>{
    return (yen/156.5)*0.87
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}