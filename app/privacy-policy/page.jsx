import React from 'react';
import { Header } from "@/components/header";
import { PrivacyPolicy } from "@/components/Pricing/PrivacyPolicy";
import { FeedbackForm } from "@/components/FeedbackForm";
import { PrivacyContent } from "@/components/PrivacyContent";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <PrivacyPolicy />
            <PrivacyContent/>
            <FeedbackForm />
            <Footer />

        </main>
    )
}

