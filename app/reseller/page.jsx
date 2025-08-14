import React from 'react';
import { Header } from "@/components/header";
import { HeroSectionReseller } from "@/components/Pricing/HeroSectionReseller";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Resller } from "@/components/Resller.jsx";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <HeroSectionReseller />
            <Resller />

            <FeedbackForm />
            <Footer />

        </main>
    )
}

