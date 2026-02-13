const CITY = "Tokyo";
const SHEET_NAME = "Weather";

function fetchWeather() {
  const url = "https://wttr.in/" + CITY + "?format=j1";

  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());

  const temp = data.current_condition[0].temp_C;
  const humidity = data.current_condition[0].humidity;
  const weather = data.current_condition[0].weatherDesc[0].value;

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName(SHEET_NAME);

  sheet.appendRow([
    new Date(),
    CITY,
    temp,
    humidity,
    weather
  ]);
}
