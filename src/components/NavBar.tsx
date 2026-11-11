function NavBar() {
  return (
    <>
      <div className="grid gap-4 p-4 tex-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
        <button
          onClick={() => (window.location.hash = "#/")}
          className="border-2 rounded bg-emerald-800 text-white font-bold py-2 "
        >
          Home
        </button>
        <button
          onClick={() => (window.location.hash = "#/flex")}
          className="border-2 rounded bg-emerald-800 text-white font-bold py-2 "
        >
          Flex
        </button>
        <button
          onClick={() => (window.location.hash = "#/grid")}
          className="border-2 rounded bg-emerald-800 text-white font-bold py-2 "
        >
          Grid
        </button>
        <button
          onClick={() => (window.location.hash = "#/app")}
          className="border-2 rounded bg-emerald-800 text-white font-bold py-2 "
        >
          App
        </button>
      </div>
    </>
  );
}

export default NavBar;
