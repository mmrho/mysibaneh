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

// Example usage:
// Assuming you have these variables available
const accessUrl = "https://example.com/path/to/software-package";
const productId = 123; // Replace with the actual product ID
const postTitle = "Example Post Title"; // Replace with the actual post title
const iconUrl = "https://example.com/path/to/icon.png"; // Replace with the actual icon URL
const version = "1.0.0"; // Replace with the actual version
const bundleId = "com.example.bundle"; // Replace with the actual bundle identifier

console.log(generatePlist(accessUrl, productId, postTitle, iconUrl, version, bundleId));