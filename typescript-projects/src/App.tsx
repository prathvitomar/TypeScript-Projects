import './App.css'
// import MainHabitTracker from './projects/Habit-Tracker/components/MainHabitTracker'
import { Provider } from 'react-redux'
import store from './app/store'
import MainNotes from './projects/Notes/components/MainNotes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        {/* <MainTutorial/> */}
        {/* <MainHabitTracker/> */}
        <MainNotes/>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
