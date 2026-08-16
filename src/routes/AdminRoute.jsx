import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../components/common/Loader";

function AdminRoute({ children }) {
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  // not logged in
  if (!token || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // profile still loading
  if (!user) {
    return <Loader />;
  }

  // logged in but not admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
