import React from 'react'

const CustomContext = React.createContext({
  isInDarkMode: false,
  changeToDarkMode: () => {},
  activeNavItem: '',
  changeActiveNavItem: () => {},
  savedVideosList: [],
  addToSaveVideosList: () => {},
})

export default CustomContext
