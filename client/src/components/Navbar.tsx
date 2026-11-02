import { Button } from "./ui/Button";

export function Navbar() {
  return (
    <header className="header-style flex flex-col h-(--navbar-h)">
      <div className="w-full h-1/2 border-b-2 border-b-head-border flex justify-end items-center">
        <Button size="xs">Resume</Button>
      </div>
      <div className="flex-1"></div>
    </header>
  );
}