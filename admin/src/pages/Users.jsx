import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const dark = localStorage.getItem("admin_dark") === "true";

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://caterserv-ih8s.onrender.com/user/list"
      );
      setUsers(res.data);
    } catch {
      Swal.fire("Error", "Failed to load users", "error");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete User?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    });

    if (!confirm.isConfirmed) return;

    await axios.delete(
      `https://caterserv-ih8s.onrender.com/user/${id}`
    );

    Swal.fire("Deleted!", "User removed", "success");
    fetchUsers();
  };

  return (
    <div
      className={`container-fluid p-4 ${
        dark ? "bg-dark text-light" : "bg-light"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <h3 className="fw-bold mb-4">👥 All Users</h3>

      <div className="card shadow border-0">
        <div className="card-body table-responsive">
          <table className="table align-middle">
            <thead className={dark ? "table-dark" : "table-light"}>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Joined</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{u.name || "—"}</td>
                  <td>{u.email}</td>
                  <td>{u.phone || "—"}</td>
                  <td>
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteUser(u._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-4">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
