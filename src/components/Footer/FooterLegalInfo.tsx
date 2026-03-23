import { ActiveLink } from "@/components/shared/ActiveLink";
import { Routes } from "@/routes";

export const FooterLegalInfo = () => (
  <div className="mt-8 flex w-full flex-col gap-5 text-center">
    <p className="flex justify-center gap-5">
      <ActiveLink
        href={Routes.POLICY}
        aria-label="Przejdź do strony Polityka prywatności"
      >
        Polityka prywatności
      </ActiveLink>

      <ActiveLink
        href={Routes.COOKIES}
        aria-label="Przejdź do strony Polityka cookies"
      >
        Polityka cookies
      </ActiveLink>

      <ActiveLink
        href={Routes.REGULATIONS}
        aria-label="Przejdź do strony Regulamin"
      >
        Regulamin
      </ActiveLink>
    </p>

    <p>© 2025. Wszelkie prawa zastrzeżone.</p>

    <ActiveLink
      href={Routes.VOLUNTEERS}
      aria-label="Przejdź do strony Wolontariuszy"
      className="w-fit self-center font-medium underline"
    >
      Strona powstała dzięki pracy wolontariuszy.
    </ActiveLink>
  </div>
);
