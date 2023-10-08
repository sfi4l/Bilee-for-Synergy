import { useTranslationChange } from "i18nano"
  
const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
]

export const useRelativeDateFormat = () => {
  const language = useTranslationChange().lang

  const formatter = new Intl.RelativeTimeFormat(language, {
    numeric: "auto",
    style: "short"
  })
  
  const formatTimeAgo = (from, to) => {
    let duration = (to - from) / 1000
  
    for (let i = 0; i < DIVISIONS.length; i++) {
      const division = DIVISIONS[i]
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name)
      }
      duration /= division.amount
    }
  }

  return formatTimeAgo
}