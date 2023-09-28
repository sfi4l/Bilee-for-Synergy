import ThemedIcon from "../ThemedIcon/ThemedIcon"
import "./Iconify.css"

const Iconify = ({ children, icon, color, size, gap, className }) => {
  size = size ?? "24px"
  className = className && (" " + className) || ""

  return (
    <div className={"Iconify" + className} style={{
      "gap": gap ?? "13px"
    }}>
      <ThemedIcon size={size} color={color} icon={icon} />
      {children}
    </div>
  )
}

export default Iconify