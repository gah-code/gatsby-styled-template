import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "../storage"

describe("localStorage utilities", () => {
  beforeEach(() => {
    // Mock localStorage methods
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      },
      writable: true,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("setLocalStorage stores a value in localStorage", () => {
    const key = "theme"
    const value = "dark"

    setLocalStorage(key, value)

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    )
  })

  test("getLocalStorage retrieves a value from localStorage", () => {
    const key = "theme"
    const value = "dark"

    localStorage.getItem.mockReturnValueOnce(JSON.stringify(value))

    const result = getLocalStorage(key)

    expect(localStorage.getItem).toHaveBeenCalledWith(key)
    expect(result).toBe(value)
  })

  test("getLocalStorage returns null if the key does not exist", () => {
    const key = "nonexistent"

    localStorage.getItem.mockReturnValueOnce(null)

    const result = getLocalStorage(key)

    expect(localStorage.getItem).toHaveBeenCalledWith(key)
    expect(result).toBeNull()
  })

  test("removeLocalStorage removes a value from localStorage", () => {
    const key = "theme"

    removeLocalStorage(key)

    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })

  test("getLocalStorage handles invalid JSON gracefully", () => {
    const key = "invalidJSON"

    localStorage.getItem.mockReturnValueOnce("{invalid: json}")

    // Spy on console.error to suppress error messages
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    const result = getLocalStorage(key)

    // Ensure localStorage.getItem was called
    expect(localStorage.getItem).toHaveBeenCalledWith(key)

    // Ensure the function returns null for invalid JSON
    expect(result).toBeNull()

    // Ensure console.error was called
    expect(consoleErrorSpy).toHaveBeenCalled()

    // Restore console.error
    consoleErrorSpy.mockRestore()
  })
})
