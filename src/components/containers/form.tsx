import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
    
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/ui/container"

const formSchema = z.object({
    username: z.string().min(2, ),
    })

const FormComponent = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        mode: 'onBlur',
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="shadcn" {...field} onBlur={field.onBlur}/>
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Container className="flex justify-center">
                    <Button size="sm" type="submit" className="mr-1">儲存</Button>
                    <Button size="sm">下一步</Button>
                </Container>
            </form>
        </Form>
    )
}

export default FormComponent