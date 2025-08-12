import { useState } from "react";

export default function App() {
  const initialUsers = [
    { id: 1, name: "Alice", age: 25, city: "Bengaluru", job: "Frontend Developer" },
    { id: 2, name: "Bob", age: 30, city: "Mumbai", job: "Backend Developer" },
    { id: 3, name: "Charlie", age: 28, city: "Chennai", job: "UI/UX Designer" },
    { id: 4, name: "David", age: 35, city: "Hyderabad", job: "DevOps Engineer" },
    { id: 5, name: "Eva", age: 27, city: "Pune", job: "QA Tester" },
    { id: 6, name: "Frank", age: 40, city: "Delhi", job: "Project Manager" },
    { id: 7, name: "Grace", age: 22, city: "Kolkata", job: "Intern" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredUsers = users
    .filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.city.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "age") return a.age - b.age;
      if (sortBy === "city") return a.city.localeCompare(b.city);
      return 0;
    });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20, maxWidth: 800, margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Employee Directory</h1>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search by name or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />

      {/* Sort selector */}
      <div style={{ marginBottom: "15px" }}>
        <label>Sort by: </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }}
        >
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="city">City</option>
        </select>
      </div>

      {/* Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>City</th>
            <th style={thStyle}>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{u.name}</td>
              <td style={tdStyle}>{u.age}</td>
              <td style={tdStyle}>{u.city}</td>
              <td style={tdStyle}>{u.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "2px solid #ccc",
};

const tdStyle = {
  padding: "10px",
};
