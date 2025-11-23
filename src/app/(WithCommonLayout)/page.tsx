"use client";

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.group(user);
  return (
    <div>
      <h1>Welcome to Ecommerce Home Page</h1>
    </div>
  );
};

export default HomePage;
