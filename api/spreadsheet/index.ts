
export default async function getSpreadSheetIndex() {
    const response = await fetch("http://localhost:8080/spreadsheet/index")
    return await response.json();
}
