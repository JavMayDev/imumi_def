import { run, stop, step, interval } from './animation'

document
    .getElementById('runBtn')
    .addEventListener('click', _ => (interval = run()))
document.getElementById('stopBtn').addEventListener('click', stop)
document.getElementById('stepBtn').addEventListener('click', _ => step(1))
document.getElementById('prevBtn').addEventListener('click', _ => step(-1))
