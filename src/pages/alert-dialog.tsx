import PageLayout from '@/layout/page-layout'
import AlertDialogComponent  from '@/components/containers/alert-dialog'
import { Card, CardContent } from '@/components/ui/card'


const AlertDialogPage = () => {
    return (
        <PageLayout>
            <Card className='w-[400px]'>
                <CardContent>
                    < AlertDialogComponent />
                </CardContent>
            </Card>
        </PageLayout>
    )
}

export default AlertDialogPage