import FormComponent  from '@/components/containers/form'
import PageLayout from '@/layout/page-layout'
import { Card, CardContent } from '@/components/ui/card'


const FormPage = () => {

    return (
        <PageLayout>
            <Card className='w-[400px]'>
                <CardContent>
                    <FormComponent />
                </CardContent>
            </Card>
        </PageLayout>
    )
}

export default FormPage
