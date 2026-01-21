const {sum} = require('./app.js')

test('adds 14 + 9 to equal 23',()=>{
    let total = sum(14, 9);

    expect(total).toBe(23)
})

test("3 euros to dollars to equal 3.21", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3);
    const expected = 3.21;

    expect(dollars).toBe(expected);
})

test("3.21 dollars to yen to equal 469.5", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.21);
    const expected = 469.5;

    expect(yen).toBe(expected); 
})


test("469.5 yens to pounds to equal 2.61 ", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(469.5);
    const expected = 2.61

    expect(pound).toBe(expected);
})