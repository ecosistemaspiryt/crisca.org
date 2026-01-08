'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Loader2, Mail } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useTranslation, Trans } from 'react-i18next';

export function DonationForm() {
    const { t } = useTranslation('donate');
    const tForms = useTranslation('forms').t;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const formSchema = z.object({
        name: z.string().min(2, { message: t('form.validation.name') }),
        email: z.string().email({ message: tForms('validation.email') }),
        phone: z.string().min(8, { message: t('form.validation.phone') }),
        city: z.string().min(2, { message: t('form.validation.city') }),
        items: z.string().min(5, { message: t('form.validation.items') }),
        condition: z.string().min(1, { message: t('form.validation.condition') }),
        deliveryMethod: z.string().min(1, { message: t('form.validation.deliveryMethod') }),
        comments: z.string().optional(),
        terms: z.boolean().refine(val => val === true, {
            message: t('form.validation.terms')
        }),
    })

    type DonationFormValues = z.infer<typeof formSchema>

    const form = useForm<DonationFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            city: "",
            items: "",
            comments: "",
            terms: false,
            condition: "",
            deliveryMethod: ""
        } as any,
    })

    function onSubmit(values: DonationFormValues) {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            console.log(values);
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    }

    if (isSuccess) {
        return (
            <section className="py-20 bg-gray-50" id="formulario">
                <div className="container max-w-xl mx-auto px-4">
                    <Card className="text-center py-12">
                        <CardContent className="space-y-6 pt-6">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                <Mail className="w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{t('form.success.title')}</h2>
                            <p className="text-text-light">
                                <Trans
                                    i18nKey="form.success.message"
                                    t={t}
                                    values={{ email: form.getValues().email }}
                                    components={{ bold: <strong /> }}
                                />
                            </p>
                            <div className="pt-4">
                                <Button asChild>
                                    <Link href="/">{t('form.success.button')}</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-gray-50" id="formulario">
            <div className="container max-w-2xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t('hero.title')}</h2>
                    <p className="text-text-light">{t('hero.subtitle')}</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('form.title')}</CardTitle>
                        <CardDescription>
                            {t('form.description')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">{t('form.fields.phone.label')}</Label>
                                    <Input id="phone" placeholder={t('form.fields.phone.placeholder')} {...form.register("phone")} />
                                    {form.formState.errors.phone && <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="city">{t('form.fields.city.label')}</Label>
                                    <Input id="city" placeholder={t('form.fields.city.placeholder')} {...form.register("city")} />
                                    {form.formState.errors.city && <p className="text-sm text-red-500">{form.formState.errors.city.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="items">{t('form.fields.items.label')}</Label>
                                <Textarea
                                    id="items"
                                    placeholder={t('form.fields.items.placeholder')}
                                    {...form.register("items")}
                                />
                                {form.formState.errors.items && <p className="text-sm text-red-500">{form.formState.errors.items.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>{t('form.fields.condition.label')}</Label>
                                    <Select onValueChange={(val) => form.setValue("condition", val)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t('form.fields.condition.placeholder')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="working">{t('form.fields.condition.options.working')}</SelectItem>
                                            <SelectItem value="repairable">{t('form.fields.condition.options.repairable')}</SelectItem>
                                            <SelectItem value="unknown">{t('form.fields.condition.options.unknown')}</SelectItem>
                                            <SelectItem value="mixed">{t('form.fields.condition.options.mixed')}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {form.formState.errors.condition && <p className="text-sm text-red-500">{form.formState.errors.condition.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label>{t('form.fields.deliveryMethod.label')}</Label>
                                    <Select onValueChange={(val) => form.setValue("deliveryMethod", val)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t('form.fields.deliveryMethod.placeholder')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="dropoff_caba">{t('form.fields.deliveryMethod.options.dropoff_caba')}</SelectItem>
                                            <SelectItem value="dropoff_gba">{t('form.fields.deliveryMethod.options.dropoff_gba')}</SelectItem>
                                            <SelectItem value="pickup">{t('form.fields.deliveryMethod.options.pickup')}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {form.formState.errors.deliveryMethod && <p className="text-sm text-red-500">{form.formState.errors.deliveryMethod.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="comments">{t('form.fields.comments.label')}</Label>
                                <Textarea
                                    id="comments"
                                    placeholder={t('form.fields.comments.placeholder')}
                                    {...form.register("comments")}
                                />
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <Checkbox
                                    id="terms"
                                    checked={form.watch("terms")}
                                    onCheckedChange={(checked) => form.setValue("terms", checked as boolean)}
                                />
                                <Label htmlFor="terms" className="text-sm font-normal leading-tight text-text-light cursor-pointer">
                                    {t('form.fields.terms')}
                                </Label>
                            </div>
                            {form.formState.errors.terms && <p className="text-sm text-red-500">{form.formState.errors.terms.message}</p>}

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
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
