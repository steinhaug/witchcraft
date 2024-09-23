
![Witchcraft](docs/title.png)

Think Greasemonkey for developers.

Witchcraft is a Google Chrome extension for loading custom Javascript and CSS directly from a folder in your file system, injecting them into pages that match their files names.

It works by matching every page domain against script file names available in the scripts folder. For instance, if one navigates to `www.google.com`, Witchcraft will try to load and run `google.com.js` and `google.com.css`.

For more information on how to install and use it, head to Witchcraft's [home page](//steinhaug.github.io/witchcraft).

# Development

Node.js is required, but just to run tests. I also use `nvm` to manage Node.js versions, but that's not required (just make sure your Node.js version is similar to the one `.nvmrc` currently points to). To install test dependencies:

    cd <project-folder>
    nvm install
    npm install

Then you're ready to run tests:

    npm test

# Load the extension into Chrome

You can load the folder directly into Chrome:

1. **Go to Chrome’s extension management page:**
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** (a toggle switch in the top right corner).

2. **Load the unpacked extension:**
   - Click the **Load unpacked** button.
   - Select the folder that contains your `manifest.json` file (or the build folder like `chrome-extension/` if you used a build process).

3. **Test the extension**: 
   Once loaded, you should see your extension in the Chrome toolbar or in the extensions list. You can now test and debug it.

# Packaging the extension for distribution (optional)
If you want to distribute your extension via the Chrome Web Store:

1. **Go to the Chrome Developer Dashboard**: 
   - Visit: https://chrome.google.com/webstore/developer/dashboard

2. **Package the extension**: 
   - Click the **Pack extension** button on the `chrome://extensions/` page.
   - Select your extension's folder, and Chrome will generate a `.crx` file (the packaged extension) and a `.pem` file (the private key used to sign the extension).

3. **Upload the `.zip` file**: 
   - Zip your extension’s files (including the `manifest.json`).
   - Upload it to the Chrome Web Store for review.

# Credits

Witchcraft is my rendition of [defunkt](//github.com/defunkt)'s original extension, [dotjs](//github.com/defunkt/dotjs). Although I never got to actually use dotjs (it only worked for MacOS and the installation process was not easy), I really wanted something like that. Thanks, defunkt, for having such a cool idea.

Thanks [arimus](//github.com/arimus) for the idea of using Web Server for Chrome.

The little witch and the witch hat icons were provided by [Freepik](//www.flaticon.com/authors/freepik).
