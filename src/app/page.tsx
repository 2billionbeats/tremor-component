"use client";

import { DoubleLimitBar } from "@/components/Bar/";
import { Card } from "@tremor/react";
import { ChangeEventHandler, useState } from "react";
import { read, utils } from "xlsx";

export default function Home() {
  const [jsonData, setJsonData] = useState<{ [key: string]: any }[]>([]);

  const handleFileUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files![0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target!.result as ArrayBuffer);
      const workbook = read(data, { type: "array" });

      // 只读取第一张表
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      // 将工作表数据转换为 JSON
      const sheetJson = utils.sheet_to_json(worksheet, { header: 1 });

      // 处理数据：将标题行作为 key
      const headers = sheetJson[0] as string[];
      const rows = sheetJson.slice(1) as (string | number | undefined)[][];
      const formattedData = rows.map((row) => {
        const rowData: { [key: string]: any } = {};
        headers.forEach((header, index) => {
          rowData[header] = row[index];
        });
        return rowData;
      });

      setJsonData(formattedData);
    };

    reader.readAsArrayBuffer(file);
  };

  console.log(jsonData);

  return (
    <>
      <input type="file" onChange={handleFileUpload} />
      <div className="flex h-full w-1/2 flex-col justify-center space-y-10">
        <div className="flex h-4/5 flex-col gap-8 overflow-x-auto px-10">
          {jsonData &&
            (
              jsonData as {
                indicator_name: string;
                result_value: number;
                unit: string;
                reference_value: string;
              }[]
            ).map((item, index) => (
              <Card key={index}>
                <div className="flex justify-between pb-5 text-lg text-black">
                  <p className="font-bold">{item.indicator_name}</p>
                  <p className="font-bold">
                    {item.result_value}
                    <span className="pl-1 font-light">
                      {item.unit} {item.reference_value}
                    </span>
                  </p>
                </div>

                <DoubleLimitBar
                  max={9.5}
                  min={3.5}
                  cursor={0.1}
                  precision={1}
                  className="px-4"
                />
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
