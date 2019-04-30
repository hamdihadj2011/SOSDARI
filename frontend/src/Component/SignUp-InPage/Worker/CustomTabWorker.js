import React from "react"

const style = {
  padding: "10px 0",
  borderBottom: "3px solid transparent",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: "silver",
  width: "50%",
  color: "rgba(255, 255, 255, 1)",
  textAlign: "center"
}

const activeStyle = {
  ...style,
  backgroundColor: "tan",
  color: "white",
  borderBottom: "3px solid brown"
}

const CustomTabWorker = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTabWorker