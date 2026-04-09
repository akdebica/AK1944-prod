"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Routes } from "@/routes";
import { Button } from "@/components/shared/Button/Button";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-greenMain p-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 tablet:flex-row">
        <p className="text-center text-14 text-white tablet:text-left tablet:text-16">
          Ta strona używa plików cookies w celu zapewnienia prawidłowego
          działania i poprawy jakości usług.{" "}
          <Link
            href={Routes.COOKIES}
            className="font-semibold underline hover:text-yellowContrast"
          >
            Dowiedz się więcej
          </Link>
        </p>
        <Button
          onClick={handleAccept}
          variant="secondary"
          size="medium"
          label="Akceptuję"
          ariaDescription="Akceptuj politykę cookies"
          className="whitespace-nowrap"
        />
      </div>
    </div>
  );
};
