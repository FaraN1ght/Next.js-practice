import Head from "next/head";
import QrCode from "@/components/QrCode";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen overflow-auto bg-slate-300">
      <Head>
        <title>Your Page Title</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QrCode></QrCode>
    </div>
  );
}
