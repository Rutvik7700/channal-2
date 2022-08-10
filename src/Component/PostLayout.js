import { Outlet } from "react-router-dom";

const PostLayout = () => {
    return (
      <>
        <h1>This is PostLayout Page.</h1>
        <Outlet />
      </>
    )
  }
  
  export default PostLayout
  