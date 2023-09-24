import "./IconText.css"

const IconText = ({ children, icon }) => {
  return (
    <div className="IconText">
      <img src={icon} />
      {children}
    </div>
  )
}

export default IconText