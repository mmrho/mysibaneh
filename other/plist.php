function generate_plist($access_url, $product_id, $post) {
    $plist = '<?xml version="1.0" encoding="UTF-8"?>
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
                            <string>' . $access_url . '</string>
                        </dict>
                        <dict>
                            <key>kind</key>
                            <string>display-image</string>
                            <key>url</key>
                            <string>' . get_field("it_icon_url", $product_id) . '</string>
                        </dict>
                        <dict>
                            <key>kind</key>
                            <string>full-size-image</string>
                            <key>url</key>
                            <string>' . get_field("it_icon_url", $product_id) . '</string>
                        </dict>
                    </array>
                    <key>metadata</key>
                    <dict>
                        <key>kind</key>
                        <string>software</string>
                        <key>bundle-version</key>
                        <string>' . get_field("it_version", $product_id) . '</string>
                        <key>bundle-identifier</key>
                        <string>' . get_field("it_bundle_id", $product_id) . '</string>
                        <key>title</key>
                        <string>app' . preg_replace("/[^a-zA-Z0-9]+/", "", $post->post_title) . '</string>
                    </dict>
                </dict>
            </array>
        </dict>
    </plist>';
    
    return $plist;
}