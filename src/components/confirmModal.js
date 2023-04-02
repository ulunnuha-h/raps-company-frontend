import React from "react";

const ConfirmModal = ({ close, next }) => {
  return (
    <main className="fixed h-screen w-screen top-0 left-0 z-50 bg-gray-700 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="w-5/6 lg:w-1/2 bg-secondary-700 rounded-lg py-9 px-12 flex flex-col justify-between">
        <h4 className="font-grotesk text-center lg:leading-10 text-white mb-9">
          Pastikan nominal yang ditransfer sesuai dengan nominal yang tertera di
          website. Jika tidak transaksi tidak akan diproses. Terimakasih!
        </h4>
        <section className="w-full flex justify-center lg:gap-12 gap-3">
          <button onClick={close} className="btn-primary py-2 w-1/2">
            Batal
          </button>
          <button onClick={next} className="btn-primary py-2 w-1/2">
            Lanjutkan
          </button>
        </section>
      </div>
    </main>
  );
};

export { ConfirmModal };
