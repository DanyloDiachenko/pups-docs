import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "ua"];

function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get("accept-language");
    if (!acceptLanguage) {
        return locales[0];
    }

    const requestedLocales = acceptLanguage.split(",").map((lang) => {
        const [locale] = lang.trim().split(";")[0].split("-");
        return locale.toLowerCase();
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

    if (shouldSkip || pathname.includes("/_next/")) {
        return;
    }

    // Проверка наличия токена
    const cookies = request.cookies;
    const token = cookies.get("token");

    // Проверка, начинается ли путь с локали и ведет ли на страницу профиля
    const pathnameHasLocale = locales.some((locale) =>
        pathname.startsWith(`/${locale}/`),
    );
    const isProfilePage = pathname.includes("/profile");

    if (pathnameHasLocale && isProfilePage && !token) {
        const locale = getLocale(request); // Получение предпочтительной локали из заголовка запроса
        // Перенаправление на страницу аутентификации с сохранением текущей локали
        return NextResponse.redirect(new URL(`/${locale}/auth`, request.url));
    }

    // Если путь уже содержит локаль, не нужно добавлять её снова
    if (!pathnameHasLocale) {
        const locale = getLocale(request); // Получение предпочтительной локали
        request.nextUrl.pathname = `/${locale}${pathname}`; // Добавление локали к пути
        return NextResponse.redirect(request.nextUrl);
    }
}

export const config = {
    matcher: ["/:path*"], // Обработка всех путей
};
