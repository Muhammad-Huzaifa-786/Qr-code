document.getElementById("generateBtn").addEventListener("click", function () {
    const qrInput = document.getElementById("qrInput").value;
    const qrCodeDiv = document.getElementById("qrcode");
    const qrcodetext = document.getElementById("qrcodetext");
    const downloadBtn = document.getElementById("downloadBtn");
    
    // Display the input text
    qrcodetext.innerText = qrInput;

    // Clear previous QR code
    qrCodeDiv.innerHTML = "";

    // Hide download button initially
    downloadBtn.style.display = "none";

    // Check if the input is empty
    if (qrInput.trim() === "") {
        alert("Please enter some text or a URL!");
        return;
    }

    // Create a new canvas element for the QR code
    const canvas = document.createElement("canvas");
    qrCodeDiv.appendChild(canvas);

    // Generate QR Code
    QRCode.toCanvas(canvas, qrInput, { width: 200 }, function (error) {
        if (error) {
            console.error("Error generating QR Code:", error);
        } else {
            // Show the download button once the QR code is generated
            downloadBtn.style.display = "inline-block";
        }
    });

    // Set up the download button functionality for QR Code image only
    downloadBtn.addEventListener("click", function () {
        // Create a new link element for the download
        const link = document.createElement("a");

        // Convert the canvas to a data URL (image format)
        const imageUrl = canvas.toDataURL();

        // Set the download attribute with the filename
        link.href = imageUrl;
        link.download = "qrcode.png";

        // Trigger a click on the link to download the QR code image
        link.click();
    });
});
