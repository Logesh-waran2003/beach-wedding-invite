import { createContext, useContext } from 'react'
import config from './wedding.json'

const BASE = import.meta.env.BASE_URL

// Resolve image paths
export function img(filename) {
  return `${BASE}images/${filename}`
}

const WeddingContext = createContext(config)

export function WeddingProvider({ children }) {
  return <WeddingContext.Provider value={config}>{children}</WeddingContext.Provider>
}

export function useWedding() {
  return useContext(WeddingContext)
}
