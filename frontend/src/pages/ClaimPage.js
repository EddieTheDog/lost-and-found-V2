import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClaim } from "../api";

export default function ClaimPage() {
  const { id } = useParams();
  const [claim, setClaim] = useState(null);

  useEffect(() => {
    getClaim(id).then(res => setClaim(res.data));
  }, [id]);

  if (!claim) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Claim #{claim.id}</h1>
      <p>Name: {claim.name}</p>
      <p>Status: {claim.status}</p>
      <h2>Items:</h2>
      {claim.items && claim.items.length > 0 ? (
        <ul>{claim.items.map((item, idx) => <li key={idx}>{item.name} - {item.status}</li>)}</ul>
      ) : <p>No items added yet</p>}
    </div>
  );
}
