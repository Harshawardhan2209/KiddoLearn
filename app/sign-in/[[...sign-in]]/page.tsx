import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f5ff]">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full md:w-1/2 max-w-md">
          <Image
            src="/Sign In.png"
            alt="Sign In Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <SignIn
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "bg-white shadow-lg rounded-xl border-4 border-[#6A5ACD]",
                headerTitle: "text-[#6A5ACD] text-2xl font-bold",
                headerSubtitle: "text-gray-600",
                formButtonPrimary: "bg-[#FF6B6B] hover:bg-[#ff5252]",
                formFieldInput: "border-2 focus:border-[#6A5ACD] rounded-lg",
                footerAction: "text-[#6A5ACD]",
                socialButtonsBlockButton: "border-2 hover:border-[#6A5ACD] transition-colors",
                socialButtonsBlockButtonText: "text-gray-600 font-medium",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-400",
                formFieldLabel: "text-gray-600",
                identityPreviewText: "text-gray-600",
                identityPreviewEditButton: "text-[#6A5ACD] hover:text-[#FF6B6B]",
                formFieldSuccessText: "text-green-500",
                formFieldErrorText: "text-red-500",
                headerBackIcon: "text-[#6A5ACD]",
                otpCodeFieldInput: "border-2 focus:border-[#6A5ACD]",
              },
              layout: {
                socialButtonsPlacement: "bottom",
                socialButtonsVariant: "blockButton",
              },
            }}
            routing="path"
            path="/sign-in"
          />
        </div>
      </div>
    </div>
  );
} 