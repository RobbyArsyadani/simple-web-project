import { useState } from "react";
import Layout from "./components/layout";

type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};
const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 6,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 7,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// Step 1: Buat array dengan nama buah dalam huruf kecil
const lowerCaseFruits = fruits.map((buah) => ({
  ...buah,
  fruitName: buah.fruitName.toLowerCase(),
}));

// Step 2: Buat set untuk mendapatkan nama-nama buah yang unik
const uniqueFruitNames = new Set(lowerCaseFruits.map((buah) => buah.fruitName));

// Step 3: Buat array baru berdasarkan nama-nama buah yang unik
const uniqueFruits = Array.from(uniqueFruitNames).map((name) =>
  lowerCaseFruits.find((fruit) => fruit.fruitName === name)
);

export default function App() {
  const [type, setType] = useState("IMPORT");
  let id = 1;

  const tipe = uniqueFruits.filter((buah) => buah?.fruitType === type);

  const totalStock = tipe.reduce((acc, curr) => acc + (curr?.stock || 0), 0);
  return (
    <Layout>
      <main className="inimain d-grid gap-3 mt-3 px-2">
        <div
          className="fruitname p-3 shadow rounded"
          style={{ backgroundColor: "#78ABA8" }}
        >
          <p>
            Fruitname: &nbsp;
            {uniqueFruits.map((fruit, index) => (
              <span key={index}>
                {fruit?.fruitName.split("").join(" ")}
                {index !== uniqueFruits.length - 1 && <span>, </span>}
              </span>
            ))}
          </p>
        </div>
        <div
          className="fruitType d-grid gap-3 p-3 shadow rounded text-white"
          style={{ backgroundColor: "#538392" }}
        >
          <div className="d-grid gap-2">
            <label>
              Fruit type:
              <select
                className="rounded ms-2"
                style={{ backgroundColor: "#E0FBE2" }}
                value={type}
                onChange={(e) => setType(e.target.value)}
                name="selectedFruit"
              >
                <option value="IMPORT">IMPORT</option>
                <option value="LOCAL">LOCAL</option>
              </select>
            </label>
            <div className="d-inline">
              {tipe.map((tipes, index) => (
                <span key={index}>
                  {tipes?.fruitName.split("").join(" ")}
                  {index !== tipe.length - 1 && <span>, </span>}
                </span>
              ))}
            </div>
          </div>
          <div className=" d-grid col-6">
            <table className="table table-bordered table-success">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nama Buah</th>
                  <th scope="col">Stock</th>
                </tr>
              </thead>
              <tbody>
                {tipe.map((tipes) => (
                  <tr key={tipes?.fruitId}>
                    <th scope="row">{id++}</th>
                    <td>{tipes?.fruitName}</td>
                    <td>{tipes?.stock}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2}>Total stock</td>
                  <td>{totalStock}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Layout>
  );
}
