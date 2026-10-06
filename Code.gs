// Code.gs

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Mijn website')
    .addItem('Open website', 'openWebsite')
    .addToUi();
}

function openWebsite() {
  var html = HtmlService.createHtmlOutputFromFile('index')
    .setWidth(1200)
    .setHeight(780);

  SpreadsheetApp.getUi().showModalDialog(html, 'Kikker Arcade');
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}
