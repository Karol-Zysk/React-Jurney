export const createPdf = (
  jsPDF,
  img,
  origin,
  destination,
  distanceKM,
  howManyDays,
  fuelPrice,
  consumption,
  jurneyPrice
) => {
  const doc = new jsPDF("landscape", "px", "a5", "false");
  doc.addImage(img, "PNG", 220, 0, 230, 250);
  doc.setFontSize(28);
  doc.text(`Jurney Info`, 25, 40);
  doc.setFontSize(14);
  doc.text(`From: ${origin}`, 25, 75);
  doc.text(`To: ${destination}`, 25, 95);
  doc.text(`Distance: ${Math.round(distanceKM)}km`, 25, 115);
  doc.text(`Assuming you cover 800km a day,`, 25, 135);
  doc.text(`the journey will take: ${howManyDays} days`, 25, 155);
  if (fuelPrice !== "" && consumption !== "") {
    doc.text(`Fuel Price: ${fuelPrice}$ / litre`, 25, 175);
    doc.text(`Average fuel consumption: ${consumption}l / 100km`, 25, 195);
    doc.text(`Jurney will cost you about: ${jurneyPrice} $`, 25, 215);
  }

  doc.output("dataurlnewwindow");
};
