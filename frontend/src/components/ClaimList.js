import React from "react";
import QRCode from "qrcode.react";

export default function ClaimList({ claims }) {
  return (
    <div>
      {claims.map(claim => (
        <div key={claim.id} style={{ border:"1px solid #ccc", margin:"10px", padding:"10px" }}>
          <p>ID: {claim.id} | Name: {claim.name} | Status: {claim.status}</p>
          <QRCode value={`https://your-frontend-url.com/claim/${claim.id}`} size={128} />
        </div>
      ))}
    </div>
  );
}
