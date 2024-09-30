 // Get the elements
 const openPopupBtn = document.querySelector('.btn-login');
 const closePopupBtn = document.querySelector('.close-popup-btn');
 const popupOverlay = document.getElementById('popup');

 // Function to open the popup
 openPopupBtn.addEventListener('click', () => {
     popupOverlay.style.display = 'flex';
 });

 // Function to close the popup
 closePopupBtn.addEventListener('click', () => {
     popupOverlay.style.display = 'none';
 });

 // Optional: Close the popup when clicking outside of it
 window.addEventListener('click', (event) => {
     if (event.target === popupOverlay) {
         popupOverlay.style.display = 'none';
     }
 });





 document.getElementById('downloadButton').addEventListener('click', function() {
    const accessUrl = 'https://dl.sibaneh.com/files/app/sibaneh.ipa'; // Replace with your actual IPA file URL
    const iconUrl = 'https://example.com/path/to/your/icon.png'; // Replace with your actual icon URL
    const bundleVersion = '1.0.0'; // Replace with your actual bundle version
    const bundleIdentifier = 'com.example.yourapp'; // Replace with your actual bundle identifier
    const title = 'Your App Title'; // Replace with your actual app title

    const plistContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>${accessUrl}</string>
                </dict>
                <dict>
                    <key>kind</key>
                    <string>display-image</string>
                    <key>url</key>
                    <string>${iconUrl}</string>
                </dict>
                <dict>
                    <key>kind</key>
                    <string>full-size-image</string>
                    <key>url</key>
                    <string>${iconUrl}</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>kind</key>
                <string>software</string>
                <key>bundle-version</key>
                <string>${bundleVersion}</string>
                <key>bundle-identifier</key>
                <string>${bundleIdentifier}</string>
                <key>title</key>
                <string>${title}</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>`;

    const blob = new Blob([plistContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const itmsUrl = 'itms-services://?action=download-manifest&url=' + encodeURIComponent(url);

    window.location.href = itmsUrl;
});