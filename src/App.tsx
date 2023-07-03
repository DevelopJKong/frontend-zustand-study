import { useCounterStore } from "./hooks/zustand/use-counter.hook";

interface ICounterStore {
  count: number;
  setCount: (count: number) => void;
}

function App() {
  const { count, setCount } = useCounterStore();
  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        업버튼
      </button>
      <div>{count}</div>
    </>
  );
}

export default App;
