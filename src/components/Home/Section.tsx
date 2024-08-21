import React from "react";
import { Button } from "@/components/ui/button";

function Section({ name, children}: { name: string, children? : React.ReactNode }) {
  return (
    <Button className={`w-full justify-start`} variant="ghost">
      {children}
      {name}
    </Button>
  );
}

export default Section;