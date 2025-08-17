import React from 'react';
import { Header } from "@/components/header";
import { DmcaBanner } from "@/components/Pricing/DmcaBanner";
import { FeedbackForm } from "@/components/FeedbackForm";
import { DmcaContent } from "@/components/DmcaContent.jsx";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <DmcaBanner />
            <DmcaContent/>
            <FeedbackForm />
            <Footer />

        </main>
    )
}

