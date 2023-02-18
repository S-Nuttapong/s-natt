import get from "lodash/get";
import { memo } from "react";
import { Handle, Position } from "reactflow";
import type { initNodes } from "./CodegenFlowChart";

function CustomNode({ data }: (typeof initNodes)[number]) {
  console.debug({ data });
  return (
    <div>
      {data.header && (
        <div
          className={`mb-2 text-center  text-md ${
            get(data.header, "color") ?? "text-white"
          }`}
        >
          {data.header.title}
        </div>
      )}
      <div className="px-4 py-2 relative rounded-md bg-transparent border-2 flex min-h-100 items-center border-stone-400">
        {data.content}
        <Handle
          type="target"
          position={Position.Left}
          className="h-16 !bg-teal-500"
        />
        <Handle
          type="source"
          position={Position.Right}
          className="h-16 !bg-teal-500"
        />
      </div>
    </div>
  );
}

export default memo(CustomNode);
