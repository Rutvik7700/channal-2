import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>React Router VS6</h1>
      <ul>
        <li><NavLink to="/" style={({isActive})=>{return{backgroundColor: isActive ? 'lightpink': ''}}}>HOME</NavLink></li>
        <li><NavLink to="/about" style={({isActive})=>{return{backgroundColor: isActive ? 'lightpink': ''}}}>ABOUT</NavLink></li>
        <li><NavLink to="/contact" style={({isActive})=>{return{backgroundColor: isActive ? 'lightpink': ''}}}>CONTACT</NavLink></li>
        <li><NavLink to="/post" style={({isActive})=>{return{backgroundColor: isActive ? 'lightpink': ''}}}>POST</NavLink></li>
      </ul>

      <Outlet />
    </>
  )
}

export default Layout;
