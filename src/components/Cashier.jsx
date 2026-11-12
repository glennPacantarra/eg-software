import "../styles/Login.css";

import { useMemo, useState } from "react";
import { Search, Trash2, Delete, Printer } from "lucide-react";

// import { products } from "./data/products";

export default function Cashier() {
  const [cart, setCart] = useState([
    { id: 101, name: "Bakol", qty: 6, price: 10 },
    { id: 102, name: "Tapa", qty: 10, price: 9 },
    { id: 103, name: "Tanso", qty: 0.1, price: 700 },
  ]);

  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState("");
  const [cashReceived, setCashReceived] = useState(0);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty * item.price, 0),
    [cart],
  );

  //   const filteredProducts = products.filter((product) =>
  //     product.name.toLowerCase().includes(search.toLowerCase()),
  //   );

  const addProduct = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [
        ...current,
        {
          ...product,
          qty: 1,
        },
      ];
    });
  };

  const removeProduct = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const handleKeypad = (value) => {
    if (value === "backspace") {
      setAmount((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "00") {
      setAmount((prev) => prev + "00");
      return;
    }

    if (value === ".") {
      setAmount((prev) => (prev.includes(".") ? prev : prev + "."));
      return;
    }

    setAmount((prev) => prev + value);
  };

  const handleEnter = () => {
    const received = Number(amount);

    if (!received || received < total) {
      alert("Insufficient payment.");
      return;
    }

    setCashReceived(received);
    setAmount("");
  };

  const handlePrint = () => {
    window.print();
  };

  const formatMoney = (value) =>
    Number(value).toLocaleString("en-PH", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

  return (
    <main className="min-h-screen bg-white text-[#242424] p-4 md:p-6  border-3 border-gray-200">
      {/* MAIN LAYOUT */}
      <div className="mx-auto grid max-w-362.5 grid-cols-1 border-3 border-gray-200 gap-8 lg:grid-cols-[1.15fr_1fr]">
        {/* LEFT SECTION */}
        <section className="flex min-w-0 flex-col">
          {/* HEADER */}
          <header className="flex h-20 items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center border-r border-gray-300 font-serif text-3xl italic">
                EG
              </div>

              <div className="font-serif text-[11px] leading-tight tracking-wide">
                <p className="font-semibold">EmelGabb</p>
                <p>Trading System</p>
              </div>
            </div>
          </header>

          {/* BUSINESS INFORMATION */}
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-[11px] text-gray-400">
            <div>
              Cash Spend :<span className="ml-2 text-gray-700">0.00</span>
            </div>

            <div>
              Weigher : Glenn<span className="ml-2 text-gray-700"></span>
            </div>

            <div>
              Cash On Hand :
              <span className="ml-2 text-gray-700">
                {formatMoney(cashReceived)}
              </span>
            </div>

            <div>
              Costumer :<span className="ml-2 text-gray-700"></span>
            </div>

            <div>
              Total Cash Today :
              <span className="ml-2 text-gray-700">{formatMoney(total)}</span>
            </div>
          </div>

          {/* SEARCH */}
          <div className="mt-14 flex h-11 overflow-hidden rounded-full border border-[#15274d]">
            <div className="flex w-14 items-center justify-center">
              <Search size={22} strokeWidth={1.3} />
            </div>

            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="min-w-0 flex-1 border-l border-gray-200 px-3 text-xs outline-none"
            />

            <button
              onClick={() => setSearch("")}
              className="w-32 border-l border-gray-200 text-xs transition hover:bg-gray-50"
            >
              Search
            </button>
          </div>

          {/* PRODUCT GRID */}
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {/* {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => addProduct(product)}
                className="flex h-[48px] items-center justify-center border-x border-gray-100 border-b border-gray-400 text-[11px] text-gray-600 transition hover:border-[#15274d] hover:bg-gray-50 active:scale-95"
              >
                {product.name}
              </button>
            ))} */}

            {/* {filteredProducts.length === 0 && (
              <p className="col-span-full py-8 text-center text-xs text-gray-400">
                No products found.
              </p>
            )} */}
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="flex min-w-0 flex-col">
          {/* TRANSACTION RECEIPT */}
          <div className="relative min-h-57.5 rounded-xl border border-gray-300 px-5 py-6 sm:px-8">
            {/* DATE TABS */}
            <div className="absolute -left-3 top-3 flex flex-col overflow-hidden rounded-l-md border border-gray-300 bg-white text-[9px] text-gray-400">
              <button className="px-1 py-1">Jan</button>
              <button className="border-t px-1 py-1">Jan</button>
              <button className="border-t px-1 py-1 text-red-400">+</button>
            </div>

            {/* TABLE */}
            <div className="ml-5">
              <div className="grid grid-cols-[24px_1fr_0.7fr_0.8fr_0.8fr] border-b border-gray-300 text-[11px] text-gray-500">
                <div></div>
                <div className="border-r px-2">Item</div>
                <div className="border-r px-2">Qty</div>
                <div className="border-r px-2">Price</div>
                <div className="px-2">Total</div>
              </div>

              <div className="max-h-36.5 min-h-27.5 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[24px_1fr_0.7fr_0.8fr_0.8fr] border-b border-gray-200 text-[11px] text-gray-600"
                  >
                    <button
                      onClick={() => removeProduct(item.id)}
                      className="flex items-center justify-center text-red-400 hover:text-red-600"
                      title="Remove item"
                    >
                      <Trash2 size={11} />
                    </button>

                    <div className="border-r px-2 py-1">{item.name}</div>

                    <div className="border-r px-2 py-1">{item.qty}</div>

                    <div className="border-r px-2 py-1">
                      {formatMoney(item.price)}
                    </div>

                    <div className="px-2 py-1">
                      {formatMoney(item.qty * item.price)}
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="mt-2 flex justify-end border-t border-gray-300 pt-2 text-xs">
                <span className="mr-4 text-gray-600">Total :</span>

                <strong className="mr-2">{formatMoney(total)}</strong>
              </div>
            </div>
          </div>

          {/* CALCULATOR SECTION */}
          <div className="mt-5 grid flex-1 grid-cols-[1fr_100px] gap-5 sm:grid-cols-[1fr_110px]">
            {/* NUMBER PAD */}
            <div className="grid grid-cols-3 content-center gap-x-3 gap-y-4 border-r border-gray-100 pr-4 sm:px-4">
              {[
                "7",
                "8",
                "9",
                "4",
                "5",
                "6",
                "1",
                "2",
                "3",
                "0",
                "00",
                ".",
              ].map((number) => (
                <button
                  key={number}
                  onClick={() => handleKeypad(number)}
                  className="h-11.5 border-b border-gray-200 text-sm transition hover:bg-gray-50 active:bg-gray-100"
                >
                  {number}
                </button>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col justify-center gap-3">
              <button
                onClick={() => handleKeypad("backspace")}
                className="flex h-18 items-center justify-center rounded-[20px] border border-gray-400 text-[#15274d] transition hover:bg-gray-50"
                title="Backspace"
              >
                <Delete size={30} />
              </button>

              <button
                onClick={handleEnter}
                className="h-19.5 rounded-[20px] border border-sky-200 text-lg tracking-wide text-[#15274d] transition hover:bg-sky-50"
              >
                Enter
              </button>

              <button
                onClick={handlePrint}
                className="flex h-[44px] items-center justify-center gap-2 rounded-[18px] border border-red-300 text-sm text-gray-500 transition hover:bg-red-50"
              >
                <Printer size={15} />
                Print
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
