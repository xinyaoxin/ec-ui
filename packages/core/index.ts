import { makeInstall } from "@el-comp/utils";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from "./components";
import '@el-comp/theme/index.css'

library.add(fas)
const install = makeInstall(components);

export * from "@el-comp/components";
export default install;