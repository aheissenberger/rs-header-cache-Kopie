import { headers } from "@lazarv/react-server";

export default  function HelloPage() {
  headers({
    "cache-control": "s-maxage=1",
  });
  return (<div>Hello</div>)
}
