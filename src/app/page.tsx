export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <nav className="flex items-center justify-between px-6 py-4 font-(--font-navbar)">
          <h1 className="text-lg font-medium">Logo</h1>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Login</a>
          </div>
        </nav>
      </main>
    </div>
  );
}
