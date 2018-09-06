function getMail(evt){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(#sheet);
  
  var range = evt.range;
  var value = range.getValue();
  var editRow = range.getRow();
  var editColumn = range.getColumn();
  var editDate = Utilities.formatDate(new Date(), "GMT+0530", "dd-MM-yy HH:mm");

  
  if(value == "Yes" || value == "No"){
    var mailCheck = Session.getActiveUser();
    Logger.log(mailCheck)
    sheet.getRange(editRow,editColumn+1).setValue(mailCheck+" "+editDate);
  }

}