import { NextRequest } from "next/server";

let locales = ["en", "ua"];

function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get("accept-language");
    if (!acceptLanguage) {
        return locales[0];
    }

    const requestedLocales = acceptLanguage.split(",").map((lang) => {
        const [locale] = lang.trim().split(";")[0].split("-");
        return `${locale}-${locale.toUpperCase()}`;
    });

    const locale = requestedLocales.find((locale) => locales.includes(locale));

    return locale || locales[0];
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const fileExtensions = ["jpg", "jpeg", "png", "gif", "svg", "webp"];

    const shouldSkip = fileExtensions.some((ext) =>
        pathname.endsWith(`.${ext}`),
    );
    if (shouldSkip || !pathname.startsWith("/api")) {
        return;
    }

    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (!pathnameHasLocale) {
        return;
    }

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: ["/((?!_next|\\.(?:jpg|jpeg|png|gif|svg|webp)$).*)"],
};
