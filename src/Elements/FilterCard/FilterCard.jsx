import Button from "../../Primitives/Button/Button"
import Iconify from "../../Primitives/Iconify/Iconify"
import tune_icon from "../../Img/tune_icon.svg"
import "./FilterCard.css"

const FilterCard = ({ children, margin, onClick }) => {
  return (
    <Button outlineColor="neutral" height="37px" margin={margin} onClick={onClick}>
      <Iconify icon={tune_icon} className="FilterText">
        {children}
      </Iconify>
    </Button>
  )
}

export default FilterCard