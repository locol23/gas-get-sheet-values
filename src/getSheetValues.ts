import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet

const getSheetValues = (
  Spreadsheet: Spreadsheet,
  sheetName: string,
  columns: Array<string>
) => {
  const sheet = Spreadsheet.getSheetByName(sheetName)
  const values = sheet.getDataRange().getValues()
  const colObj = []
  const result = []

  values[0].map(item => {
    columns.map((col, i) => {
      if (item === col) {
        colObj.push({ colName: col, colNum: i })
      }
    })
  })

  values.map((item, row) => {
    let temp = {}
    columns.map((col, i) => {
      temp[col] =
        values[row][colObj.filter(obj => obj.colName === col)[0].colNum]
      if (row !== 0 && i === columns.length - 1) {
        result.push(temp)
      }
    })
  })
  return result
}

export default getSheetValues
