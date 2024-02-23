import CpfGenerator from './modules/CpfGenerator';
import './assets/css/styles.css';

const div = document.getElementById('cpf-gerado');

document.addEventListener('click', (e) => {
    if (e.target.id.includes('button')) {        
        const cpf = new CpfGenerator();
        div.innerText = cpf.generateNewCpf();
    }
    
});
