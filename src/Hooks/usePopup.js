import React, { useState } from "react"
import { setPopup } from "../App"

export const usePopup = () => {
  const displayPopup = (popup) => {
    setPopup(popup)
  }

  const exitPopup = () => {
    setPopup(undefined)
  }

  return [displayPopup, exitPopup]
}