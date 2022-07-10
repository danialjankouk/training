import React, { Suspense } from "react";
//components
import Api from "./components/Api";
const App = () => {
  return (
    <div>
      <Suspense fallback="Loading ...">
        <Api />
      </Suspense>
    </div>
  );
};

export default App;
