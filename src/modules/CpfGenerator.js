import CpfValidator from "./CpfValidator";

export default class CpfGenerator {
    
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    generateNewCpf() {
        const digit9 = this.rand();
        let newCpf = CpfValidator.calculation(digit9);
        newCpf.splice(3, 0, '.');
        newCpf.splice(6, 0, '.')
        newCpf.splice(9, 0, '.')
        newCpf.splice(12, 0, '-')
        return newCpf.join('');
    } 
}