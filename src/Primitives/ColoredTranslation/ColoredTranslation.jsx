import { useTranslation } from "i18nano"
import Color from "../Color/Color"
import reactStringReplace from "react-string-replace"

const ColoredTranslation = ({ path, values }) => {
  const text = useTranslation()(path, values)
  return (
    <>
      {reactStringReplace(text, /(<(?:.*?)>(?:.*?)<\/color>)/, tag => {
        const match = tag.match(/<(.*?)>(.*?)<\/color>/)
        return <Color color={match[1]}>{match[2]}</Color>
      })}
    </>
  )
}

export default ColoredTranslation
