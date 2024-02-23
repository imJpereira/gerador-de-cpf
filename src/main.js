import CpfGenerator from './modules/CpfGenerator';
import './assets/css/styles.css';

const div = document.querySelector('.cpf-gerado');
const cpf = new CpfGenerator();
div.innerText = cpf.generateNewCpf();
