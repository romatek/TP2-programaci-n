// TP2 - Procesamiento de Flota y Multas
// Participante: Román Adris

let registros = [
  { patente: "AB123CD", velocidad: 120, tipo: "auto", km: 150 },
  { patente: "XY987ZW", velocidad: 95, tipo: "camion", km: 300 },
  { patente: "MN456GH", velocidad: 135, tipo: "auto", km: 80 },
  { patente: "QR789JK", velocidad: 88, tipo: "moto", km: 45 },
  { patente: "ST012LM", velocidad: 125, tipo: "auto", km: 200 }
];

// Parte 1: generar el reporte de multas con map()
let reporteMultas = registros.map(vehiculo => {
  let monto = 0;

  if (vehiculo.velocidad > 130) {
    monto = 10000;
  } else if (vehiculo.velocidad > 110) {
    monto = 5000;
  }

  return {
    patente: vehiculo.patente,
    monto: monto
  };
});

console.log("Reporte de multas:");
console.log(reporteMultas);

// Parte 2: buscar los vehículos que superaron los 110 km/h
let infractores = registros.filter(vehiculo => vehiculo.velocidad > 110);

console.log("Cantidad de infractores:", infractores.length);
console.log("Patentes:", infractores.map(vehiculo => vehiculo.patente));

// Parte 3: calcular los kilómetros y la recaudación con reduce()
let totalKm = registros.reduce((acumulador, vehiculo) => {
  return acumulador + vehiculo.km;
}, 0);

let recaudacion = reporteMultas.reduce((acumulador, multa) => {
  return acumulador + multa.monto;
}, 0);

console.log(`La flota recorrió ${totalKm} km y generó $${recaudacion} en multas.`);