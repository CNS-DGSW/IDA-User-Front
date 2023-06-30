export const calculateDday = (targetDateTime: string) => {
  // 현재 날짜와 시간을 가져옵니다.
  const currentDate = new Date()

  // 목표 날짜를 가져옵니다.
  const dday = new Date(targetDateTime)

  // 목표 날짜와 현재 날짜의 차이를 계산합니다.
  const timeDiff = dday.getTime() - currentDate.getTime()
  if (timeDiff <= 0) {
    return {
      totalDays: 0,
      totalTime: "00:00:00",
    }
  }

  const totalSeconds = Math.floor(timeDiff / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)

  const seconds = totalSeconds % 60
  const minutes = totalMinutes % 60

  const totalTime = `${totalHours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  // 결과를 반환합니다.
  return {
    totalDays,
    totalTime,
  }
}
