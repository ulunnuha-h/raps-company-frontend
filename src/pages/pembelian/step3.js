import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { getPembelianStatus } from "@/data/pembelian";
import Image from "next/image";
import Link from "next/link";
import { patchPayment } from "@/data/payment";
import { useRouter } from "next/router";

export default function Step3({
  nextAction,
  transactionData = {index_pembayaran: 0},
  formData = { metodeBayar: "", total:"" },
}) {
  const router = useRouter();

  const payHandler = (id) => {
    patchPayment(id).then(() => {
      nextAction();
    });
  };

  return (
    <main className="container mx-auto py-16 flex flex-col-reverse lg:flex-row lg:gap-6 gap-3">
      <div className="lg:w-3/5 flex gap-2 flex-col">
        <section className="p-9 bg-[#ACB8DE] bg-opacity-20 text-primary-50 font-poppins overflow-auto mx-2">
          <h3 className="mb-8">Data pembelian</h3>
          <table className=" border-2 text-lg w-full">
            <tr>
              <td className="w-46 py-2 px-3">Nama</td>
              <td>:</td>
              <td className="px-3">{formData.name}</td>
            </tr>
            <tr className="border-2 border-opacity-20">
              <td className="w-46 py-2 px-3">Grow ID</td>
              <td>:</td>
              <td className="px-3">{formData.growId}</td>
            </tr>
            <tr>
              <td className="w-46 py-2 px-3">World</td>
              <td>:</td>
              <td className="px-3">{formData.world}</td>
            </tr>
            <tr className="border-2">
              <td className="w-46 py-2 px-3">Whatsapp</td>
              <td>:</td>
              <td className="px-3">{formData.whatsapp}</td>
            </tr>
            <tr>
              <td className="w-46 py-2 px-3">Item yang dibeli</td>
              <td>:</td>
              <td className="px-3">{formData.isDl ? "DL" : "BGL"}</td>
            </tr>
            <tr className="border-2">
              <td className="w-46 py-2 px-3">Jumlah yang dibeli</td>
              <td>:</td>
              <td className="px-3">{formData.jumlah}</td>
            </tr>
            <tr>
              <td className="w-46 py-2 px-3">Total</td>
              <td>:</td>
              <td className="px-3">Rp {formData.total.toLocaleString()}</td>
            </tr>
          </table>
        </section>
      </div>
      <div className="p-9 bg-[#ACB8DE] bg-opacity-20 lg:w-2/5 mx-2 lg:mx-0 text-primary-50 flex flex-col font-poppins h-fit">
        <table>
          <tr className="mb-5">
            <td className="w-40">Jenis Pembayaran</td>
            <td>:</td>
            <td>
              <Image
                src={`/assets/paymentMethod/${
                  transactionData.index_pembayaran - 1
                }.svg`}
                className="bg-secondary-500 bg-opacity-50 p-2"
                alt="image"
                width="100"
                height="200"
              />
            </td>
          </tr>
          <tr>
            <td className="w-40">Nama</td>
            <td>:</td>
            <td>{transactionData.pemilik}</td>
          </tr>
          <tr>
            <td className="w-40">Nomor</td>
            <td>:</td>
            <td>{transactionData.kredensial_pembayaran}</td>
          </tr>
        </table>
        <button
          onClick={() => payHandler(transactionData.id)}
          className="btn-primary py-1 mt-5 text-center"
        >
          Sudah Bayar
        </button>
      </div>
    </main>
  );
}
