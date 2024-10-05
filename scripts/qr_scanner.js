
const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  document.getElementById('result').innerHTML = `<strong>Scanned QR Code:</strong> ${decodedText}`;
  html5QrCode.stop();
  document.getElementById('scanButton').textContent = 'Start Scanning';
  document.getElementById('loader').style.display = 'none';
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

document.getElementById('scanButton').addEventListener('click', () => {
  const button = document.getElementById('scanButton');
  if (button.textContent === 'Start Scanning') {
    button.textContent = 'Stop Scanning';
    document.getElementById('loader').style.display = 'block';
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
  } else {
    button.textContent = 'Start Scanning';
    document.getElementById('loader').style.display = 'none';
    html5QrCode.stop();
  }
});