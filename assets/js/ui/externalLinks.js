// OPEN .PDF'S AND EXTERNAL LINKS IN A NEW WINDOW
export function buildExternal() {
    $('a[href^="http:"], a[href^="https:"]').not('[href*="'+document.domain+'"]').attr('target','_blank');
    $('a[href$=".pdf"]').attr('target', '_blank');
}