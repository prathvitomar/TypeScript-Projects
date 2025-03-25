import './App.css'
import MainHabitTracker from './projects/Habit-Tracker/components/MainHabitTracker'
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <MainTutorial/> */}
        <MainHabitTracker/>
      </Provider>
    </>
  )
}

export default App
