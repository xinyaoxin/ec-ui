import { makeInstall } from "@el-comp/utils";
import components from "./components";
import '@el-comp/theme/index.css'


const install = makeInstall(components);

export * from "@el-comp/components";
export default install;