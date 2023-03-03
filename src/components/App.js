import { useState } from "react";
import Header from "./Header";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className='flex-container-col'>
      <Header />
    </div>
  );
}
