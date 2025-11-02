import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

export default function Barcode({ value }) {
  const svgRef = useRef();

  useEffect(() => {
    if (svgRef.current) JsBarcode(svgRef.current, value, { format: "CODE128", width: 2, height: 40 });
  }, [value]);

  return <svg ref={svgRef}></svg>;
}
