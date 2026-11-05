function celciusTo(option, celcius) {
  if (option == "r".toLocaleLowerCase() || "reamur".toLocaleLowerCase()) {
    return `${(4 / 5) * celcius}°Ré`;
  } else if (
    option == "f".toLocaleLowerCase() ||
    "fahrenheit".toLocaleLowerCase()
  ) {
    return `${(9 / 5) * celcius + 32}°F`;
  } else if (
    option == "k".toLocaleLowerCase() ||
    "kelvin".toLocaleLowerCase()
  ) {
    return `${celcius + 273}°K`;
  }
}

function reamurTo(option, reamur) {
  if (option == "c".toLocaleLowerCase()) {
    return `${(5 / 4) * reamur}°C`;
  } else if (option == "f".toLocaleLowerCase()) {
    return `${(9 / 4) * reamur + 32}°F`;
  } else if (option == "k".toLocaleLowerCase()) {
    return `${(5 / 4) * reamur + 273}°K`;
  }
}

function fahrenheitTo(option, fahrenheit) {
  if (option == "c".toLocaleLowerCase()) {
    return `${(5 / 9) * (fahrenheit - 32)}°C`;
  } else if (option == "r".toLocaleLowerCase()) {
    return `${(4 / 9) * (fahrenheit - 32)}°R`;
  } else if (option == "k".toLocaleLowerCase()) {
    return `${(5 / 9) * (fahrenheit - 32) + 273}°K`;
  }
}

function kelvinTo(option, kelvin) {
  if (option == "c".toLocaleLowerCase()) {
    return `${(5 / 9) * (kelvin - 32)}°C`;
  } else if (option == "r".toLocaleLowerCase()) {
    return `${(4 / 9) * (kelvin - 32)}°R`;
  } else if (option == "f".toLocaleLowerCase()) {
    return `${(9 / 5) * (kelvin - 273) + 32}°F`;
  }
}

function hitungKonversi() {
  const suhuInput = Number(document.getElementById("suhuInput").value);
  const skalaAsal = document.getElementById("skalaAsal").value;
  const skalaTujuan = document.getElementById("skalaTujuan").value;
  const app = document.querySelector("#app");

  if (isNaN(suhuInput)) {
    app.innerText = "Masukkan angka yang valid!";
    return;
  }

  let hasil = "";

  if (skalaAsal === "c") {
    hasil = celciusTo(skalaTujuan, suhuInput);
  } else if (skalaAsal === "r") {
    hasil = reamurTo(skalaTujuan, suhuInput);
  } else if (skalaAsal === "f") {
    hasil = fahrenheitTo(skalaTujuan, suhuInput);
  } else if (skalaAsal === "k") {
    hasil = kelvinTo(skalaTujuan, suhuInput);
  }

  app.innerText = hasil;
}
