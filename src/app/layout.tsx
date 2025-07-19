import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";
import { ImageKitProvider } from "@imagekit/next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <div className="px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </div>


           <ImageKitProvider urlEndpoint={urlEndpoint}>
          
        
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            {children}
          </div>
          </ImageKitProvider>
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
