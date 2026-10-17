function simpandata() {
  alert("data berhasil disimpan");
}

function cekjawaban() {
  const inptangka = document.getElementById("soal1");
  const inptteks = document.getElementById("soal2");
  const jwbnangka = Number(inptangka.value);
const jwbnteks = inptteks.value;
  const kuncisoal1 = 10;
  const kuncisoal2 = "soekarno";
  if (inptangka.value === ""||inptteks.value === "")
    {alert("isi jawaban terlebih dahulu");return;}

  if (jwbnangka === kuncisoal1 && jwbnteks === kuncisoal2) 
    console.log(alert("jawaban anda benar"));
  else console.log(alert("jawaban anda salah"));
}

// cek.addEventListener("click", function () {
// if (jwbnangka = number(10))
//     console.log(alert("jawaban anda benar"))
//     else
//         console.log(alert("jawaban anda salah"))
// } )
