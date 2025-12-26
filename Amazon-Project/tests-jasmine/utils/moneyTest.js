import { formatCurrency } from "../../scripts/utils/money.js";


describe('Test Suite: Format Currency',()=>{
    it('Convert Cents to Dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('Works with Zero',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('Rounds Up to Nearest Cent',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});