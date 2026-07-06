type Recommendation = {
  category: string;
  value: string;
  confidence: number;
  reason: string;
};

type BlueprintProps = {
  partType: string;
  confidence: number;
  recommendations: Recommendation[];
  missingInformation: string[];
};

export default function EngineeringBlueprint({
  partType,
  confidence,
  recommendations,
  missingInformation,
}: BlueprintProps) {
  return (
    <aside className="w-full rounded-3xl border border-white/10 bg-[#101827] p-6 text-white shadow-xl">
      <h2 className="text-2xl font-bold">Engineering Blueprint</h2>

      <div className="mt-6">
        <div className="mb-2 flex justify-between">
          <span>Confidence</span>
          <span>{confidence}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-blue-500"
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Detected Part</h3>

        <div className="mt-2 rounded-xl bg-white/5 p-3">
          {partType}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">
          Engineering Recommendations
        </h3>

        <div className="mt-3 space-y-3">
          {recommendations.map((item) => (
            <div
              key={item.category}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex justify-between">
                <strong>{item.category}</strong>

                <span className="text-green-400">
                  {item.confidence}%
                </span>
              </div>

              <div className="mt-1 text-blue-300">
                {item.value}
              </div>

              <p className="mt-2 text-sm text-gray-400">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">
          Missing Information
        </h3>

        <div className="mt-3 space-y-2">
          {missingInformation.length === 0 ? (
            <div className="rounded-xl bg-green-500/20 p-3 text-green-300">
              ✓ Blueprint complete
            </div>
          ) : (
            missingInformation.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-yellow-500/10 p-3 text-yellow-300"
              >
                • {item}
              </div>
            ))
          )}
        </div>
      </div>
    </aside>
  );
}