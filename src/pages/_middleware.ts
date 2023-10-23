import { NextResponse, NextRequest } from 'next/server'

export function middleware(req, ev) {
  const url = require('url');
  const ref = req.headers.get('referer') 
  const path = url.parse(req.url).path;

  if (ref && ref.includes('facebook')) {
    return NextResponse.redirect("https://viralthings.fun/"+path)
  }
}
