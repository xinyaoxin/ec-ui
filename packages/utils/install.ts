import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'


type SFCWithInstall<T> = T & Plugin

export function makeInstall(components: Plugin[]) {
  //app是应用即createApp的实例
  const install = (app: App) => each(components, (c) => {
    app.use(c)
  })
  return install
}

export function withInstall<T>(component: T) {
  console.log('传入的', component);
  //这里的app也是应用
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name
    app.component(name, component as SFCWithInstall<T>)
  }
  return component as SFCWithInstall<T>
}
