import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z
        .string()
        .min(1, 'navn skal udfyldes'),
    email: z
        .string()
        .email('ikke en gyldig email'),
    subject: z
        .string()
        .min(1, 'emne skal udfyldes'),
    message: z
        .string()
        .min(1, 'besked skal udfyldes')
});

type FormValues = z.infer<typeof schema>;

export function useContactForm() {
    const { register, handleSubmit, formState: { errors } } =
        useForm<FormValues>({ resolver: zodResolver(schema) });

    return { register, handleSubmit, errors };
}