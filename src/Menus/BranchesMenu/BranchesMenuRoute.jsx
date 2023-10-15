import { Suspense, useState } from "react"
import { Await, useRouteLoaderData } from "react-router-dom"
import BranchesMenu, { BranchesMenuFallback } from "./BranchesMenu"

export const branchesLoader = () => {
  const branchesRaw = [
    {
      id: "1",
      name: "ул. Павловский тракт, 123",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: true,
      services: []
    },
    {
      id: "2",
      name: "Пушкина, 2",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: false,
      services: []
    },
    {
      id: "3",
      name: "Пушкина, 1",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: false,
      services: []
    },
    {
      id: "4",
      name: "Пушкина, 2",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: true,
      services: []
    },
    {
      id: "5",
      name: "Пушкина, 2",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: true,
      services: []
    }
  ]

  const branches = new Promise((r) => setTimeout(() => r(branchesRaw), 0))

  return { branches }
}

const BranchesMenuRoute = () => {
  const [data] = useState(useRouteLoaderData("branches"))
  
  return (
    <Suspense fallback={<BranchesMenuFallback />}>
      <Await resolve={data.branches}>
        {(resolvedBranches) => <BranchesMenu branches={resolvedBranches} />}
      </Await>
    </Suspense>
  )
}

export default BranchesMenuRoute
