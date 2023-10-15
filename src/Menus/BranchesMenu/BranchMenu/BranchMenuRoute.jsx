import { Suspense, useState } from "react"
import { Await, useLoaderData, useRouteLoaderData } from "react-router-dom"
import BranchMenu from "./BranchMenu"

export const branchMenuLoader = ({ params }) => params.id

const BranchMenuRoute = () => {
  const id = useLoaderData()
  const [data] = useState(useRouteLoaderData("branches"))
  return (
    <Suspense>
      <Await resolve={data.branches}>
        {(resolvedBranches) => <BranchMenu branchId={id} branches={resolvedBranches} />}
      </Await>
    </Suspense>
  )
}

export default BranchMenuRoute