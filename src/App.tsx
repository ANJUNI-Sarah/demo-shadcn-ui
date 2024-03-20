import { TabsWrapper } from '@/components/containers/tabsWrapper'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';



const Children_1 = () => {
  return (
    <div>
      <h1>Children 1</h1>
    </div>
  )
}

const Children_2 = () => {
  return (
    <div>
      <h1>Children 2</h1>
    </div>
  )
}

const tabs = {
  defaultTab: 'Children_1',
  tabs: [
    {
      value: 'Children_1',
      children: <Children_1/>
    },
    {
      value: 'Children_2',
      children: <Children_2/>
    }
  ]
}


function App() {

  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  )
}

export default App
