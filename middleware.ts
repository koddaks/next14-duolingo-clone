import { authMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

export default authMiddleware({
    publicRoutes: ["/", "/api/webhooks/stripe"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};