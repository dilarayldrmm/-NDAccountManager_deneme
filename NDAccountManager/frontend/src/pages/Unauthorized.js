import React from "react";

export default function Unauthorized() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-red-600">Yetkisiz Erişim</h1>
      <p>Bu sayfayı görüntüleme izniniz yok.</p>
    </div>
  );
}