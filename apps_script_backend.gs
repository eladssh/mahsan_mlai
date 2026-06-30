/**
 * קוד זה צריך להיות מודבק בתוך עורך ה-Apps Script של הגיליון עצמו.
 * הוראות התקנה מלאות מופיעות בהודעה בצ'אט.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000); // מונע התנגשות אם שני מנהלים מעדכנים באותו רגע

  try {
    var params = JSON.parse(e.postData.contents);

    // --- בדיקת סיסמת המנהל ---
    var SECRET = "כאן_תכניס_את_אותה_סיסמת_מנהל_שהגדרת_באתר";
    if (params.secret !== SECRET) {
      return jsonResponse({ status: "error", message: "סיסמה שגויה" });
    }

    var row = Number(params.row);
    var quantity = params.quantity;

    if (!row || row < 2) {
      return jsonResponse({ status: "error", message: "מספר שורה לא תקין" });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    // עמודה 3 = C = כמות (לפי הסדר: A=מכולה, B=שם פריט, C=כמות, D=תמונה)
    sheet.getRange(row, 3).setValue(quantity);

    return jsonResponse({ status: "ok" });

  } catch (err) {
    return jsonResponse({ status: "error", message: err.message });
  } finally {
    lock.releaseLock();
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
