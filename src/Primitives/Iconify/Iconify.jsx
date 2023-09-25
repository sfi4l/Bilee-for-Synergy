import ThemedIcon from "../ThemedIcon/ThemedIcon"
import "./Iconify.css"

const Iconify = ({ children, icon, size }) => {
  size = size ?? "24px"

  return (
    <div className="Iconify" style={{
      "--size": size
    }}>
      <ThemedIcon icon={icon} />
      {children}
    </div>
  )
}

export default Iconify