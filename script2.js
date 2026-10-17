const save = document.getElementById("save");

save.addEventListener("click", function simpandata() {
  const nama = document.getElementById("nama");
  const sklh = document.getElementById("sklh");

  if (nama.value === "" || sklh.value === "") {
    alert("isi data terlebih dahulu");
    console.log("data belum terisi");
    return;
  } else
    alert(
      "haloo!!! " +
        nama.value +
        ", selamat datang & data kamu berhasil disimpan :)",
    );
  console.log("Data Berhasil disimpan dan selamat datang " + nama.value);
});

const cek = document.getElementById("cek");

cek.addEventListener("click", function () {
  const inptangka = document.getElementById("soal1");
  const inptteks = document.getElementById("soal2");
  const jwbnangka = Number(inptangka.value);
  const jwbnteks = inptteks.value;
  const kuncisoal1 = 10;
  const kuncisoal2 = "soekarno";
  if (inptangka.value === "" || inptteks.value === "") {
    alert("isi jawaban terlebih dahulu");
    console.log("jawaban kosong");
    return;
  }
  if (jwbnangka === kuncisoal1 && jwbnteks === kuncisoal2) {
    alert("jawaban anda benar");
    console.log("jawaban benar");
  } else {alert("jawaban anda salah");
    console.log("jawaban salah")
  }
});

const next = document.getElementById("next");

next.addEventListener("click", function () {
  const main = document.querySelector("main");
  main.style.height = "700px";
  main.textContent = "YAAAH HABIS,We'll continue later, See youuu :)";
  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  console.log("Halaman Berhasil di ubah")
});
