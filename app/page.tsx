import MetricPage from "./linear-algebra/metric/page";
import ScalarPage from "./linear-algebra/scalar/page";
import TransformationsPage from "./linear-algebra/transformations/page";
import VectorPage from "./linear-algebra/vectors/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
         <ScalarPage />
         <div className="mt-8">
            <VectorPage />
         </div>
         <div className="mt-8">
            <TransformationsPage />
         </div>
         <div className="mt-8">
            <MetricPage />
         </div>
    </div>
  );
}
