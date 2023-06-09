document.addEventListener('DOMContentLoaded', () => {
    fetch('rewBolsterAsfk.csv')
      .then(response => response.text())
      .then(data => {
        const [header, ...rows] = data.split('\n');
        const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x] = rows[0].split(',');

  
        document.getElementById('A').textContent = `${a}`;
        document.getElementById('B').textContent = `${b}`;
        document.getElementById('C').textContent = `${c}`;
        document.getElementById('D').textContent = `${d}`;
        document.getElementById('E').textContent = `${e}`;
        document.getElementById('F').textContent = `${f}`;
        document.getElementById('G').textContent = `${g}`;
        document.getElementById('H').textContent = `${h}`;
        document.getElementById('I').textContent = `${i}`;
        document.getElementById('J').textContent = `${j}`;
        document.getElementById('K').textContent = `${k}`;
        document.getElementById('L').textContent = `${l}`;
        document.getElementById('M').textContent = `${m}`;
        document.getElementById('N').textContent = `${n}`;
        document.getElementById('O').textContent = `${o}`;
        document.getElementById('P').textContent = `${p}`;
        document.getElementById('Q').textContent = `${q}`;
        document.getElementById('R').textContent = `${r}`;
        document.getElementById('S').textContent = `${s}`;
        document.getElementById('T').textContent = `${t}`;
        document.getElementById('U').textContent = `${u}`;
        document.getElementById('V').textContent = `${v}`;
        document.getElementById('W').textContent = `${w}`;
        document.getElementById('X').textContent = `${x}`;
       

      })
      .catch(error => console.error('Error al leer el archivo CSV:', error));
  });
  