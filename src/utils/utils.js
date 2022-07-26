export function darkModeOn() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true
    }
    return false
}