const sheets = document.styleSheets;

for (let i = 0; i < sheets.length; i++) {
    //StyleSheetList is an array-like object, but it can't be iterated
    const sheet = sheets[i].cssRules;

    for (let j = 0; j < sheet.length; j++) {
        const style = sheet[j];
        let font_family = style.style.fontFamily;
        if (font_family) {
            const selector = style.selectorText;
            const replaced = font_family.replace(/"(sans-serif|serif|sans|monospace)"/gi, "$1");
            document.querySelector(selector).style.fontFamily = replaced;
        }
    }
}
