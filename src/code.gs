const CITY = "Tokyo";
const SHEET_NAME = "Weather";

function fetchWeather() {
  const url = "https://wttr.in/" + CITY + "?format=j1";
  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());

  const temp = data.current_condition[0].temp_C;
  const humidity = data.current_condition[0].humidity;
  const weather = data.current_condition[0].weatherDesc[0].value;

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  // シートがなければ作成
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // ヘッダーがなければ追加
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["日時", "都市", "気温(℃)", "湿度(%)", "天気"]);
  }

  sheet.appendRow([
    new Date(),
    CITY,
    temp,
    humidity,
    weather
  ]);
}
