import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { postImagePembelian } from "@/data/pembelian";
import Image from "next/image";
import { patchPayment } from "@/data/payment";
import Swal from "sweetalert2";

export default function Step3({
  nextAction,
  transactionData = { index_pembayaran: 0 },
  formData = { metodeBayar: "", total: "" },
}) {
  const [file, setFile] = useState({ size: 0 });
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

<<<<<<< HEAD
  useEffect(() => {
    console.log(transactionData)
    if (transactionData.payment_type === 'bank_transfer') {
      setRekening(transactionData.va_numbers[0])
    } else {
      transactionData.actions.forEach(val => {
        if (val.name === 'generate-qr-code') {
          setQRCode(val.url)
        }

        if (val.name === 'deeplink-redirect') {
          setLink(val.url)
        }
      })
    }    

    const checkTime = setInterval(() => {
      const expire = new Date(transactionData.expiry_time).getTime()
      const newTime = new Date(expire - Date.now())
      if (expire > Date.now()) {
        setTime(newTime.getMinutes() + ' : ' + newTime.getSeconds().toString().padStart(2, '0'))
      } else {
        setTime(0)
        location.reload()
      }
    }, 1000)

    const checkStatus = setInterval(() => {
      getPembelianStatus(transactionData.transaction_id)
        .then(({ data }) => {
          if (data.data.transaction_status === 'settlement') {
            nextAction()
          }
=======
  const fileHandler = (e) => {
    if (e.target.files[0]) {
      const newFile = e.target.files[0];
      setLoading(true);
      postImagePembelian(newFile, transactionData.id)
        .then(() => {
          setFile(e.target.files[0]);
          setUrl(URL.createObjectURL(e.target.files[0]));
>>>>>>> 9825174282e243c99a21af17f80784530e80a4f3
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: `Error!`,
            text: "Something is wrong with your file, It must be .jpg .jpeg or .png and less than 10mb",
            icon: "error",
            confirmButtonText: "Okay",
          });
          setFile({ size: 0 });
          setUrl("");
        })
        .finally(() => setLoading(false));
    } else {
      setFile({ size: 0 });
      setUrl("");
    }
  };

  const payHandler = () => {
    if (file.size > 0) {
      setLoading(true);
      patchPayment(transactionData.id)
        .then(() => nextAction())
        .catch(({ response }) => {
          Swal.fire({
            title: `Error ${response.status}!`,
            text: "Something is wrong",
            icon: "error",
            confirmButtonText: "Okay",
          });
        })
        .finally(() => setLoading(false));
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(transactionData.kredensial_pembayaran);
  };

  return (
    <main className="container mx-auto py-16 flex flex-col-reverse lg:flex-row lg:gap-6 gap-3">
      <div className="lg:w-3/5 flex gap-2 flex-col">
        <section className="p-4 lg:p-9 bg-[#ACB8DE] bg-opacity-20 text-primary-50 font-poppins overflow-auto mx-2">
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
      <div className=" p-4 lg:p-9 bg-[#ACB8DE] bg-opacity-20 lg:w-2/5 mx-2 lg:mx-0 text-primary-50 flex flex-col font-poppins h-fit">
        <table className="w-full">
          <tbody className="w-full">
            <tr className="mb-5">
              <td className="w-24">Jenis Pembayaran</td>
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
              <td className="w-24">Nama</td>
              <td>:</td>
              <td>{transactionData.pemilik}</td>
            </tr>
            {transactionData.jenis_pembayaran === "qris" ? (
              <tr className="w-full">
                <td colSpan={3} className="w-full my-3 py-5">
                  <Image
                    src={transactionData.kredensial_pembayaran}
                    width="500"
                    height="300"
                  ></Image>
                </td>
              </tr>
            ) : (
              <tr>
                <td className="w-24">Nomor</td>
                <td>:</td>
                <td className="flex items-center gap-1">
                  <span>{transactionData.kredensial_pembayaran}</span>
                  <Icon
                    icon="material-symbols:content-copy"
                    className="cursor-pointer hover:scale-110 active:brightness-75"
                    onClick={copyText}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <span className="text-sm mt-4">
          Ukuran maksimal file : 10 mb, Format file : .png, .jpeg atau .jpg
        </span>
        <input
          type="file"
          className="btn-primary my-3"
          accept=".jpg, .jpeg, .png"
          onChange={fileHandler}
        ></input>
        {url ? (
          <section
            style={{ backgroundImage: `url(${url})` }}
            className="w-full h-16 mb-3 bg-cover bg-opacity-0 flex items-center justify-center"
          >
            <a href={url} target="_blank" className="btn-primary px-4 py-1">
              Lihat Bukti
            </a>
          </section>
        ) : null}
        <button
          onClick={payHandler}
          className="btn-primary py-1 text-center"
          disabled={file.size < 1 || loading}
        >
          {loading ? "Processing . . ." : "Sudah Bayar"}
        </button>
      </div>
    </main>
  );
}
