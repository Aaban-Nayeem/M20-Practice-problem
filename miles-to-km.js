function milesToKm(miles) {
  const km = miles * 1.60934;
  return km + " km";
}

const johnsMiles = 56;
const johnsKm = milesToKm(johnsMiles);
console.log("Johns Km:", johnsKm);
