console.log('Arquivo actions.js carregado corretamente.');

/* ================= CONFIGURAÇÕES INDIVIDUAIS DA TELA REGISTRAR ================= */

// Verifica se o botão "proximoDadosPessoais" existe antes de adicionar o listener
var botaoProximo = document.getElementById('proximoDadosPessoais');
if (botaoProximo) {
    botaoProximo.addEventListener('click', function () {
        var dadosEmpresaTab = document.getElementById('dadosEmpresaTab');
        if (dadosEmpresaTab) {
            dadosEmpresaTab.click(); // Muda para a aba "Dados da Empresa"
        }
    });
};

// Verifica se o botão "voltarDadosEmpresa" existe antes de adicionar o listener
var botaoVoltar = document.getElementById('voltarDadosEmpresa');
if (botaoVoltar) {
    botaoVoltar.addEventListener('click', function () {
        var dadosPessoaisTab = document.getElementById('dadosPessoaisTab');
        if (dadosPessoaisTab) {
            dadosPessoaisTab.click(); // Volta para a aba "Dados Pessoais"
        }
    });
};


/* ================= CONFIGURAÇÕES INDIVIDUAIS DA TELA INICIO ================= */
// Data de Hoje
// Função para obter a data de hoje no formato DD/MM/AAAA
function obterDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

// Espera o DOM estar completamente carregado antes de executar
document.addEventListener('DOMContentLoaded', function () {
    // Atualizar o conteúdo da div com a data de hoje
    document.getElementById("dataAtual").textContent = obterDataAtual();
});


// Gráfico de Vendas
var ctxVendas = document.getElementById('graficoVendas').getContext('2d');
var graficoVendas = new Chart(ctxVendas, {
    type: 'bar',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Vendas',
            data: [10000, 12000, 15000, 17000],
            backgroundColor: 'green'
        }]
    }
});

// Gráfico de Custos
var ctxCustos = document.getElementById('graficoCustos').getContext('2d');
var graficoCustos = new Chart(ctxCustos, {
    type: 'bar',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Custos',
            data: [8000, 9000, 11000, 13000],
            backgroundColor: 'blue'
        }]
    }
});
