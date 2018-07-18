if (screen.width >= 1920) {
    document.write("<style>body {transform: scale(1.0)}</style>");
}

if (screen.width >= 1366) {
    document.write("<style>body {transform: scale(9.0)}</style>");
}

if (screen.width >= 1280) {
    document.write("<style>body {transform: scale(8.0)}</style>");
} else {
    document.write("<style>body {transform: scale(4.0)}</style>")
}
