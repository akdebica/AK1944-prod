"use client";

import { useState } from "react";
import Link from "next/link";
import { FormField } from "@/components/shared/FormField";
import { Label } from "@/components/shared/Label";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { Button } from "@/components/shared/Button/Button";
import { cn } from "@/utils";
import { Textarea } from "@/components/shared/Textarea/Textarea";
import { Checkbox } from "@/components/shared/Checkbox/Checkbox";
import { Routes } from "@/routes";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  consent?: string;
}

interface ContactFormProps {
  successMessage?: string;
  consentPurpose?: string;
}

export const ContactForm = ({
  successMessage = "Twoje zgłoszenie na rajd zostało przyjęte. Skontaktujemy się z Tobą wkrótce.",
  consentPurpose = "zgłoszenia na rajd",
}: ContactFormProps = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const consent = formData.get("consent") as string;

    if (!firstName?.trim()) {
      errors.firstName = "Imię jest wymagane";
    }

    if (!lastName?.trim()) {
      errors.lastName = "Nazwisko jest wymagane";
    }

    if (!email?.trim()) {
      errors.email = "Adres e-mail jest wymagany";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Nieprawidłowy format adresu e-mail";
    }

    if (!message?.trim()) {
      errors.message = "Wiadomość jest wymagana";
    }

    if (!consent) {
      errors.consent = "Zgoda na przetwarzanie danych jest wymagana";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
      
      if (!formspreeId) {
        throw new Error("Formspree ID nie jest skonfigurowane");
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrors({
            email: "Wystąpił błąd podczas wysyłania formularza",
          });
        }
      }
    } catch {
      setErrors({
        email: "Wystąpił błąd podczas wysyłania formularza",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-greenMain p-6 text-center shadow-lg">
        <p className="mb-2 font-lora text-2xl font-bold text-white">
          Dziękujemy za zgłoszenie!
        </p>
        <p className="text-white">
          {successMessage}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-white underline hover:text-greenLight"
        >
          Wyślij kolejne zgłoszenie
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg bg-greenMain p-6 shadow-lg tablet:p-8"
    >
      <div className="mb-6">
        <p className="font-lora text-2xl font-bold text-white tablet:text-3xl">
          Formularz zgłoszeniowy
        </p>
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-6 tablet:grid-cols-2">
        <FormField
          label="Imię"
          name="firstName"
          type="text"
          required
          disabled={isSubmitting}
          issues={errors.firstName ? [errors.firstName] : undefined}
          lightMode
        />

        <FormField
          label="Nazwisko"
          name="lastName"
          type="text"
          required
          disabled={isSubmitting}
          issues={errors.lastName ? [errors.lastName] : undefined}
          lightMode
        />
      </div>

      <FormField
        label="Adres email"
        name="email"
        type="email"
        required
        disabled={isSubmitting}
        issues={errors.email ? [errors.email] : undefined}
        lightMode
      />

      <div className="space-y-1">
        <Label htmlFor="message" color={errors.message ? "error" : "light"}>
          Wiadomość
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          disabled={isSubmitting}
          placeholder="Napisz wiadomość..."
          color={errors.message ? "error" : "primary"}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <ErrorMessage className="text-xs">{errors.message}</ErrorMessage>
        )}
      </div>

      <div className="space-y-1">
        <Checkbox
          id="consent"
          name="consent"
          label={
            <>
              Akceptuję{" "}
              <Link
                href={Routes.POLICY}
                className="underline hover:text-greenLight"
                target="_blank"
                rel="noopener noreferrer"
              >
                Politykę Prywatności
              </Link>{" "}
              oraz wyrażam zgodę na przetwarzanie moich danych osobowych w celu
              obsługi {consentPurpose}.
            </>
          }
          required
          disabled={isSubmitting}
          error={!!errors.consent}
          lightMode
        />
        {errors.consent && (
          <ErrorMessage className="ml-7 text-xs">{errors.consent}</ErrorMessage>
        )}
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          size="large"
          label={isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
          ariaDescription={`Wyślij formularz ${consentPurpose}`}
          disabled={isSubmitting}
          className={cn("w-full tablet:w-auto", {
            "cursor-not-allowed opacity-50": isSubmitting,
          })}
        />
      </div>
    </form>
  );
};
