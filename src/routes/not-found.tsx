import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-zinc-50">
      <div className="h-40 w-40 rounded-full bg-primary relative">
        <div className="h-24 rounded-b-full bg-transparent backdrop-blur-md absolute -bottom-4 -inset-x-4"></div>
      </div>

      <h1 className="text-4xl font-bold mt-10 text-foreground">404</h1>
      <h2 className="text-2xl font-semibold mt-2 text-muted-foreground text-center">{`Looks like this page doesn't exist`}</h2>
      <p className="text-sm mt-2 text-muted-foreground text-center max-w-[20rem]">
        {`We couldn't find the page you are looking for, please use any of the
        bottom options`}
      </p>

      <div className="mt-6 flex items-center gap-2">
        <button
          onClick={() => window.history.back()}
          className="h-10 w-32 rounded bg-foreground text-[0.65rem] uppercase font-bold
           hover:opacity-80 hover:shadow-lg transition-all flex items-center justify-center"
        >
          Back
        </button>
        <Link
          to="/"
          className="h-10 w-32 rounded bg-primary text-white text-[0.65rem] uppercase font-bold
           hover:opacity-80 hover:shadow-lg transition-all flex items-center justify-center"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
