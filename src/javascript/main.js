// Fungsi ketika tombol detail di klik
document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>Tidak ada informasi yang tersedia</i>";

    // Modal
    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;

    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");

    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    // Nomer HP
    const noHP = "6285157066514";
    let pesan = `https://api.whatsapp.com/send?phone=${noHP}&text=Halo Bang, saya mau beli produk ini ${gambar}`;

    document.querySelector(".btnBeli").href = pesan;
  });
});

// Botton Top Home
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
