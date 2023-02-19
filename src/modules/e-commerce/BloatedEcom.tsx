import Globe from "../bloated-components/bloated-component";
import Codegen from "../codegen/CodegenFlowChart";
import { NPMTrend } from "../npm-trends";

const BloatedEcom = () => (
  <div className="ml-6">
    <Globe />
    <div className="hidden">
      <NPMTrend />
    </div>
    <div className="hidden">
      <Codegen />
    </div>
  </div>
);

export default BloatedEcom;
