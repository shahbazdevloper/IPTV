import React from 'react';
import { Header } from "@/components/header";
import { TermsAndConditions } from "@/components/Pricing/TermsAndConditions";
import { FeedbackForm } from "@/components/FeedbackForm";
import { TermsContent } from "@/components/TermsContent";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <TermsAndConditions />
            <TermsContent/>
            <FeedbackForm />
            <Footer />

        </main>
    )
}

