import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full text-center py-8 text-slate-400">
      Made by{" "}
      <Link
        href="https://github.com/rapon1kt"
        className="underline text-indigo-400"
      >
        raponikt
      </Link>
    </footer>
  );
}
