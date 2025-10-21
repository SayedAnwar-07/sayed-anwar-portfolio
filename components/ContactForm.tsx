"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/ui/magic-card";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  // Auto-hide messages after 5 seconds
  useEffect(() => {
    if (successMsg || errorMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(null);
        setErrorMsg(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, errorMsg]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccessMsg(null);
    setErrorMsg(null);

    // Validation
    if (form.name.trim().length < 2) return setErrorMsg("Please enter a valid name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setErrorMsg("Please enter a valid email.");
    if (form.message.trim().length < 5) return setErrorMsg("Please enter a longer message.");

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data?.errors && Array.isArray(data.errors)) {
          setErrorMsg(data.errors.join(" "));
        } else if (data?.error) {
          setErrorMsg(data.error);
        } else {
          setErrorMsg("Could not send message. Try again later.");
        }
      } else {
        setSuccessMsg("✅ Message sent — thank you! I'll get back to you soon.");
        setForm({ name: "", email: "", number: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <Card className="w-full border-none p-0 shadow-none">
        <MagicCard className="p-0">
          <CardContent className="p-4">
            {(errorMsg || successMsg) && (
              <div
                className={`mb-4 flex items-center justify-between p-3 text-sm ${
                  errorMsg
                    ? "text-red-700"
                    : "text-green-700"
                }`}
              >
                <p>{errorMsg || successMsg}</p>
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg(null);
                    setSuccessMsg(null);
                  }}
                  className={`ml-3 rounded-md p-1 transition-all duration-75 delay-100 ${
                  errorMsg
                    ? "hover:bg-red-800 bg-red-700"
                    : "hover:bg-green-800 bg-green-700"
                }`}
                >
                  <X size={16} />
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2 mb-3">
                  <Label className="mb-2" htmlFor="name">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="enter your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2 mb-3">
                  <Label className="mb-2" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="enter your email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2 mb-3">
                  <Label className="mb-2" htmlFor="number">
                    Contact No
                  </Label>
                  <Input
                    id="number"
                    type="tel"
                    placeholder="enter your number"
                    value={form.number}
                    onChange={(e) => update("number", e.target.value)}
                  />
                </div>

                <div className="grid gap-2 mb-3">
                  <Label className="mb-2" htmlFor="message-2">
                    Your Message
                  </Label>
                  <Textarea
                    placeholder="Type your message here."
                    id="message-2"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    required
                    rows={5}
                  />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
            <Button className="w-full" onClick={(e) => handleSubmit(e as any)} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </CardFooter>
        </MagicCard>
      </Card>
    </div>
  );
}
