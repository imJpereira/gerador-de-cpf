import CpfValidator from "./CpfValidator";

export default class CpfGenerator {
    
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    generateNewCpf() {
        this.newCpf = this.rand();
        this.newCpf = Array.from(this.newCpf);
        this.calculation();
        return this.newCpf.join('');
    }

    calculation() {
        for(let i = 11; i <= 12; i++) this.calculateDigit(i);
    }

    calculateDigit(i) {
        const multiplied = this.multiply(i);
        const added = this.sum(multiplied);
        const digit = this.getDigit(added);
        this.newCpf.push(String(digit));
    }

    multiply(i) {
        return this.newCpf.map(digit => {
            i--
            return i * Number(digit);
        })
    }

    sum = multipliedArray => multipliedArray.reduce((ac, digit) => ac += digit, 0)

    getDigit(number) {
        const final = 11 - (number % 11);
        return (final >= 10 ? 0 : final);
    }   
}