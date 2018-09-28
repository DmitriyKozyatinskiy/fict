import React from 'react';
import ReactDOM from 'react-dom';
import XlsxPopulate from 'xlsx-populate/browser/xlsx-populate';

import 'normalize.css';
import 'sanitize.css';
import 'semantic-ui-css/semantic.min.css';
import './scss/index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// window.test = () => {
//   Promise.all([
//     XlsxPopulate.fromFileAsync('/k3_template.xlsx'),
//     XlsxPopulate.fromFileAsync('/test.xlsx')
//   ])
//     .then(workbooks => {
//       const workbook = workbooks[0];
//       const workbook2 = workbooks[1];
//       const sheets2 = workbook2.sheets();
//
//       sheets2.forEach(sheet => {
//         const newSheet = workbook.addSheet(sheet.name());
//         const usedRange = sheet.usedRange();
//         const oldValues = usedRange.value();
//
//         newSheet.range(usedRange.address()).value(oldValues);
//       });
//
//       return workbook.toFileAsync('./src/data/xlsx-populate/spreadsheet2.xlsx');
//     });
// };
