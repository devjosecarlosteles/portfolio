import moment, { Moment } from "moment";

export default function calcDiffOfDateExperience(
  start_date_string: string,
  end_date_string: string | null
): string {
  if (!end_date_string) end_date_string = moment().format("DD/MM/YYYY");

  const start_date = moment(start_date_string, "DD/MM/YYYY");
  const end_date = moment(end_date_string, "DD/MM/YYYY");

  const years = end_date.diff(start_date, "years");
  const months = end_date.diff(start_date, "months") - years * 12;

  let durationString = "";
  console.log(years);
  if (years > 0) {
    durationString += `${years} ${years === 1 ? "ano" : "anos"}`;

    if (months > 0) durationString += " e ";
  }
  if (months > 0) {
    durationString += `${months} ${months === 1 ? "mês" : "meses"}`;
  }

  if (end_date_string === moment().format("DD/MM/YYYY")) {
    durationString;
  }

  return durationString;
}
