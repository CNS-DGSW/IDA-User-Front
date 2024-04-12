import styled from "styled-components"

export const ScheduleNavigatorLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  position: absolute;
  z-index: 1;
  margin-left: 70rem;
`

export const ScheduleItemBox = styled.div<{ isSelected?: boolean }>`
  width: 80px;
  height: 80px;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray500};
`
export const ScheduleImageBox = styled.div<{ isSelected: boolean }>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  svg {
    fill: ${({ isSelected, theme: { colors } }) =>
      isSelected ? colors.white : colors.gray600};
  }
  border: 3px solid ${({ theme }) => theme.colors.gray500};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme, isSelected }) =>
    isSelected && theme.colors.blue400};
`
