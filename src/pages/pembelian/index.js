import React, { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "@/config/particleConfig";

export default function Penjualan() {
  const [action, setAction] = useState(0);
  const [children, setChildren] = useState();
  const [formData, setFormData] = useState({});
  const [transactionData, setTransactionData] = useState({});

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const transactionDataHandler = (data) => {
    setTransactionData(data);
  };

  const formDataHandler = useCallback(
    (data) => {
      let newData = formData;
      newData = { ...newData, ...data };
      setFormData(newData);
    },
    [formData]
  );

  const actionIndicator = (targetAction, styleIfTrue, styleIfFalse) => {
    if (action > targetAction) {
      return styleIfTrue;
    } else {
      return styleIfFalse;
    }
  };

  useEffect(() => {
    const nextAction = () => {
      setAction(action + 1);
      window.scroll(0, 0);
    };
    const prevAction = () => {
      setAction(action - 1);
      window.scroll(0, 0);
    };
    switch (action) {
      case 0:
        setChildren(<Step1 {...{ nextAction, formDataHandler, formData }} />);
        break;
      case 1:
        setChildren(
          <Step2
            {...{
              prevAction,
              formDataHandler,
              formData,
              nextAction,
              transactionDataHandler,
            }}
          />
        );
        break;
      case 2:
        setChildren(<Step3 {...{ nextAction, transactionData, formData }} />);
        break;
      case 3:
        setChildren(<Step4 />);
        break;
    }
  }, [action, formDataHandler, formData, transactionData]);

  return (
    <>
      <main className="bg-no-repeat pt-24 bg-cover z-10 relative">
        <div className="pt-16 container mx-auto lg:px-12">
          <section className="flex justify-between px-2 lg:px-0 items-center">
            <p className="basis-1/3 text-left">Isi Form</p>
            <p
              className={`basis-1/3 text-center ${actionIndicator(
                0,
                "",
                "text-neutral-500"
              )}`}
            >
              Pilih Metode Pembayaran
            </p>
            <p
              className={`basis-1/3 text-right ${actionIndicator(
                1,
                "",
                "text-neutral-500"
              )}`}
            >
              Bayar
            </p>
          </section>
          <section className="flex justify-between w-full items-center lg:px-5 px-9">
            <h2 className="-mx-5 z-10 text-primary-500">
              <Icon icon="material-symbols:square" />
            </h2>
            <p className="h-3 w-full bg-neutral-500 relative">
              <span
                className={`bg-primary-500 h-full absolute transition-all ${actionIndicator(
                  0,
                  "w-full",
                  "w-0"
                )}`}
              ></span>
            </p>
            <h2
              className={`-mx-5 z-10 ${actionIndicator(
                0,
                "text-primary-500",
                "text-neutral-500"
              )}`}
            >
              <Icon icon="material-symbols:square" />
            </h2>
            <p className="h-3 w-full bg-neutral-500 relative">
              <span
                className={`bg-primary-500 h-full absolute transition-all ${actionIndicator(
                  1,
                  "w-full",
                  "w-0"
                )}`}
              ></span>
            </p>
            <h2
              className={`-mx-5 z-10 ${actionIndicator(
                1,
                "text-primary-500",
                "text-neutral-500"
              )}`}
            >
              <Icon icon="material-symbols:square" />
            </h2>
          </section>
        </div>
        {children}
      </main>
      <Particles options={particleConfig} init={particlesInit} />
    </>
  );
}
