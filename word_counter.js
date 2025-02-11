document.getElementById("textInput").addEventListener("input", function () {
    let text = this.value.trim();
    let wordCount = text === "" ? 0 : text.split(/\s+/).length;
    let charCount = text.length;
    
    document.getElementById("wordCount").textContent = "Words: " + wordCount;
    document.getElementById("charCount").textContent = "Characters: " + charCount;
});
