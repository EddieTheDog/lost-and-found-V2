import React, { useState, useEffect } from "react";
import { createClaim, getAllClaims } from "../api";
import ClaimForm from "../components/ClaimForm";
import ClaimList from "../components/ClaimList";

export default function Dashboard() {
  const [claims, setClaims] = useState([]);

  const fetchClaims = async () => {
    const res = await getAllClaims();
    setClaims(res.data);
  };

  useEffect(() => { fetchClaims(); }, []);

  const handleCreate = async (claimData) => {
    const res = await createClaim(claimData);
    setClaims([...claims, res.data]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <ClaimForm onCreate={handleCreate} />
      <ClaimList claims={claims} />
    </div>
  );
}
