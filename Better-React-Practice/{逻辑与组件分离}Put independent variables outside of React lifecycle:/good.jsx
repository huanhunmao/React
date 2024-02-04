// 解决方案
import {useItemsList} from './useItemsList'

// 在需要使用items的组件中
function AnotherComponent() {
  const { items } = useItemsList();

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default AnotherComponent;