import { useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/button.tsx";

import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section className="flex-col-center h-dvh gap-8">
        <div className="hero">
          <img src={heroImg} className="w-40" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 className="text-h1 text-center">Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <Button type="button" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
      </section>
    </main>
  );
}

export default App;
