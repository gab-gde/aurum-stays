"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <Container className="max-w-2xl">
          <h1 className="font-display text-3xl font-bold text-white mb-8">Settings</h1>
          <Card className="!p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input label="Full Name" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="your@email.com" />
              <Input label="Phone" type="tel" placeholder="+33 ..." />
              <Input label="New Password" type="password" placeholder="Leave blank to keep current" />
              <Button type="submit" className="w-full">Save Changes</Button>
              {saved && <p className="text-emerald-400 text-sm text-center">Settings saved!</p>}
            </form>
          </Card>
        </Container>
      </main>
      <Footer />
    </>
  );
}
