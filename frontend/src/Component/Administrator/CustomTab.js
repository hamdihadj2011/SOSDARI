import React from "react"

const style = {
  padding: "5px 0",
  borderBottom: "3px solid transparent",
  display: "inline-block",
  flexDirection:'row',
  cursor: "pointer",
  backgroundColor: "grey",
  width: "24%",
  color: "#fff",
  textAlign: "center",
  marginRight:'5px',
  marginLeft:'5px',
  fontSize:"18px"
}

const activeStyle = {
  ...style,
  color: "white",
  borderBottom: "3px solid #000",
  backgroundColor:'#eb6201 '
}

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTab