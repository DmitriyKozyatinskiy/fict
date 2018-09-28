import { XLSX_MIME_TYPE } from './../constants';

export const downloadExcelFileFromBase64 = base64Data => {
  const downloadURL = `data:${XLSX_MIME_TYPE};base64,${base64Data}`;
  window.open(downloadURL, '_blank');
};
