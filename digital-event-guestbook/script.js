const inputNama = document.getElementById("inputNama");
const inputPesan = document.getElementById("inputPesan");
const formBukuTamu = document.getElementById("formBukuTamu");
const listPesan = document.getElementById("listPesan");
const badgeTotalPesan = document.getElementById("badgeTotalPesan");

let daftarPesan = [];

function renderPesan() {
    listPesan.innerHTML = "";
    badgeTotalPesan.textContent =`Total pesan ${daftarPesan.length}`;
    if (daftarPesan.length === 0) {
        listPesan.innerHTML = `<p class="text-muted text-center py-3 fst-italic">Belum ada pesan yang dikirim</p>;`
        return;
    }
    daftarPesan.forEach((item) => {
        const li= document.createElement("li");
        li.className = "list-group-item px-0 py-3 border-bottom";
        
        const nama = document.createElement("h6");
        nama.className = "mb-1 fw-bold";
        nama.textContent = item.nama;
        
        const pesan = document.createElement("p");
        pesan.className = "mb-0 text-secondary";
        pesan.style.wordBreak = "break-word";
        pesan.textContent = item.pesan;
        
        li.appendChild(nama);
        li.appendChild(pesan);
        listPesan.appendChild(li);
    });
}
formBukuTamu.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    const nama = inputNama.value.trim();
    const pesan = inputPesan.value.trim();
   
    if (nama === "" || pesan === "") {
        alert("Mohon isi nama dan pesan terlebih dahulu!");
        return;
    }
    
    daftarPesan.unshift({
        nama: nama,
        pesan: pesan
    });
    
    inputNama.value = "";
    inputPesan.value = "";
    
    renderPesan();
});
renderPesan();