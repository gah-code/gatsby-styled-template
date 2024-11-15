export const getLocalStorage = key => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  } catch (error) {
    console.error(`Error getting key "${key}" from localStorage:`, error)
    return null
  }
}

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error setting key "${key}" in localStorage:`, error)
  }
}

export const removeLocalStorage = key => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing key "${key}" from localStorage:`, error)
  }
}
