import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/container';
import { PropsWithChildren } from 'react';

export const PageLayout: React.FC<PropsWithChildren<object>>= ({children}) => {

    return(
        <>
            <Container variant="centerItemPadded">
                <Container>
                    <Button variant="ghost" asChild>
                        <Link to="/form">Form</Link>
                    </Button>
                    <Button variant="ghost"  asChild>
                        <Link to="/alert-dialog">AlertDialog</Link>
                    </Button>
                    <Button variant="ghost"  asChild>
                        <Link to="/otp">Otp</Link>
                    </Button>
                    {children}
                </Container>
            </Container>
        </>
    )
}

export default PageLayout