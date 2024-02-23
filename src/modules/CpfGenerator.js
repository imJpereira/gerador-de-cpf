import CpfValidator from "./CpfValidator";

export default class CpfGenerator {
    
    rand(min = 100000000, max = 999999999) {
        const digits = String(Math.floor(Math.random() * (max - min) + min));
        const isSequential = this.checkSequential(digits)
        if (isSequential) this.rand(); 

        return  digits
    }

    checkSequential(digits) {
        const sequence = digits[0].repeat(9);
        return sequence === digits;
    }

    generateNewCpf() {
        const digit9 = this.rand();
        let newCpf = CpfValidator.calculation(digit9);
        newCpf.splice(3, 0, '.');
        newCpf.splice(7, 0, '.')
        newCpf.splice(11, 0, '-')
        return newCpf.join('');
    } 
}