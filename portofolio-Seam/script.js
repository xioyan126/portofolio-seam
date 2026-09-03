const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        nav.classList.remove("active");

    });

});

/* =========================================================
   PORTFOLIO IMAGE SLIDER
   ========================================================= */

const sliders = document.querySelectorAll(".slider");


sliders.forEach(slider => {

    // Mengambil semua gambar
    const images = slider.querySelectorAll(".slide");

    // Mengambil semua dot
    const dots = slider.querySelectorAll(".dot");

    // Posisi gambar yang sedang aktif
    let index = 0;


    // Menampilkan gambar pertama
    images[index].classList.add("active");

    // Mengaktifkan dot pertama
    if (dots.length > 0) {
        dots[index].classList.add("active");
    }


    /*
       Fungsi untuk mengganti gambar
    */

    function showSlide(newIndex) {

        // Menghilangkan gambar yang sedang aktif
        images[index].classList.remove("active");

        // Menghilangkan dot yang sedang aktif
        if (dots.length > 0) {
            dots[index].classList.remove("active");
        }


        // Menentukan gambar baru
        index = newIndex;


        // Jika melewati gambar terakhir
        if (index >= images.length) {
            index = 0;
        }


        // Jika sebelum gambar pertama
        if (index < 0) {
            index = images.length - 1;
        }


        // Menampilkan gambar baru
        images[index].classList.add("active");


        // Mengaktifkan dot
        if (dots.length > 0) {
            dots[index].classList.add("active");
        }

    }


    /*
       Tombol NEXT
    */

    const nextButton = slider.querySelector(".next");

    if (nextButton) {

        nextButton.addEventListener("click", () => {

            showSlide(index + 1);

        });

    }


    /*
       Tombol PREVIOUS
    */

    const prevButton = slider.querySelector(".prev");

    if (prevButton) {

        prevButton.addEventListener("click", () => {

            showSlide(index - 1);

        });

    }


    /*
       Otomatis berganti setiap 3 detik
    */

    setInterval(() => {

        showSlide(index + 1);

    }, 3000);

});