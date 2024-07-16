function tabuada(numeros: number[]): string {
  let resultado: string = "";
  for (const n of numeros) {
    for (let i = 0; i <= 10; i++) {
      resultado += `${n} x ${i} = ${n * 1} \n`;

      if (i === 10) {
        resultado += "--------------- \n";
      }
    }
  }
  return resultado;
}

console.log(tabuada([1, 5, 2]));
