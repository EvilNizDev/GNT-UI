self.__BUILD_MANIFEST = function(c, s, a, t, e, i, n, o) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/robots.txt",
                destination: "/api/robots"
            }, {
                source: "/sitemap",
                destination: "/api/sitemap"
            }],
            fallback: []
        },
        "/404": ["static/chunks/pages/404-05b27410f3eae19c.js"],
        "/_error": ["static/chunks/pages/_error-b2067a01cc62b3fe.js"],
        "/blog": [c, s, a, t, e, n, i, o, "static/chunks/pages/blog-b6d4b56d0858141e.js"],
        "/blog/[slug]": [c, s, a, t, e, n, i, o, "static/chunks/pages/blog/[slug]-e2fe42dab63965da.js"],
        "/checkout/[...idInvoice]": [c, s, a, t, e, n, "static/chunks/6713-41ec996c8d390a4f.js", i, "static/chunks/pages/checkout/[...idInvoice]-6dc7eb22826fa74d.js"],
        "/contact-form": [c, s, a, t, e, "static/chunks/5644-7c01b54a678bbc3c.js", "static/chunks/2693-f7421face8e2ce4f.js", "static/chunks/6880-ff0576f0938760c0.js", "static/css/7ac8cb26da507440.css", "static/chunks/764-feca6e78167ce341.js", i, "static/chunks/2674-4655fe77a1bdfbb8.js", "static/chunks/pages/contact-form-73a2aca89bc7bb3a.js"],
        "/error/404": [c, s, a, t, e, "static/chunks/1664-2b4d2108008cb0cb.js", i, "static/chunks/pages/error/404-a99d21a741e0189c.js"],
        "/error/500": [c, s, a, t, e, "static/chunks/5063-6a5ab0f6659bedfe.js", i, "static/chunks/pages/error/500-d2ec0708401ee31b.js"],
        "/invoice/print/[idInvoice]": [c, s, a, t, e, "static/chunks/8364-764843f635c47cfd.js", i, "static/chunks/pages/invoice/print/[idInvoice]-54d2338abafb8b2b.js"],
        "/invoice/[idInvoice]": [c, s, a, t, e, n, i, "static/chunks/pages/invoice/[idInvoice]-f05faa9bbbf40542.js"],
        "/[[...slug]]": [c, s, a, t, e, i, "static/chunks/pages/[[...slug]]-238773335632232c.js"],
        sortedPages: ["/404", "/_app", "/_error", "/blog", "/blog/[slug]", "/checkout/[...idInvoice]", "/contact-form", "/error/404", "/error/500", "/invoice/print/[idInvoice]", "/invoice/[idInvoice]", "/[[...slug]]"]
    }
}("static/chunks/c9184924-bf6c7b99d23ea14d.js", "static/chunks/228771e0-1847fb34b4287f6e.js", "static/chunks/65291039-051d022aac3405c9.js", "static/chunks/1b8dab7b-93296b38f5f2d428.js", "static/chunks/9097-4d428732b4afd9ad.js", "static/chunks/8692-b0f07653dc5743dd.js", "static/chunks/5675-1f12e06df55f2efe.js", "static/chunks/2448-636f90c572082ca2.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();