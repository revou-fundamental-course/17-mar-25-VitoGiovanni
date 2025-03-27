function hitungLuas() {
    let sisi = document.getElementById("sisiLuas").value;
    
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    sisi = parseFloat(sisi);

    let luas = sisi * sisi;
    let hasil = `
        L = S x S<br>
        S = ${sisi} cm<br>
        L = ${sisi} x ${sisi} = ${luas}
    `;

    document.getElementById("hasilLuas").innerHTML = hasil;
}

function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;
    
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    sisi = parseFloat(sisi);

    let keliling = 4 * sisi;
    let hasil = `
        K = 4 x S<br>
        S = ${sisi} cm<br>
        K = 4 x ${sisi} = ${keliling}
    `;
    document.getElementById("hasilKeliling").innerHTML = hasil;
}

function hitungLuasPP() {
    let panjang = document.getElementById("panjangLuas").value;
    let lebar = document.getElementById("lebarLuas").value;

    if (panjang === "" || lebar === "" || isNaN(panjang) || isNaN(lebar)) {
        alert("Masukkan angka yang valid untuk panjang dan lebar!");
        return;
    }

    panjang = parseFloat(panjang);
    lebar = parseFloat(lebar);
    let luasPP = panjang * lebar;

    let hasil = `
        L = P x L<br>
        P = ${panjang} cm<br>
        L = ${lebar} cm<br>
        L = ${panjang} x ${lebar} = ${luasPP}
    `;
    document.getElementById("hasilLuasPP").innerHTML = hasil;
}

function hitungKelilingPP() {
    let panjang = document.getElementById("panjangKeliling").value;
    let lebar = document.getElementById("lebarKeliling").value;
    
    if (panjang === "" || lebar === "" || isNaN(panjang) || isNaN(lebar)) {
        alert("Masukkan angka yang valid untuk panjang dan lebar!");
        return;
    }

    panjang = parseFloat(panjang);
    lebar = parseFloat(lebar);
    let kelilingPP = 2 * (panjang + lebar);

    let hasil = `
        K = 2 x (P + L)<br>
        P = ${panjang} cm<br>
        L = ${lebar} cm<br>
        K = 2 x (${panjang} + ${lebar}) = ${kelilingPP}
    `;      

    document.getElementById("hasilKelilingPP").innerHTML = hasil;
}

function resetLuas() {
    document.getElementById("sisiLuas").value = "";
    document.getElementById("hasilLuas").textContent = "";
}

function resetKeliling() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKeliling").textContent = "";
}

function resetLuasPP() {
    document.getElementById("panjangLuas").value = "";
    document.getElementById("lebarLuas").value = "";
    document.getElementById("hasilLuasPP").textContent = "";
}

function resetKelilingPP() {
    document.getElementById("panjangKeliling").value = "";
    document.getElementById("lebarKeliling").value = "";
    document.getElementById("hasilKelilingPP").textContent = "";
}