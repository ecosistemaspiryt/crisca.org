'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Label } from "@/components/ui/Label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Loader2, CheckCircle } from "lucide-react"
import { useState } from "react"
import { useTranslation, Trans } from 'react-i18next';

export function ChapelForm() {
    const { t } = useTranslation('chapel');
    const tForms = useTranslation('forms').t;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const formSchema = z.object({
        orgName: z.string().min(3, { message: t('form.validation.orgName') }),
        orgType: z.string().min(1, { message: t('form.validation.orgType') }),
        contactName: z.string().min(3, { message: t('form.validation.contactName') }),
        email: z.string().email({ message: tForms('validation.email') }),
        phone: z.string().min(8, { message: t('form.validation.phone') }),
        address: z.string().min(5, { message: t('form.validation.address') }),
        availability: z.string().min(3, { message: t('form.validation.availability') }),
        storageSpace: z.string().min(1, { message: t('form.validation.storageSpace') }),
        motivation: z.string().min(10, { message: t('form.validation.motivation') }),
    })

    type ChapelFormValues = z.infer<typeof formSchema>

    const form = useForm<ChapelFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            orgName: "",
            contactName: "",
            email: "",
            phone: "",
            address: "",
            availability: "",
            motivation: "",
            orgType: "",
            storageSpace: ""
        } as any,
    })

    function onSubmit(values: ChapelFormValues) {
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
            <section className="py-20 bg-gray-50" id="postulacion">
                <div className="container max-w-md mx-auto px-4">
                    <Card className="text-center py-10 border-green-100 shadow-lg">
                        <CardContent className="space-y-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('form.success.title')}</h2>
                            <p className="text-gray-600">
                                <Trans
                                    i18nKey="form.success.message"
                                    t={t}
                                    values={{ name: form.getValues().contactName }}
                                    components={{ bold: <strong /> }}
                                />
                            </p>
                            <Button onClick={() => setIsSuccess(false)} variant="outline">
                                {t('form.success.button')}
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-gray-50" id="postulacion">
            <div className="container max-w-3xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t('hero.title')}</h2>
                    <p className="text-text-light">{t('hero.subtitle')}</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('form.sections.organization.title')}</CardTitle>
                        <CardDescription>{t('form.sections.organization.description')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            {/* Organización */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="orgName">{t('form.fields.orgName.label')}</Label>
                                    <Input id="orgName" placeholder={t('form.fields.orgName.placeholder')} {...form.register("orgName")} />
                                    {form.formState.errors.orgName && <p className="text-sm text-red-500">{form.formState.errors.orgName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label>{t('form.fields.orgType.label')}</Label>
                                    <Select onValueChange={(val) => form.setValue("orgType", val)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t('form.fields.orgType.placeholder')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="parish">{t('form.fields.orgType.options.parish')}</SelectItem>
                                            <SelectItem value="school">{t('form.fields.orgType.options.school')}</SelectItem>
                                            <SelectItem value="club">{t('form.fields.orgType.options.club')}</SelectItem>
                                            <SelectItem value="ngo">{t('form.fields.orgType.options.ngo')}</SelectItem>
                                            <SelectItem value="other">{t('form.fields.orgType.options.other')}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {form.formState.errors.orgType && <p className="text-sm text-red-500">{form.formState.errors.orgType.message}</p>}
                                </div>
                            </div>

                            {/* Responsable */}
                            <div className="space-y-4 border-t pt-4">
                                <h4 className="font-semibold text-gray-700">{t('form.sections.responsible.title')}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="contactName">{t('form.fields.contactName.label')}</Label>
                                        <Input id="contactName" placeholder={t('form.fields.contactName.placeholder')} {...form.register("contactName")} />
                                        {form.formState.errors.contactName && <p className="text-sm text-red-500">{form.formState.errors.contactName.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">{t('form.fields.phone.label')}</Label>
                                        <Input id="phone" placeholder={t('form.fields.phone.placeholder')} {...form.register("phone")} />
                                        {form.formState.errors.phone && <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>}
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="email">{t('form.fields.email.label')}</Label>
                                        <Input id="email" type="email" placeholder={t('form.fields.email.placeholder')} {...form.register("email")} />
                                        {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Logística */}
                            <div className="space-y-4 border-t pt-4">
                                <h4 className="font-semibold text-gray-700">{t('form.sections.logistics.title')}</h4>
                                <div className="space-y-2">
                                    <Label htmlFor="address">{t('form.fields.address.label')}</Label>
                                    <Input id="address" placeholder={t('form.fields.address.placeholder')} {...form.register("address")} />
                                    {form.formState.errors.address && <p className="text-sm text-red-500">{form.formState.errors.address.message}</p>}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="availability">{t('form.fields.availability.label')}</Label>
                                        <Input id="availability" placeholder={t('form.fields.availability.placeholder')} {...form.register("availability")} />
                                        {form.formState.errors.availability && <p className="text-sm text-red-500">{form.formState.errors.availability.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label>{t('form.fields.storageSpace.label')}</Label>
                                        <Select onValueChange={(val) => form.setValue("storageSpace", val)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('form.fields.storageSpace.placeholder')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="yes_secure">{t('form.fields.storageSpace.options.yes_secure')}</SelectItem>
                                                <SelectItem value="yes_limited">{t('form.fields.storageSpace.options.yes_limited')}</SelectItem>
                                                <SelectItem value="no">{t('form.fields.storageSpace.options.no')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {form.formState.errors.storageSpace && <p className="text-sm text-red-500">{form.formState.errors.storageSpace.message}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Motivación */}
                            <div className="space-y-2 border-t pt-4">
                                <Label htmlFor="motivation">{t('form.sections.motivation.label')}</Label>
                                <Textarea
                                    id="motivation"
                                    placeholder={t('form.fields.motivation.placeholder')}
                                    className="min-h-[100px]"
                                    {...form.register("motivation")}
                                />
                                {form.formState.errors.motivation && <p className="text-sm text-red-500">{form.formState.errors.motivation.message}</p>}
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
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
