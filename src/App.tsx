import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Switch } from "./components/ui/switch";
import CustomDialog from "./components/container/CustomDialog";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
      <Button
        variant={isLoading ? "disabled" : "default"}
        disabled={isLoading}
        onClick={() => setIsLoading(true)}
      >
        {isLoading ? "Loading..." : "Submit"}
      </Button>
      <CustomDialog />
    </>
  );
}

export default App;
