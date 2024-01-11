"use strict"

const readExcel = () => {
  return new Promise((resolve, reject) => {
    const file = event.target.files[0]
    console.log(file);
    const reader = new FileReader()
    reader.onload = () =>
      resolve(
        (() => {
          const data = reader.result
          const workBook = XLSX.read(data, { type: 'binary' })
          return workBook.SheetNames.map(sheetName => {
            const row = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName])
            return Object.values(row) 
          })[0]
        })()
      )
    reader.onerror = reject
    reader.readAsBinaryString(file)
  })
}
const onChageFile = async () => {
  const re = await readExcel();
  const size = re.length;
  let html = '';
  re.forEach((item, index, array) => {
      let {num, name, region, age, code} = item;

      html += `<tr>` + `\n`;
      html += `    <td>` + num + `</td>` + `\n`;
      html += `    <td>` + name + `</td>` + `\n`;
      html += `    <td class='text-align-left'>` + region + `</td>` + `\n`;
      html += `    <td>` + age + `</td>` + `\n`;
      html += `    <td>` + `\n`;
      html += `        <button type='button' id='btn' class='btn' data-code='` + code + `'>수정</button>` + `\n`;
      html += `    </td>` + `\n`;
      html += `</tr>` + `\n`;
  })
  document.getElementById('count').innerText = size;
  let list = document.getElementById('contents');
  list.insertAdjacentHTML('beforeend', html);
}