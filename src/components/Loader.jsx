import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader">
      <div className="loader-logo">
        <img src="/favicon.png" alt="Mubarak Logo" />
      </div>

      <h2>Mubarak</h2>
      <p>Loading creative experience...</p>
    </div>
  );
};

export default Loader;