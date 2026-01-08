'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Label } from "@/components/ui/Label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Loader2, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { useTranslation } from 'react-i18next';

export function ContactForm() {
    const { t } = useTranslation('contact');
    const tForms = useTranslation('forms').t;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const formSchema = z.object({
        name: z.string().min(3, { message: t('form.validation.name') }),
        email: z.string().email({ message: tForms('validation.email') }),
        subject: z.string().min(5, { message: t('form.validation.subject') }),
        message: z.string().min(10, { message: t('form.validation.message') }),
    })

    type ContactFormValues = z.infer<typeof formSchema>

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
    })

    function onSubmit(values: ContactFormValues) {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            console.log(values);
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container max-w-3xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t('hero.title')}</h2>
                    <p className="text-text-light">{t('hero.subtitle')}</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('form.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isSuccess ? (
                            <div className="text-center py-10 space-y-4">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{t('form.success.title')}</h3>
                                <p className="text-gray-600">{t('form.success.message')}</p>
                                <Button onClick={() => setIsSuccess(false)} variant="outline">
                                    {t('form.success.button')}
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{t('form.fields.name.label')}</Label>
                                        <Input id="name" placeholder={t('form.fields.name.placeholder')} {...form.register("name")} />
                                        {form.formState.errors.name && <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{t('form.fields.email.label')}</Label>
                                        <Input id="email" type="email" placeholder={t('form.fields.email.placeholder')} {...form.register("email")} />
                                        {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">{t('form.fields.subject.label')}</Label>
                                    <Input id="subject" placeholder={t('form.fields.subject.placeholder')} {...form.register("subject")} />
                                    {form.formState.errors.subject && <p className="text-sm text-red-500">{form.formState.errors.subject.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">{t('form.fields.message.label')}</Label>
                                    <Textarea
                                        id="message"
                                        placeholder={t('form.fields.message.placeholder')}
                                        className="min-h-[150px]"
                                        {...form.register("message")}
                                    />
                                    {form.formState.errors.message && <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>}
                                </div>

                                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            {t('form.submitting')}
                                        </>
                                    ) : (
                                        t('form.submit')
                                    )}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
