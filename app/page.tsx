import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>
        <Link href="/api/graphql">TOK Graphql Api Server</Link>
      </h2>
    </main>
  );
}
