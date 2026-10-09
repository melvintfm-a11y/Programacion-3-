function recoverSite() {
    const errorScreen = document.getElementById('error-screen');
    if (errorScreen) {
        errorScreen.style.transition = 'opacity 0.8s ease';
        errorScreen.style.opacity = '0';
        setTimeout(() => {
            errorScreen.style.display = 'none';
        }, 800);
    }
}


const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', 'light');
        }
    });
}

function triggerEasterEgg() {
    alert("🎉 ¡FELICIDADES! Has encontrado el Easter Egg del protocolo de emergencia.\n\nCódigo de Descuento Especial Pyme: #RESISTENCIA2026");
}


function toggleChat() {
    const chatBody = document.getElementById('chatbot-body');
    const icon = document.getElementById('chat-toggle-icon');
    if (chatBody.classList.contains('hidden')) {
        chatBody.classList.remove('hidden');
        icon.textContent = '▼';
    } else {
        chatBody.classList.add('hidden');
        icon.textContent = '▲';
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const logs = document.getElementById('chat-logs');
    const text = input.value.trim().toLowerCase();

    if (text === '') return;


    logs.innerHTML += `<p><strong>Tú:</strong> ${input.value}</p>`;
    
    let reply = "No comprendo ese comando. Intenta escribir 'servicios', 'menu', 'ubican' o 'hackeo'.";
    if (text.includes('servicios') || text.includes('menu')) {
        reply = "Ofrecemos Café Criptográfico, espacios de Coworking Búnker y Talleres de Ciberseguridad.";
    } else if (text.includes('contacto') || text.includes('ubican')) {
        reply = "Estamos ubicados en Santo Domingo, R.D. Revisa la pestaña 'Contacto y Pruebas' para ver el mapa.";
    } else if (text.includes('hackeo') || text.includes('misterio')) {
        reply = "Fuimos atacados mediante un USB malicioso, ¡pero resurgimos más fuertes con tecnología de punta!";
    }

    setTimeout(() => {
        logs.innerHTML += `<p class="bot-msg"><strong>Bot:</strong> ${reply}</p>`;
        logs.scrollTop = logs.scrollHeight;
    }, 400);

    input.value = '';
}


function calculateQuote(event) {
    event.preventDefault();
    const hours = parseInt(document.getElementById('hours').value);
    const rate = parseInt(document.getElementById('type').value);
    const resultDiv = document.getElementById('quote-result');

    const total = hours * rate;
    resultDiv.innerHTML = `<p style="color: var(--accent-color); font-weight: bold; margin-top: 15px;">
        Total estimado: RD$ ${total.toLocaleString('es-DO')} DOP (Incluye impuestos y acceso a internet cuántico)
    </p>`;
}