
document.getElementById('form-orcamento').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const caminhao = form.caminhao.value;
    const ajudantes = parseInt(form.ajudantes.value);
    const guardaRoupas = parseInt(form.guarda_roupas.value);
    const painelTV = form.painel_tv.checked;
    const cama = form.cama.checked;
    const limpeza = form.limpeza.checked;
    const reparos = form.reparos.checked;

    let total = 0;
    let detalhes = "Pacote de Mudança Completo\n\n";

    if (caminhao === "grande") total += 385, detalhes += "* Caminhão Grande: R$385\n";
    if (caminhao === "medio") total += 300, detalhes += "* Caminhão Médio: R$300\n";
    if (caminhao === "pequeno") total += 250, detalhes += "* Caminhão Pequeno: R$250\n";

    total += ajudantes * 175;
    detalhes += `* Mão de Obra: ${ajudantes} x R$175 = R$${ajudantes * 175}\n`;

    total += guardaRoupas * 130;
    detalhes += `* ${guardaRoupas} Guarda-Roupas x R$130 = R$${guardaRoupas * 130}\n`;

    if (painelTV) total += 55, detalhes += "* Painel de TV: R$55\n";
    if (cama) total += 40, detalhes += "* Cama: R$40\n";

    if (limpeza) total += 150, detalhes += "* Limpeza: R$150\n";
    if (reparos) total += 200, detalhes += "* Reparos e Pintura: R$200\n";

    detalhes += `\nTotal Estimado: R$${total}`;

    document.getElementById("resultado").innerText = detalhes;
    document.getElementById("whatsappBtn").style.display = "block";
    document.getElementById("whatsappBtn").onclick = () => {
        const msg = encodeURIComponent("Olá, acabo de realizar um orçamento inteligente:\n\n" + detalhes);
        window.open("https://wa.me/55SEUNUMERO?text=" + msg, "_blank");
    }
});
