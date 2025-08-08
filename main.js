function somar(event) {
    event.preventDefault();

    const valor1 = document.querySelector("#valor-1").valueAsNumber;
    const valor2 = document.querySelector("#valor-2").valueAsNumber;

    const resultado = valor1 + valor2;

    const paragrafoResultado = document.querySelector("#resultado");
    paragrafoResultado.textContent = `Resultado: ${resultado}`;
}