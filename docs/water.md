<!-- water.md -->

## 水分流失

水分每120s(2m)扣除一次,每次扣除 **1~7** 点水分  
当玩家身体里的水分低于 **70%** 时会产生[负面效果](water?id=负面效果),当水分为 **0** 时,玩家死亡  
玩家水分无上限,但水分超出120%后会有[负面效果](water?id=负面效果)  

## 补充水分

当玩家刚进入游戏时,新手物资内有四瓶水  
可喝掉水瓶内的水补充水分  
每瓶水可补充 **1~5** 点水分  

## 负面效果

当玩家水分小于 **80%**
   - 给予等级为 **1** 的缓慢
当玩家水分小于 **70%**
   - 给予等级为 **2** 的缓慢
   - 给予等级为 **2** 的挖掘疲劳
   - 每 **15s** 给予等级为 **10** 持续时间为 **5s** 的反胃
当玩家水分小于 **50%**
   - 给予等级为 **4** 的缓慢
   - 给予等级为 **10** 的挖掘疲劳
   - 给予等级为 **50** 的反胃
当玩家水分小于 **30%**
   - 给予等级为 **255** 的缓慢
   - 给予等级为 **10** 的挖掘疲劳
   - 给予等级为 **50** 的反胃
   - 给予等级为 **255** 的失明
当玩家水分为 **0**
   - 玩家死亡

## 补充说明

当你 **重生后**(不仅仅因缺少而死) 水分值并不会恢复满,而是在 **80~100** 中随机
当你水分值不够时可以选择使用[Neomega](./Neomega.md)自杀来恢复水分