const sheets = document.styleSheets;

//replace style sheets
for (let i = 0; i < sheets.length; i++) {
    //StyleSheetList is an array-like object, but it can't be iterated
    try {
        const sheet = sheets[i].cssRules;

        for (let j = 0; j < sheet.length; j++) {
            const style = sheet[j];
            if (!style.style) {
                continue;
            }
            const font_family = style.style.fontFamily;
            if (font_family) {
                const replaced = font_family.replace(/"(sans-serif|serif|sans|monospace)"/gi, "$1");
                if (replaced !== font_family) {
                    style.style.fontFamily = replaced;
                }
            }
        }
    } catch (e) {}
}

const inlineSheets = document.querySelectorAll("style");
//replace styles in <style> tags
inlineSheets.forEach((sheet) => {
    const css = sheet.textContent;
    const replaced = css.replace(/"(sans-serif|serif|sans|monospace)"/gi, "$1");
    if (css !== replaced) {
        sheet.textContent = replaced;
    }
});
