import Tesseract from 'tesseract.js/dist/tesseract';

const validateReceipt = async file => {
  let valid = null;
  await Tesseract.recognize(file).then(result => {
    valid = result.text.toLowerCase().includes('donation');
  });
  console.log(`OCR Validation result: ${valid ? 'valid' : 'invalid'}`);
  return valid;
};

export default validateReceipt;
