import useDarkModeImpl from '@fisch0920/use-dark-mode'

const isServer = typeof window === 'undefined'

export function useDarkMode() {
  // SELALU panggil hook di tingkat teratas, tidak peduli server/client
  const clientDarkMode = useDarkModeImpl(false, { classNameDark: 'dark-mode' })
  
  // Kembalikan implementasi yang berbeda berdasarkan environment
  if (isServer) {
    return {
      isDarkMode: false,
      toggleDarkMode: () => {}
    }
  }
  
  return {
    isDarkMode: clientDarkMode.value,
    toggleDarkMode: clientDarkMode.toggle
  }
}
