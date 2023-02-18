import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Edge,
  Position,
  useEdgesState,
  useNodesState
} from "reactflow";

import "reactflow/dist/base.css";

import CustomNode from "./CustomNode";

const BloatedGenerated = () => (
  <div className="bg-transparent text-white text-center justify-center items-center w-fit h-min gap-6">
    {[
      "productQuery",
      "filmQuery",
      "cartQuery",
      "addToCartMutation",
      "themeQuery",
    ].map((s) => (
      <div key={s} className="flex gap-2 justify-center">
        <div className="text-inherit">{`export const ${s}`}</div>
        <div className="text-green-500">{"(1kb)"}</div>
      </div>
    ))}
    <div className=" text-red-500">...others 95 exports...</div>
  </div>
);

const Modularizer = () => (
  <div className="bg-transparent text-white text-center flex flex-col justify-center w-fit h-min gap-3">
    {["productQuery", "filmQuery"].map((s) => (
      <div
        key={s}
        className="flex flex-col justify-center border-2 border-stone-400"
      >
        <div className=" text-gray-400 text-sm">{`//${s}.ts`}</div>
        <div className="text-inherit p-1">{`export const ${s}`}</div>
      </div>
    ))}
    <div className=" text-red-500">...others 98 files...</div>
  </div>
);

const ReExport = () => (
  <div className="bg-transparent text-white text-center justify-center items-center w-fit h-min gap-6">
    {[
      "productQuery",
      "filmQuery",
      "cartQuery",
      "addToCartMutation",
      "themeQuery",
    ].map((s) => (
      <div key={s} className="flex gap-2 justify-center">
        <div className="text-inherit">{`export ${s} from mode-gen/${s}.ts`}</div>
      </div>
    ))}
    <div className=" text-green-500">...others 95 exports...</div>
  </div>
);

export const initNodes = [
  {
    id: "generate",
    type: "custom",
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      header: {
        title: "src/generated.tsx",
      },
      content: <BloatedGenerated />,
    },
    position: { x: -400, y: 0 },
  },
  {
    id: "product-page",
    type: "custom",
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      header: {
        title: "",
      },
      content: (
        <div className="flex h-full items-center">
          <div className="text-white text-xl">Product Page</div>,
        </div>
      ),
    },

    position: { x: 400, y: 0 },
  },
  {
    id: "modularizer",
    type: "custom",
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      header: {
        title: "src/mod-gen",
      },
      content: <Modularizer />,
    },
    position: { x: -100, y: 300 },
  },
  {
    id: "re-export",
    type: "custom",
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      header: {
        title: "src/index.ts",
      },
      content: <ReExport />,
    },
    position: { x: 200, y: 300 },
  },
] as const;

type NodeId = (typeof initNodes)[number]["id"];

type SourceTarget = { target: NodeId; source: NodeId };

const initEdges: [{ id: string } & SourceTarget] = [
  {
    id: "modularizer-re-export",
    source: "modularizer",
    target: "re-export",
  },
];

const nodeTypes = { custom: CustomNode };

const FLow = () => {
  //@ts-ignore
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  // const updateNodeInternals = useUpdateNodeInternals();
  const onConnect = useCallback((params: Edge) => {
    setEdges((eds) => {
      console.debug({ eds, params });

      const source = params.source as NodeId;
      const target = params.target as NodeId;

      const getProuctPageHeader = () => {
        if (source === "generate" && target === "product-page")
          return { title: "100kb !!!", color: "text-red-500" };

        if (source === "re-export" && target === "product-page")
          return { title: "1kb", color: "text-green-500" };

        return { title: "" };
      };

      const productPageNodeHeader = getProuctPageHeader();
      const productNode = nodes.find((n) => n.id === "product-page");
      const updatedNodes = [
        ...nodes.filter((n) => n.id !== "product-page"),
        {
          ...productNode,
          data: { ...productNode?.data, header: productPageNodeHeader },
        },
      ];
      setNodes(updatedNodes as typeof nodes);

      return addEdge(params, eds);
    });
  }, []);

  return (
    <div
      style={{
        minWidth: "800px",
        minHeight: "600px",
        width: "100%",
        height: "100%",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(e) => {
          console.debug("node change: ", { e });
          onNodesChange(e);
        }}
        onEdgesChange={(e) => onEdgesChange(e)}
        //@ts-ignore
        onConnect={onConnect}
        //@ts-ignore
        nodeTypes={nodeTypes}
        fitView
        className="bg-transparent"
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FLow;
