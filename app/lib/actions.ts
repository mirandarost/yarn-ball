'use server';

import { redirect } from "next/navigation";

export async function getIdInput(formData: FormData) {
    const id = formData.get('patternId');
    redirect(`/details/${id}`);
}