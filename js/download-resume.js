function downloadResume() {
    var pdfUrl = 'resources/resume.pdf';
    
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'jasonsolomonresume.pdf';
    a.style.display = 'none';
    document.body.appendChild(a);

    a.click();
    document.body.removeChild(a);
}