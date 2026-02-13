const API_KEY = "YOUR_API_KEY";
const CITY = "Tokyo";
const SHEET_NAME = "Weather";

function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ja`;
  
  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());

  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const weather = data.weather[0].description;
  const now = new Date();

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  sheet.appendRow([now, CITY, temp, humidity, weather]);
}

function createTrigger() {
  ScriptApp.newTrigger("fetchWeather")
    .timeBased()
    .everyHours(1)
    .create();
}
