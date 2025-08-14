"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { ContactExtra } from "@/types/type";

export default function ContactModal({ contact, onClose }: { contact: ContactExtra; onClose: () => void;}) {

    const { register, handleSubmit, errors } = useContactForm();

    const onSubmit = () => {
        onClose();
    };

    return (

        <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-600">Kontakt: {contact.text}</h2>
                    <button onClick={onClose} className="rounded-full bg-slate-600 px-3 py-1 text-white hover:bg-black/70">x</button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-600">Navn</label>
                        <input {...register('name')} className="w-full rounded-lg border border-slate-300 px-3 py-2 hover:ring ring-slate-600 focus:border-slate-600 focus:outline-hidden" placeholder="Dit navn ..." />
                        <span className="mt-1 text-sm text-red-500">
                            {errors.name?.message}
                        </span>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-600">Email</label>
                        <input {...register('email')} className="w-full rounded-lg border border-slate-300 px-3 py-2 hover:ring ring-slate-600 focus:border-slate-600 focus:outline-hidden" placeholder="Dit mail ..." />
                        <span className="mt-1 text-sm text-red-500">
                            {errors.email?.message}
                        </span>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-600">Emne</label>
                        <input {...register('subject')} className="w-full rounded-lg border border-slate-300 px-3 py-2 hover:ring ring-slate-600 focus:border-slate-600 focus:outline-hidden" placeholder="Emne ..." />
                        <span className="mt-1 text-sm text-red-500">
                            {errors.subject?.message}
                        </span>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-600">Besked</label>
                        <textarea {...register('message')} className="h-32 w-full resize-none rounded-lg border border-slate-300 px-3 py-2 hover:ring ring-slate-600 focus:border-slate-600 focus:outline-hidden" placeholder="Din besked ..." />
                        <span className="mt-1 text-sm text-red-500">
                            {errors.subject?.message}
                        </span>
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button type="submit" className="rounded-lg bg-slate-600 px-4 py-2 text-white hover:bg-black/70">send</button>
                    </div>
                </form>
            </div>
        </div>

    );

}