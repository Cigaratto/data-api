import { aggregateData } from "./utils/utils";

export default async function Page() {
const preTransformData = await fetch("https://dummyjson.com/users");
const json = await preTransformData.json();
    return (
      <div className="h-screen">
        <h1 className="font-bold">Create data from API</h1>       
       <div className="grid md:grid-cols-2 gap-4 h-full">
       <div className="overflow-y-auto">
          <h2>Before transform</h2>
          <code>
            <pre>
            {JSON.stringify(json, null, 2)}
            </pre>
          </code>
        </div>

        <div className="overflow-y-auto">
          <h2>After transform</h2>
          <code>
            <pre>
            {JSON.stringify(aggregateData(json.users), null, 2)}
            </pre>
          </code>
        </div>
       </div>
      </div>
    );
}