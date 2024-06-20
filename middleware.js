
import { NextResponse } from "next/server"
import Negotiator from "negotiator"
import { match } from "@formatjs/intl-localematcher"

const locales = ["bn", "en"]
const defaultLocale = "en"

function getLocale(request){
     const acceptedLanguage = request.headers.get("accept-language") ?? undefined

     let headers = {"accept-language": acceptedLanguage}
     let languages = new Negotiator({headers}).languages()
     return match(languages, locales, defaultLocale)

}


export function middleware(request){

    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every((local)=> !pathname.startsWith(`/${local}/`) &&  pathname !== `/${local}`)

    if(pathnameIsMissingLocale){
        const locale = getLocale(request)
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }
}

export const config = {
    matcher: [
      // Skip all internal paths (_next, assets, api)
      '/((?!api|assets|.*\\..*|_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }