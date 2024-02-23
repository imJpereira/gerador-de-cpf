export default class CpfValidator {
    constructor(cpf) {
        Object.defineProperty(this, "cleanCPF", {
            value: cpf.replace(/\D+/g, ''),
            enumerable: false,
            writable: false,
            configurable: false
        })
    }

    validateCpf() {
        if (this.cleanCPF.length !== 11) return false;
        if (typeof this.cleanCPF !== "string") return false;
        if (this.isSequential()) return false;
        
        return this.cleanCPF === this.calculation(this.getDigit9());
    }

    isSequential() {
        const sequence = this.cleanCPF[0].repeat(11);
        return sequence === this.cleanCPF;
    }

    //SELECIONA 9 PRIMEIROS DIGITOS
    getDigit9() {
        return this.cleanCPF.slice(0, -2);
    }
 
    //RECEBE OS 9 PRIMEIROS DIGITOS E ADICIONA OS DOIS ÚLTIMOS
    static calculation(digit9) {
        const baseArray = Array.from(digit9);
        for(let i = 11; i <= 12; i++) {

            let descendent = i
            const multiplied = baseArray.map(digit => {
                descendent--
                return descendent * Number(digit);
            })

            const sum = multiplied.reduce((ac, digit) => ac += digit, 0);

            const digit = 11 - (sum % 11);
            
            if (digit >= 10) {
                baseArray.push('0');
            }  else {
                baseArray.push(digit);
            }
        };
        return baseArray;
    }
}