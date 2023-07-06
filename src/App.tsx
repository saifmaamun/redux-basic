import { increment, decrement,payloadIncrement } from './redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks'

function App() {
    const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  

  return (
    <div className="flex gap-6">
      <button 
      className="px-2 py-3 border-2  rounded-md border-red-500"
      onClick={() => dispatch(increment())}
      > increment</button>
      <button 
      className="px-2 py-3 border-2  rounded-md border-red-500"
      onClick={() => dispatch(payloadIncrement(9))}
      > increment with payload</button>
      <div>{count}</div>
      <button 
      className="px-2 py-3 border-2  rounded-md border-cyan-500"
      onClick={() => dispatch(decrement())}
      > decrement</button>
    </div>
  )
}
// folder created

export default App
