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








 function generatePlist(accessUrl, productId, postTitle, iconUrl, version, bundleId) {
    // Sanitize the post title
    const sanitizedTitle = postTitle.replace(/[^a-zA-Z0-9]+/g, "");

    // Construct the plist XML string
    const plist = `<?xml version="1.0" encoding="UTF-8"?>
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
                        <string>${version}</string>
                        <key>bundle-identifier</key>
                        <string>${bundleId}</string>
                        <key>title</key>
                        <string>app${sanitizedTitle}</string>
                    </dict>
                </dict>
            </array>
        </dict>
    </plist>`;

    return plist;
}

document.getElementById('downloadButton').addEventListener('click', function() {
    // Example data
    const accessUrl = "https://dl.sibaneh.com/files/app/sibaneh.ipa";
    const productId = 123; // Replace with the actual product ID
    const postTitle = "Example Post Title"; // Replace with the actual post title
    const iconUrl = "https://example.com/path/to/icon.png"; // Replace with the actual icon URL
    const version = "1.0.0"; // Replace with the actual version
    const bundleId = "com.example.bundle"; // Replace with the actual bundle identifier

    // Generate the plist content
    const plistContent = generatePlist(accessUrl, productId, postTitle, iconUrl, version, bundleId);

    // Create a Blob from the plist content
    const blob = new Blob([plistContent], { type: 'application/xml' });

    // Create a download link
    const downloadLink = `itms-services://?action=download-manifest&url=${accessUrl}`;

    // Open the download link
    window.open(downloadLink, '_self');
});