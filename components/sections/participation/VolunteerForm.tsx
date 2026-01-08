'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Label } from "@/components/ui/Label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Loader2, HeartHandshake } from "lucide-react"
import { useState } from "react"
import { useTranslation, Trans } from 'react-i18next';

export function VolunteerForm() {
    const { t } = useTranslation('volunteer');
    const tForms = useTranslation('forms').t; // Use common forms translation for generic errors if needed, but here we use specific ones or common keys.
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Schema defined here to use translations
    const formSchema = z.object({
        fullName: z.string().min(3, { message: tForms('validation.required') }),
        email: z.string().email({ message: tForms('validation.email') }),
        phone: z.string().min(8, { message: tForms('validation.phone') }),
        city: z.string().min(3, { message: tForms('validation.required') }),
        techLevel: z.string().min(1, { message: tForms('validation.required') }),
        areas: z.string().min(1, { message: tForms('validation.required') }),
        availability: z.string().min(3, { message: tForms('validation.required') }),
        motivation: z.string().optional(),
    });

    type VolunteerFormValues = z.infer<typeof formSchema>

    const form = useForm<VolunteerFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            city: "",
            motivation: "",
            availability: "",
            techLevel: "",
            areas: ""
        } as any,
    })

    function onSubmit(values: VolunteerFormValues) {
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
            <section className="py-20 bg-gray-50" id="inscripcion">
                <div className="container max-w-md mx-auto px-4">
                    <Card className="text-center py-10 border-blue-100 shadow-lg">
                        <CardContent className="space-y-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-primary">
                                <HeartHandshake className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('form.success.title')}</h2>
                            <p className="text-gray-600">
                                <Trans
                                    i18nKey="form.success.message"
                                    t={t}
                                    values={{ email: form.getValues().email }}
                                    components={{ bold: <strong /> }}
                                />
                            </p>
                            <Button onClick={() => setIsSuccess(false)} variant="ghost">
                                {t('form.success.back')}
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-gray-50" id="inscripcion">
            <div className="container max-w-2xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t('form.title')}</h2>
                    <p className="text-text-light">{t('form.subtitle')}</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('form.card_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            {/* Datos Personales */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">{t('form.fields.fullName.label')} *</Label>
                                    <Input id="fullName" placeholder={t('form.fields.fullName.placeholder')} {...form.register("fullName")} />
                                    {form.formState.errors.fullName && <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="city">{t('form.fields.city.label')} *</Label>
                                    <Input id="city" placeholder={t('form.fields.city.placeholder')} {...form.register("city")} />
                                    {form.formState.errors.city && <p className="text-sm text-red-500">{form.formState.errors.city.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email">{t('form.fields.email.label')} *</Label>
                                    <Input id="email" type="email" placeholder={t('form.fields.email.placeholder')} {...form.register("email")} />
                                    {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">{t('form.fields.phone.label')} *</Label>
                                    <Input id="phone" placeholder={t('form.fields.phone.placeholder')} {...form.register("phone")} />
                                    {form.formState.errors.phone && <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>}
                                </div>
                            </div>

                            {/* Perfil Técnico */}
                            <div className="space-y-4 border-t pt-4">
                                <h4 className="font-semibold text-gray-700">{t('info.items.technical.title')} {/* Reusing a title or generic label */}</h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label>{t('form.fields.techLevel.label')} *</Label>
                                        <Select onValueChange={(val) => form.setValue("techLevel", val)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('form.fields.techLevel.placeholder')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">{t('form.fields.techLevel.options.none')}</SelectItem>
                                                <SelectItem value="intermediate">{t('form.fields.techLevel.options.intermediate')}</SelectItem>
                                                <SelectItem value="advanced">{t('form.fields.techLevel.options.advanced')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {form.formState.errors.techLevel && <p className="text-sm text-red-500">{form.formState.errors.techLevel.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label>{t('form.fields.areas.label')} *</Label>
                                        <Select onValueChange={(val) => form.setValue("areas", val)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t('form.fields.areas.placeholder')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="hardware">{t('form.fields.areas.options.hardware')}</SelectItem>
                                                <SelectItem value="software">{t('form.fields.areas.options.software')}</SelectItem>
                                                <SelectItem value="logistics">{t('form.fields.areas.options.logistics')}</SelectItem>
                                                <SelectItem value="teaching">{t('form.fields.areas.options.teaching')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {form.formState.errors.areas && <p className="text-sm text-red-500">{form.formState.errors.areas.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="availability">{t('form.fields.availability.label')} *</Label>
                                    <Input id="availability" placeholder={t('form.fields.availability.placeholder')} {...form.register("availability")} />
                                    {form.formState.errors.availability && <p className="text-sm text-red-500">{form.formState.errors.availability.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2 border-t pt-4">
                                <Label htmlFor="motivation">{t('form.fields.motivation.label')}</Label>
                                <Textarea
                                    id="motivation"
                                    placeholder={t('form.fields.motivation.placeholder')}
                                    {...form.register("motivation")}
                                />
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
