const useTableStyle = () => {
  const setTableRadius = (x: number | null, y: number | null) => {
    switch (x) {
      case 0:
        if (y === 1) return "0 0 0 8px"
        else return "8px 0 0 0"
      case 1:
        if (y === 1) return "0 0 8px 0"
        else return "0 8px 0 0"
      default:
        return "8px"
    }
  }

  return { setTableRadius }
}

export default useTableStyle
