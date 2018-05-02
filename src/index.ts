import getSheetValues from './getSheetValues'

declare var global: any

global.main = (): void => {
  const sheetName = 'テスト'
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getSheetByName(sheetName)
  const columns = ['LastName', 'FirstName', 'Remarks']
  const values = getSheetValues(ss, sheetName, columns)
  console.log(values)
}
