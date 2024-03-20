import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

interface TabProps {
    value: string,
    children: React.ReactNode
}

interface TabsWrapperProps {
    defaultTab: string,
    tabs: Array<TabProps>
}


export const TabsWrapper = (props: TabsWrapperProps) => {
    const { defaultTab, tabs } = props

    return (
        <Tabs defaultValue={defaultTab} className="w-[400px]">
        <TabsList>
            { 
              tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>{tab.value}</TabsTrigger>
              ))
            }
        </TabsList>
        {
          tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>{tab.children}</TabsContent>
          ))
        }
      </Tabs>
    )
}

export default TabsWrapper
