/**
 * Defines module prefix used in page URLs.
 */
export const routingModule = {
    HOME: "",
    PAGES: "page",
    SERVICES: "services",
    BLOGS: "blogs",
    SHOP: "shop"
}

/**
 * Defines route endpoint names for page URLs.
 */
export const route = {
    BLANK: "",
    home: {
        HOME1: "index",
        HOME2: "index2",
        HOME3: "index3",
    },
    pages: {
        ABOUT: "about-us",
        FAQ: "faq",
        gallery: {
            GALLERY1: "gallery1",
            GALLERY2: "gallery2"
        },
        contact: {
            CONTACT1: "contact1",
            CONTACT2: "contact2"
        },
        team: {
            TEAM: "team",
            DETAILS: "team/details"
        },
        ERROR404: "error404",
        features: {
            footer: {
                FIXED: "footer-fixed",
                LIGHT: "footer-light",
                DARK: "footer-dark"
            }
        }
    },
    services: {
        SERVICES: "",
        DETAILS: "details"
    },
    blogs: {
        LIST: "list",
        LIST_SIDEBAR: "list-sidebar",
        GRID: "grid",
        GRID_SIDEBAR: "grid-sidebar",
        POST_SINGLE: "post-single"
    },
    shop: {
        PRODUCTS: "products",
        PRODUCT_DETAILS: "product-details",
        CART: "cart",
        WISHLIST: "wishlist",
        CHECKOUT: "checkout"
    }
}

/**
 * Combines 'page' module prefix with related endpoints.
 * @param _route endpoint name in URL.
 * @returns complete 'page' URL for navigation.
 */
export function pageUrl(_route: string) {
    return "/"+routingModule.PAGES+"/"+_route
}

/**
 * Combines 'services' module prefix with related endpoints.
 * @param _route endpoint name in URL.
 * @returns complete 'services' URL for navigation.
 */
export function servicesUrl(_route: string) {
    return "/"+routingModule.SERVICES+(_route === "" ? "" : "/"+_route);
}

/**
 * Combines 'blogs' module prefix with related endpoints.
 * @param _route endpoint name in URL.
 * @returns complete 'blogs' URL for navigation.
 */
export function blogsUrl(_route: string) {
    return "/"+routingModule.BLOGS+"/"+_route
}

/**
 * Combines 'shop' module prefix with related endpoints.
 * @param _route endpoint name in URL.
 * @returns complete 'shop' URL for navigation.
 */
export function shopUrl(_route: string) {
    return "/"+routingModule.SHOP+"/"+_route
}