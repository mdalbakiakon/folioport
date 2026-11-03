import { Button } from "./ui/Button";

export function Navbar() {
  return (
    <header className="header-style flex flex-col h-(--navbar-h)">
      <div className="w-full h-1/2 border-b-2 border-b-head-border flex justify-end items-center">
        <a href="/resume.pdf" download="mdalbakiakon_resume.pdf">
          <Button size="xs" variant="secondary">
            Resume
          </Button>
        </a>
      </div>
      <div className="flex-1"></div>
    </header>
  );
}
