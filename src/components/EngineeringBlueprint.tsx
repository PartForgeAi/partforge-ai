"use client";

import { useProject } from "../state/ProjectContext";

export default function EngineeringBlueprint() {
  const { project } = useProject();

  if (!project) {
    return null;
  }

  const specification = project.specification;

  return (
    <aside className="w-full rounded-3xl border border-white/10 bg-[#101827] p-6 text-white shadow-xl">
      <h2 className="text-2xl font-bold">Engineering Blueprint</h2>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-300">Confidence</span>
          <span>{specification.confidence}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-blue-500"
            style={{ width: `${specification.confidence}%` }}
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <BlueprintRow
          label="Part type"
          value={specification.partType.value}
          source={specification.partType.source}
        />

        <BlueprintRow
          label="Purpose"
          value={specification.purpose.value}
          source={specification.purpose.source}
        />

        <BlueprintRow
          label="Load"
          value={
            specification.loadKg.value
              ? `${specification.loadKg.value} kg`
              : null
          }
          source={specification.loadKg.source}
        />

        <BlueprintRow
          label="Mounting surface"
          value={specification.mountingSurface.value}
          source={specification.mountingSurface.source}
        />

        <BlueprintRow
          label="Material"
          value={specification.material.value}
          source={specification.material.source}
        />

        <BlueprintRow
          label="Fasteners"
          value={specification.fastenerType.value}
          source={specification.fastenerType.source}
        />

        <BlueprintRow
          label="Thickness"
          value={
            specification.thickness.value
              ? `${specification.thickness.value} mm`
              : null
          }
          source={specification.thickness.source}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Recommendations</h3>

        <div className="mt-3 space-y-3">
          {project.recommendations.length === 0 ? (
            <div className="rounded-xl bg-white/5 p-4 text-sm text-gray-400">
              No recommendations yet.
            </div>
          ) : (
            project.recommendations.map((item) => (
              <div
                key={item.category}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex justify-between">
                  <strong>{item.category}</strong>
                  <span className="text-green-400">{item.confidence}%</span>
                </div>

                <div className="mt-1 text-blue-300">{item.value}</div>

                <p className="mt-2 text-sm text-gray-400">{item.reason}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Missing information</h3>

        <div className="mt-3 space-y-2">
          {project.questions.length === 0 ? (
            <div className="rounded-xl bg-green-500/20 p-3 text-green-300">
              ✓ Blueprint complete
            </div>
          ) : (
            project.questions.map((question) => (
              <div
                key={question.id}
                className="rounded-xl bg-yellow-500/10 p-3 text-yellow-300"
              >
                • {question.title}
              </div>
            ))
          )}
        </div>
      </div>
    </aside>
  );
}

function BlueprintRow({
  label,
  value,
  source,
}: {
  label: string;
  value: string | number | null;
  source: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm text-gray-400">{label}</div>
          <div className="mt-1 font-medium">{value ?? "Missing"}</div>
        </div>

        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
          {source}
        </span>
      </div>
    </div>
  );
}