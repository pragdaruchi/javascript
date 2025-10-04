function calculateInvoice(invId) {
    const qty1 = Number(document.getElementById(`${invId}-qty1`).value) || 0;
    const rate1 = Number(document.getElementById(`${invId}-rate1`).value) || 0;
    const qty2 = Number(document.getElementById(`${invId}-qty2`).value) || 0;
    const rate2 = Number(document.getElementById(`${invId}-rate2`).value) || 0;

    const amount1 = qty1 * rate1;
    const amount2 = qty2 * rate2;

    document.getElementById(`${invId}-amount1`).value = amount1;
    document.getElementById(`${invId}-amount2`).value = amount2;

    const subtotal = amount1 + amount2;
    const gst = subtotal * 0.18; 
    const net = subtotal + gst;

    document.getElementById(`${invId}-subtotal`).innerText = subtotal.toFixed(2);
    document.getElementById(`${invId}-gst`).innerText = gst.toFixed(2);
    document.getElementById(`${invId}-net`).innerText = net.toFixed(2);
}

['inv1', 'inv2'].forEach(inv => {
    ['qty1','rate1','qty2','rate2'].forEach(id => {
        document.getElementById(`${inv}-${id}`).addEventListener('input', () => calculateInvoice(inv));
    });
});

document.getElementById('Additem').addEventListener('click', () => {
    document.getElementById('inv2-name').value = document.getElementById('inv1-name').value;
    document.getElementById('inv2-no').value = document.getElementById('inv1-no').value;
    document.getElementById('inv2-address').value = document.getElementById('inv1-address').value;
    document.getElementById('inv2-date').value = document.getElementById('inv1-date').value;
    document.getElementById('inv2-city').value = document.getElementById('inv1-city').value;
    document.getElementById('inv2-qty1').value = document.getElementById('inv1-qty1').value;
    document.getElementById('inv2-rate1').value = document.getElementById('inv1-rate1').value;
    document.getElementById('inv2-qty2').value = document.getElementById('inv1-qty2').value;
    document.getElementById('inv2-rate2').value = document.getElementById('inv1-rate2').value;

    calculateInvoice('inv2');
});
