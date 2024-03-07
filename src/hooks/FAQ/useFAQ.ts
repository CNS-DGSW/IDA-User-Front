import { useState } from "react"

export const useFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setActiveIndex((prevIndex) => (prevIndex === id ? null : id))
  }

  return {
    activeIndex,
    toggleFAQ,
  }
}
