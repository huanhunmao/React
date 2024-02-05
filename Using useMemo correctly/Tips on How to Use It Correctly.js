// 别忘了 还有这些技术可用 
//  such as: useCallback, React.memo, debouncing, code-splitting, lazy-loading and so on.

function doCalculation() {
    const now = performance.now();
    while (performance.now() - now < 500) {
      // do nothing for 500ms
    }
  
    return Math.random();
  }
  
  export default function App() {
    const [value, setValue] = useState(0);
    // const calculation = doCalculation();
    // 生成 随机数 这种 较复杂运算 并且没有别的依赖关系
    const calculation = useMemo(() => doCalculation(), []);
  
    return (
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <h1>{`Calculation is ${calculation}`}</h1>
      </div>
    );
  }