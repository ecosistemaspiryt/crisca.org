'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { FileUp, Loader2, Send } from "lucide-react"
import { Label } from "@/components/ui/Label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { useState } from "react"
import { useTranslation } from 'react-i18next';

export function RequestForm() {
    const { t } = useTranslation('request');
    const tForms = useTranslation('forms').t;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const formSchema = z.object({
        applicantType: z.string().min(1, { message: tForms('validation.required') }),
        fullName: z.string().min(3, { message: tForms('validation.required') }),
        orgName: z.string().optional(),
        email: z.string().email({ message: tForms('validation.email') }),
        phone: z.string().min(8, { message: tForms('validation.phone') }),
        address: z.string().min(5, { message: tForms('validation.required') }),
        beneficiaries: z.string().min(1, { message: tForms('validation.required') }),
        usage: z.string().min(10, { message: tForms('validation.min_length', { min: 10 }) }),
        internet: z.string().min(1, { message: tForms('validation.required') }),
    })

    type RequestFormValues = z.infer<typeof formSchema>

    const form = useForm<RequestFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            orgName: "",
            email: "",
            phone: "",
            address: "",
            beneficiaries: "",
            usage: "",
            applicantType: "",
            internet: ""
        } as any,
    })

    function onSubmit(values: RequestFormValues) {
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
            <section className="py-20 bg-gray-50" id="solicitud">
                <div className="container max-w-md mx-auto px-4">
                    <Card className="text-center py-10 border-primary/20 shadow-lg">
                        <CardContent className="space-y-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <Send className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('form.success.title')}</h2>
                            <p className="text-gray-600">
                                {t('form.success.message')}
                            </p>
                            <Button onClick={() => setIsSuccess(false)} variant="outline">
                                {t('form.success.back')}
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-gray-50" id="solicitud">
            <div className="container max-w-3xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t('form.title')}</h2>
                    <p className="text-text-light">{t('form.subtitle')}</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('form.card_title')}</CardTitle>
                        <CardDescription>{t('form.card_desc')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            <div className="space-y-2">
                                <Label>{t('form.fields.applicantType.label')} *</Label>
                                <Select onValueChange={(val) => form.setValue("applicantType", val)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t('form.fields.applicantType.placeholder')} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="organization">{t('form.fields.applicantType.options.organization')}</SelectItem>
                                        <SelectItem value="individual">{t('form.fields.applicantType.options.individual')}</SelectItem>
                                    </SelectContent>
                                </Select>
                                {form.formState.errors.applicantType && <p className="text-sm text-red-500">{form.formState.errors.applicantType.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">{t('form.fields.fullName.label')} *</Label>
                                    <Input id="fullName" placeholder={t('form.fields.fullName.placeholder')} {...form.register("fullName")} />
                                    {form.formState.errors.fullName && <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="orgName">{t('form.fields.orgName.label')}</Label>
                                    <Input id="orgName" placeholder={t('form.fields.orgName.placeholder')} {...form.register("orgName")} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">{t('form.fields.phone.label')} *</Label>
                                    <Input id="phone" placeholder={t('form.fields.phone.placeholder')} {...form.register("phone")} />
                                    {form.formState.errors.phone && <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">{t('form.fields.email.label')} *</Label>
                                    <Input id="email" type="email" placeholder={t('form.fields.email.placeholder')} {...form.register("email")} />
                                    {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">{t('form.fields.address.label')} *</Label>
                                <Input id="address" placeholder={t('form.fields.address.placeholder')} {...form.register("address")} />
                                {form.formState.errors.address && <p className="text-sm text-red-500">{form.formState.errors.address.message}</p>}
                            </div>

                            <div className="space-y-4 border-t pt-4">
                                <h4 className="font-semibold text-gray-700">{t('hero.subtitle')} {/* Fallback title or use new key if needed, re-using hero subtitle as context or could be hardcoded generic "Detalle" */}</h4>

                                <div className="space-y-2">
                                    <Label htmlFor="usage">{t('form.fields.usage.label')} *</Label>
                                    <Textarea
                                        id="usage"
                                        placeholder={t('form.fields.usage.placeholder')}
                                        className="min-h-[100px]"
                                        {...form.register("usage")}
                                    />
                                    {form.formState.errors.usage && <p className="text-sm text-red-500">{form.formState.errors.usage.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label>{t('form.fields.beneficiaries.label')} *</Label>
                                        <Input id="beneficiaries" type="number" placeholder={t('form.fields.beneficiaries.placeholder')} {...form.register("beneficiaries")} />
                                        {form.formState.errors.beneficiaries && <p className="text-sm text-red-500">{form.formState.errors.beneficiaries.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label>{t('form.fields.internet.label')} *</Label>
                                        <Select onValueChange={(val) => form.setValue("internet", val)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('form.fields.internet.placeholder')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="yes">{t('form.fields.internet.options.yes')}</SelectItem>
                                                <SelectItem value="mobile">{t('form.fields.internet.options.mobile')}</SelectItem>
                                                <SelectItem value="no">{t('form.fields.internet.options.no')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {form.formState.errors.internet && <p className="text-sm text-red-500">{form.formState.errors.internet.message}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Documentación opcional visualmente (sin lógica real de upload aun) */}
                            <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:bg-gray-100 transition-colors">
                                <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <span className="text-sm text-gray-600 block">{t('form.fields.file_upload.text')}</span>
                                <span className="text-xs text-gray-400">{t('form.fields.file_upload.hint')}</span>
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
