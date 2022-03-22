//vant按需引入
import { App as VM } from 'vue'
import { Button, Cell, CellGroup, Icon, Tabbar, TabbarItem, Image as VanImage,
  PullRefresh, Swipe, SwipeItem, Grid, GridItem,Empty,Tab, Tabs,ConfigProvider,
  Skeleton,List,Field,TreeSelect,DropdownMenu, DropdownItem, Uploader,Popup,Picker,
  Tag
} from 'vant'

const plugins = [Button, Icon, Cell, CellGroup, Tabbar, TabbarItem, VanImage,
  PullRefresh, Swipe, SwipeItem, Grid, GridItem,Empty,Tab, Tabs,ConfigProvider,
  Skeleton,List,Field,TreeSelect,DropdownMenu, DropdownItem,Uploader,Popup,Picker,
  Tag
]

export const vantPlugins = {
  install: function(vm: VM) {
    plugins.forEach((item) => {
      vm.component(item.name, item)
    })
  }
}
