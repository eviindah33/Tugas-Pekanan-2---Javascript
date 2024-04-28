function akar(nilai) {
  if (typeof nilai === "string") {
    console.log(" Nilai Harus Angka Genap. Tidak Boleh Tipe String");
    return;
  }

  nilai = Number(nilai);

  if (nilai < 0) {
    console.log("Nilai Harus Angka Genap. Tidak Boleh Negatif");
  } else if (nilai % 2 !== 0) {
    console.log("Nilai Harus Angka Genap. Tidak Boleh Ganjil");
  } else {
    console.log(Math.sqrt(nilai));
  }
}

akar(4);
