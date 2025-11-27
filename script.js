// Configuración para que el dinero se vea así: $ 30.000
const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

function calcular() {
    // 1. OBTENER VALORES (INPUTS)
    const totalRecibo = parseFloat(document.getElementById('totalRecibo').value) || 0;
    const totalAseo = parseFloat(document.getElementById('totalAseo').value) || 0;
    
    const persP1 = parseFloat(document.getElementById('p1_personas').value) || 0;
    const persP2 = parseFloat(document.getElementById('p2_personas').value) || 0;
    const persP3 = parseFloat(document.getElementById('p3_personas').value) || 0;

    // 2. LÓGICA MATEMÁTICA
    
    // Calcular Luz Total (Lo que queda tras restar el aseo)
    const totalLuz = totalRecibo - totalAseo;

    // Aseo por Piso (Dividido entre 3 pisos fijos)
    const aseoPorPiso = totalAseo / 3;

    // Total de personas viviendo en la casa
    const totalPersonas = persP1 + persP2 + persP3;

    // Costo de luz por cabeza
    let luzPorPersona = 0;
    if (totalPersonas > 0) {
        luzPorPersona = totalLuz / totalPersonas;
        totalPersonas = luzPorPersona
    }

    // 3. CÁLCULOS POR PISO
    
    // Piso 1
    const p1_costoLuz = luzPorPersona * persP1;
    const p1_total = aseoPorPiso + p1_costoLuz;

    // Piso 2
    const p2_costoLuz = luzPorPersona * persP2;
    const p2_total = aseoPorPiso + p2_costoLuz;

    // Piso 3
    const p3_costoLuz = luzPorPersona * persP3;
    const p3_total = aseoPorPiso + p3_costoLuz;

    // 4. MOSTRAR RESULTADOS EN EL HTML
    
    // Hacemos visible la caja de resultados
    document.getElementById('resultados').style.display = 'block';

    // Resumen Superior
    document.getElementById('resLuzTotal').innerText = formatter.format(totalLuz);
    document.getElementById('resLuzPersona').innerText = formatter.format(luzPorPersona);
    document.getElementById('resAseoPiso').innerText = formatter.format(aseoPorPiso);

    // Detalle Piso 1
    document.getElementById('p1_aseo').innerText = formatter.format(aseoPorPiso);
    document.getElementById('p1_luz').innerText = formatter.format(p1_costoLuz);
    document.getElementById('p1_total').innerText = formatter.format(p1_total);

    // Detalle Piso 2
    document.getElementById('p2_aseo').innerText = formatter.format(aseoPorPiso);
    document.getElementById('p2_luz').innerText = formatter.format(p2_costoLuz);
    document.getElementById('p2_total').innerText = formatter.format(p2_total);

    // Detalle Piso 3
    document.getElementById('p3_aseo').innerText = formatter.format(aseoPorPiso);
    document.getElementById('p3_luz').innerText = formatter.format(p3_costoLuz);
    document.getElementById('p3_total').innerText = formatter.format(p3_total);
}
