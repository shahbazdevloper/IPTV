import React from 'react';
import { Header } from "@/components/header";
import { PricingBanner } from "@/components/Pricing/PricingBanner";
import { FeedbackForm } from "@/components/FeedbackForm";
import { SimpleSteps } from "@/components/SimpleSteps.jsx";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <PricingBanner />
            <SimpleSteps />

            <FeedbackForm />
            <Footer />

        </main>
    )
}

