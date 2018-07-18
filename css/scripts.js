if (screen.width >= 1920) {
    document.write("<style>body {transform: scale(1.0)}</style>");
}

else if (screen.width == 1366) {
    document.write("<style>body {transform: scale(.9)}</style>");
}

else if (screen.width == 1280) {
    document.write("<style>body {transform: scale(.8)}</style>");
} 

else {
    document.write("<style>body {transform: scale(.8)}</style>")
}
