import { useState } from "react"
import Card from "../Card/Card"
import "./TextInput.css"
import Text from "../Text/Text"

const TextInput = ({ onChange, lines, limit, defaultValue, className }) => {
  const [value, setValue] = useState(defaultValue)
  const [active, setActive] = useState(false)
  limit = limit ?? 1000

  return (
    <Card className="TextInput" outlineColor={active ? "accent_color" : "neutral"} margin="0px 3px" width="calc(100% - 3px - 3px)">
      <textarea
        rows={lines}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value)
          setValue(e.target.value)
        }}
        className="TextArea"
        maxLength={limit}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <Text font="Inter" size="12px" color="hint_color" className="LimitText">
        {value.length}/{limit}
      </Text>
    </Card>
  )
}

export default TextInput
