function calcularRendimento(){
    const valorRendimento = parseFloat(document.getElementById("rendimento").value);

    if (!isNaN(valorRendimento)) {
        if(valorRendimento > 0) {
            const despesasFixas = valorRendimento*(50/100);
            const despesasVariaveis = valorRendimento*(30/100);
            const investimento = valorRendimento*(20/100);

            document.getElementById("resultadoDespesasFixas").innerText=despesasFixas;
            document.getElementById("resultadoDespesasVariaveis").innerText=despesasVariaveis;
            document.getElementById("resultadoInvestimentos").innerText=investimento;
        } else {
            alert("É necessário informar um valor acima de 0 :(")
        }
    } else {
        alert("Caracteres não são permitidos :(")
}}