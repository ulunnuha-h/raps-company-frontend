import React from "react";
import Image from "next/image";
import Link from "next/link";
import illustration from "../../../public/assets/illustration2.svg";

export default function Step4() {
  return (
    <main className="container mx-auto py-16">
      <div className="p-7 lg:p-16 bg-[#ACB8DE] flex gap-12 items-center w-fit mx-auto flex-col">
        <Image
          src={illustration}
          alt="illustration"
          width="350"
          height="350"
        ></Image>
        <section className="font-grotesk text-primary-900 text-center">
          <h3 className="mb-5">Admin akan memeriksa pembayaranmu</h3>
          <span className="text-2xl">
            Setelah pembayaran dikonfirmasi, DL mu akan terkirim dalam 30 detik.
            Terimakasih sudah bertransaksi di DLCheap ID
          </span>
        </section>
        <section className="flex justify-around w-full flex-col lg:flex-row gap-5">
          <button className="btn-primary lg:px-5 py-2">
            Buka Aplikasi Growtopia
          </button>
          <Link className="btn-primary lg:px-5 py-2" href="/">
            Kembali ke Beranda
          </Link>
        </section>
      </div>
    </main>
  );
}
