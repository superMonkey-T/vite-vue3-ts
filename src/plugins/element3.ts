import 'element3/lib/theme-chalk/index.css'
import { ElButton } from 'element3'
import { ElInput } from 'element3'
import { ElContainer } from 'element3'
import { ElAside } from 'element3'
import { ElMain } from 'element3'


export default function(app: any) {
  app.use(ElButton)
  .use(ElInput)
  .use(ElContainer)
  .use(ElAside)
  .use(ElMain)
}
