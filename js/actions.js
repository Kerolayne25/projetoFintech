console.log('Arquivo actions.js carregado corretamente.');


/* ================= CONFIGURAÇÕES INDIVIDUAIS DA TELA INICIO ================= */
// Data de Hoje
// Função para obter a data de hoje no formato DD/MM/AAAA
function obterDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
};

// Espera o DOM estar completamente carregado antes de executar
document.addEventListener('DOMContentLoaded', function () {
    // Atualizar o conteúdo da div com a data de hoje
    document.getElementById("dataAtual").textContent = obterDataAtual();
});


// Gráfico de Receitas
var ctxVendas = document.getElementById('graficoVendas').getContext('2d');
var graficoVendas = new Chart(ctxVendas, {
    type: 'bar',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Receitas',
            data: [10000, 12000, 15000, 17000],
            backgroundColor: 'green'
        }]
    }
});

// Gráfico de Despesas
var ctxCustos = document.getElementById('graficoCustos').getContext('2d');
var graficoCustos = new Chart(ctxCustos, {
    type: 'bar',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Despesas',
            data: [8000, 9000, 11000, 13000],
            backgroundColor: 'red'
        }]
    }
});

/* ================= FIM - CONFIGURAÇÕES INDIVIDUAIS DA TELA INICIO ================= */

/* ================= CONFIGURAÇÕES INDIVIDUAIS DA TELA RECEITAS ================= */

// Script para definir a data de hoje como valor do campo de data
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('recipeDate');
    if (dateInput) { // Verifica se o campo existe na página antes de aplicar o valor
        const today = new Date().toISOString().split('T')[0]; // Obtém a data no formato yyyy-mm-dd
        dateInput.value = today; // Define a data de hoje como valor do campo
    }
});


// Script para definir se o Modal é para Adicionar ou Editar
function abrirEditarReceita() {
    const modalTitle = document.getElementById('addRecipeModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Editar Receita";
    }
};

function abrirAdicionarReceita() {
    const modalTitle = document.getElementById('addRecipeModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Adicionar Receita";
    }
};

/* ================= FIM - CONFIGURAÇÕES INDIVIDUAIS DA TELA RECEITAS ================= */


/* ================= CONFIGURAÇÕES INDIVIDUAIS DA TELA DESPESAS ================= */

function abrirEditarDespesa() {
    const modalTitle = document.getElementById('addExpenseModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Editar Despesa";
    }
};

function abrirAdicionarDespesa() {
    const modalTitle = document.getElementById('addExpenseModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Nova Despesa";
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('expenseDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }

    // Campos necessários para verificar o status e exibir datas
    const expenseAmountInput = document.getElementById('expenseAmount');
    const expensePaidInput = document.getElementById('expensePaid');
    const expenseStatusInput = document.getElementById('expenseStatus');
    const paymentDateContainer = document.getElementById('paymentDateContainer');
    const dueDateContainer = document.getElementById('dueDateContainer');

    // Função para atualizar o status e exibir campos de data de pagamento ou previsão
    function updateStatus() {
        const expenseAmount = parseFloat(expenseAmountInput.value) || 0;
        const expensePaid = parseFloat(expensePaidInput.value) || 0;

        if (expensePaid >= expenseAmount && expenseAmount > 0) {
            expenseStatusInput.value = "Pago";
            paymentDateContainer.style.display = "block";
            dueDateContainer.style.display = "none";
        } else {
            expenseStatusInput.value = "Em Aberto";
            paymentDateContainer.style.display = "none";
            dueDateContainer.style.display = "block";
        }
    }

    // Função para inicializar os eventos e status quando o modal é mostrado
    function initializeModal() {
        expenseAmountInput.addEventListener('input', updateStatus);
        expensePaidInput.addEventListener('input', updateStatus);
        updateStatus(); // Chama a função para definir o status inicial
    }

    // Detecta quando o modal é mostrado e chama initializeModal
    const addExpenseModal = document.getElementById('addExpenseModal');
    addExpenseModal.addEventListener('show.bs.modal', initializeModal);
});


/* ================= FIM - CONFIGURAÇÕES INDIVIDUAIS DA TELA DESPESAS ================= */


/* ================= CONFIGURAÇÕES INDIVIDUAIS DA TELA SONHOS ================= */

function abrirEditarSonho() {
    const modalTitle = document.getElementById('addDreamModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Editar Sonho";
    }
};

function abrirAdicionarSonho() {
    const modalTitle = document.getElementById('addDreamModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Novo Sonho";
    }
};

/* ================= FIM - CONFIGURAÇÕES INDIVIDUAIS DA TELA SONHOS ================= */


/* ================= CONFIGURAÇÕES INDIVIDUAIS DA TELA PERFIL ================= */
// Funções para abrir modais específicos na tela de Perfil

// Editar Nome e Sobrenome
function abrirEditarNome() {
    const modalTitle = document.getElementById('editNameModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Editar Nome e Sobrenome";
    }
}

// Editar E-mail
function abrirEditarEmail() {
    const modalTitle = document.getElementById('editEmailModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Editar E-mail";
    }
}

// Alterar Senha com validação de confirmação
function abrirAlterarSenha() {
    const modalTitle = document.getElementById('changePasswordModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Alterar Senha";
    }

    const senhaForm = document.getElementById('changePasswordForm');
    senhaForm.addEventListener('submit', function(event) {
        const novaSenha = document.getElementById('newPasswordInput').value;
        const confirmaSenha = document.getElementById('confirmPasswordInput').value;
        const erroSenha = document.getElementById('passwordError');
        
        if (novaSenha !== confirmaSenha) {
            event.preventDefault();
            erroSenha.style.display = 'block';
        } else {
            erroSenha.style.display = 'none';
        }
    });
}

// Preferências de notificações
function abrirPreferencias() {
    const modalTitle = document.getElementById('preferencesModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Preferências";
    }
}

// Logout com confirmação
function abrirLogout() {
    const modalTitle = document.getElementById('logoutModalLabel');
    if (modalTitle) {
        modalTitle.textContent = "Logout";
    }
}

// Adiciona listeners para abrir os modais
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.icon-edit-name').addEventListener('click', abrirEditarNome);
    document.querySelector('.icon-edit-email').addEventListener('click', abrirEditarEmail);
    document.querySelector('.icon-change-password').addEventListener('click', abrirAlterarSenha);
    document.querySelector('.icon-preferences').addEventListener('click', abrirPreferencias);
    document.querySelector('.icon-logout').addEventListener('click', abrirLogout);
});

/* ================= FIM - CONFIGURAÇÕES INDIVIDUAIS DA TELA PERFIL ================= */
