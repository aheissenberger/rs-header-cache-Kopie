import { headers } from "@lazarv/react-server";
import { Link } from "@lazarv/react-server/navigation";

export default async function HelloPage() {
  headers({
    "cache-control": "s-maxage=1,must-revalidate",
  });

  return (
    <div>
      <title>Hello 01</title>
      <h1 className="text-4xl font-bold tracking-tight">
        s/page/Hello (dynamic)
      </h1>
      <p>This is placeholder for a Textblock. {new Date().toISOString()}</p>
      
      <Link to="/src/s/page/hello" className="mt-4 inline-block underline">
        Hello (dynamic)
      </Link>
    </div>
  );
}
