import functions  from '../../src/function/functions';

test('sum(2 + 2) 等于 4', () => {
    expect(functions.sum(2, 2)).toBe(4);
})

// describe("A suite is just a function", function() {
//     var a;
//
//     it("and so is a spec", function() {
//         a = true;
//
//         expect(a).toBe(true);
//     });
// });
