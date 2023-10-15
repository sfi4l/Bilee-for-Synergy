import { Await, useLoaderData, useRouteLoaderData } from "react-router-dom"
import SupportedMenu from "../../SupportedMenu/SupportedMenu"
import "./BranchMenu.css"
import { Suspense, useEffect, useState } from "react"

const BranchMenu = ({ branches, branchId }) => {
  const [branchesStable] = useState(branches)
  const [branch, setBranch] = useState()
  
  useEffect(() => {
    setBranch(branchesStable.find(({ id }) => id === branchId))
  }, [])

  return <SupportedMenu title={branch?.name}></SupportedMenu>
}

export default BranchMenu
