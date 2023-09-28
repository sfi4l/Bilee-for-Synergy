import ThemedIcon from "../ThemedIcon/ThemedIcon"
import "./FlatButton.css"

const FlatButton = ({ icon, onClick, size, className }) => {
  return (
    <button className={"FlatButton" + (className ? ` ${className}` : "")} onClick={onClick} style={{
      "width": size ?? "24px",
      "height": size ?? "24px"
    }}>
      <ThemedIcon size={size} icon={icon} />
    </button>
  )
}

export default FlatButton