import ThemedIcon from "../ThemedIcon/ThemedIcon"
import "./Iconify.css"

const Iconify = ({ children, icon, size, className }) => {
  size = size ?? "24px"
  className = " " + className ?? ""

  return (
    <div className={"Iconify" + className} style={{
      "--size": size
    }}>
      <ThemedIcon icon={icon} />
      {children}
    </div>
  )
}

export default Iconify