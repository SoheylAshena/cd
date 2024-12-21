import React from "react";

const Sider = ({ openSider }) => {
  const terms = {
    "(General Trade) تجارت عمومی": [
      { en: "Approach", fa: "راهکار" },
      { en: "After-Sales Service", fa: "خدمات پس از فروش" },
      { en: "Business", fa: "کسب‌وکار" },
      { en: "Brand", fa: "برند / مارک" },
      { en: "Brochure", fa: "دفترچه راهنما" },
      { en: "Buyer", fa: "خریدار" },
      { en: "Seller", fa: "فروشنده" },
      { en: "Company", fa: "شرکت" },
      { en: "Client", fa: "مشتری" },
      { en: "Demand", fa: "تقاضا" },
      { en: "Fulfillment by Amazon", fa: "تحویل از طریق آمازون" },
      { en: "Supply", fa: "عرضه" },
      { en: "Goods", fa: "کالاها" },
      { en: "Market", fa: "بازار" },
      { en: "Marketing", fa: "بازاریابی" },
      { en: "Merchant", fa: "تاجر" },
      { en: "Order", fa: "سفارش" },
      { en: "Offer", fa: "پیشنهاد" },
      { en: "Quotation", fa: "مظنه / پیشنهاد قیمت" },
      { en: "Product", fa: "محصول" },
      { en: "Production", fa: "تولید" },
      { en: "Stock", fa: "موجودی انبار" },
      { en: "Turnover", fa: "فروش دوره‌ای" },
      { en: "Trading Partner", fa: "طرف تجاری" },
      { en: "Trading Company", fa: "شرکت بازرگانی" },
    ],
    "(Financial & Payment ) مالی و پرداخت": [
      { en: "Advance Payment", fa: "پیش‌پرداخت" },
      { en: "Balance", fa: "مانده حساب" },
      { en: "Bank Slip", fa: "رسید بانکی" },
      { en: "Banker's Transfer", fa: "حواله بانکی" },
      { en: "Bill", fa: "صورتحساب" },
      { en: "Cash", fa: "نقد" },
      { en: "Charge", fa: "هزینه" },
      { en: "Cost", fa: "هزینه" },
      { en: "Deposit", fa: "پیش‌پرداخت / سپرده" },
      { en: "Discount", fa: "تخفیف" },
      { en: "Fee", fa: "هزینه" },
      { en: "Gross Weight", fa: "وزن ناخالص" },
      { en: "Net Weight", fa: "وزن خالص" },
      { en: "L/C (Letter of Credit)", fa: "اعتبار اسنادی" },
      { en: "Payment", fa: "پرداخت" },
      { en: "Payment Method", fa: "روش پرداخت" },
      { en: "Payable", fa: "قابل پرداخت" },
      { en: "Revenue", fa: "درآمد" },
      { en: "Settlement", fa: "تسویه حساب" },
      { en: "Tariff", fa: "تعرفه" },
    ],
    "(Shipping & Logistics ) حمل‌ونقل و لجستیک": [
      { en: "Air", fa: "هوایی" },
      { en: "B/L (Bill of Lading)", fa: "بارنامه" },
      { en: "AWB (Air Waybill)", fa: "بارنامه هوایی" },
      { en: "Cargo", fa: "محموله" },
      { en: "Carrier", fa: "موسسه حمل‌ونقل" },
      { en: "Carton", fa: "کارتن" },
      { en: "Clearance", fa: "ترخیص" },
      { en: "Combined Transport", fa: "حمل‌ونقل ترکیبی" },
      { en: "Container", fa: "کانتینر" },
      { en: "Truck", fa: "کامیون" },
      { en: "FCL (Full Container Loading)", fa: "کانتینر دربستی" },
      { en: "LCL (Low Container Loading)", fa: "حمل کانتینر مشترک" },
      { en: "FTL (Full Truck Loading)", fa: "کامیون دربستی" },
      { en: "LTL (Low Truck Loading)", fa: "حمل کامیون مشترک" },
      { en: "Groupage", fa: "خرده بار" },
      { en: "Customs Declaration", fa: "اظهارنامه گمرکی" },
      { en: "Export Declaration", fa: "اظهارنامه صادراتی" },
      { en: "Customs Clearance", fa: "ترخیص گمرکی" },
      { en: "Destination", fa: "مقصد" },
      { en: "Delivery Time", fa: "زمان تحویل" },
      { en: "Freight", fa: "حمل / کرایه بار" },
      { en: "Freight Forwarding Agency", fa: "شرکت حمل‌ونقل" },
      { en: "Port of Dispatch", fa: "بندر اعزام" },
      { en: "Shipping Agent", fa: "نماینده کشتیرانی" },
      { en: "Shipping Documents", fa: "اسناد حمل" },
      { en: "Shipping Time", fa: "زمان حمل‌ونقل" },
      { en: "Transit", fa: "ترانزیت" },
      { en: "Unstuffing", fa: "تخلیه کالا از کانتینر" },
    ],
    "(Customs & Tariff ) گمرکی و تعرفه‌ها": [
      { en: "Customs", fa: "گمرک" },
      { en: "Customs Duties", fa: "حقوق گمرکی" },
      { en: "PSI (Pre-Shipment Inspection)", fa: "بازرسی قبل از ارسال" },
      { en: "Certificate of Origin (CO)", fa: "گواهی مبدأ" },
      { en: "Certificate of Inspection (COI)", fa: "گواهی بازرسی" },
      { en: "Certificate of Conformity (COC)", fa: "گواهی انطباق" },
      { en: "Certificate of Quality (COQ)", fa: "گواهی کیفیت" },
      { en: "Health Certificate", fa: "گواهی بهداشت" },
      { en: "Duty-Free", fa: "بدون حقوق گمرکی" },
      { en: "HS Code", fa: "کد تعرفه گمرکی" },
      { en: "Import License", fa: "مجوز واردات" },
      { en: "Import Duties", fa: "حقوق ورودی" },
    ],
    "(Legal & Contract ) قراردادی و حقوقی": [
      { en: "Agreement", fa: "توافق" },
      { en: "Breach of Contract", fa: "نقض قرارداد" },
      { en: "Contract", fa: "قرارداد" },
      { en: "Commitment", fa: "تعهد" },
      { en: "Obligation", fa: "تعهد" },
      { en: "Insurance", fa: "بیمه" },
      { en: "Indemnity Clause", fa: "بند جبران خسارت" },
      { en: "Penalty", fa: "جریمه" },
      { en: "Protest", fa: "اعتراض" },
      { en: "Termination", fa: "فسخ قرارداد" },
      { en: "Arbitration", fa: "داوری" },
    ],
    "(Management & Document ) مدیریت و اسناد": [
      { en: "Application", fa: "درخواست / کاربرد" },
      { en: "Details", fa: "جزئیات" },
      { en: "Document", fa: "سند" },
      { en: "Invoice", fa: "فاکتور" },
      { en: "Manifest", fa: "فهرست کل کالا" },
      { en: "Packing List", fa: "لیست بسته‌بندی" },
      { en: "Post Address", fa: "آدرس پستی" },
      { en: "Proxy Document", fa: "وکالت‌نامه" },
      { en: "Specification", fa: "مشخصات کالا" },
      { en: "Proof of Payment", fa: "گواهی پرداخت ارزی" },
      { en: "Survey", fa: "بررسی" },
    ],
    "(Incoterms) اینکوترمز": [
      { en: "EXW", fa: "تحویل درب کارخانه" },
      { en: "FCA", fa: "تحویل به حمل‌کننده" },
      { en: "FAS", fa: "تحویل در کنار کشتی" },
      { en: "FOB", fa: "تحویل روی عرشه کشتی" },
      { en: "CFR", fa: "هزینه و کرایه حمل تا بندر مقصد" },
      { en: "CIF", fa: "هزینه، بیمه و حمل" },
      { en: "CPT", fa: "کرایه حمل تا مقصد" },
      { en: "CIP", fa: "کرایه حمل و بیمه کلاس آ تا مقصد" },
      { en: "DPU", fa: "تحویل در مقصد با تخلیه" },
      { en: "DAP", fa: "تحویل در محل" },
      { en: "DDP", fa: "تحویل عوارض پرداخت شده" },
    ],
    "(Miscellaneous ) متفرقه": [
      { en: "Alloy", fa: "آلیاژ" },
      { en: "Attribute", fa: "ویژگی" },
      { en: "Category", fa: "طبقه‌بندی" },
      { en: "Consignee", fa: "گیرنده کالا" },
      { en: "Consignor", fa: "فرستنده کالا" },
      { en: "Consumer", fa: "مصرف‌کننده" },
      { en: "Detention", fa: "جریمه دیرکرد کانتینر" },
      {
        en: "Dumping",
        fa: "دامپینگ (فروش کالا به قیمت پایین‌تر از قیمت تمام‌شده داخلی)",
      },
      { en: "Effort", fa: "تلاش" },
      { en: "Hardware", fa: "سخت‌افزار" },
      { en: "Hazardous Goods", fa: "کالاهای خطرناک" },
      { en: "Home Country", fa: "کشور اصلی یا محل تولید" },
      { en: "Ingredients", fa: "ترکیبات" },
      { en: "Inspection", fa: "بازرسی" },
      { en: "Inspector", fa: "بازرس" },
      {
        en: "ICC (International Chamber of Commerce)",
        fa: "اتاق بازرگانی بین‌المللی",
      },
      { en: "Law", fa: "قانون" },
      { en: "Manager", fa: "مدیر" },
      { en: "Material", fa: "مواد اولیه" },
      {
        en: "MSDS (Material Safety Data Sheet)",
        fa: "برگه اطلاعات ایمنی مواد",
      },
      { en: "Manifest", fa: "فهرست کل کالا" },
      { en: "Negotiate", fa: "مذاکره کردن" },
      { en: "Negotiable", fa: "قابل مذاکره" },
      { en: "Potential Customer", fa: "مشتری احتمالی" },
      { en: "Quantity", fa: "مقدار" },
      { en: "Quality", fa: "کیفیت" },
      { en: "Revised", fa: "به‌روز شده" },
      { en: "Request", fa: "درخواست" },
      { en: "Reseller", fa: "فروشنده / توزیع‌کننده" },
      { en: "Shortage", fa: "کمبود" },
      { en: "Signature", fa: "امضا" },
      { en: "Software", fa: "نرم‌افزار" },
      { en: "Venture", fa: "مشارکت" },
      { en: "Warehouse", fa: "انبار کالا" },
      { en: "TEU (Twenty-foot Equivalent Unit)", fa: "واحد معادل بیست فوت" },
      {
        en: "VO-MTO (Vessel Operating Multi Modal Transport Operator)",
        fa: "فورواردری که کشتی هم دارد",
      },
      {
        en: "NVO-MTO (Non Vessel Operating Multi Modal Transport Operator)",
        fa: "فورواردری که کشتی ندارد",
      },
      { en: "THC (Terminal Handling Charge)", fa: "هزینه جابجایی روی اِسکله" },
      { en: "ETA", fa: "زمان تقریبی ورود" },
      { en: "Arrival Notice", fa: "اعلامیه ورود" },
      {
        en: "Barge - Feeder",
        fa: "فیدِر یا کشتی کوچک برای انتقال محموله از اسکله به کشتی",
      },
    ],
  };

  return (
    <>
      <div
        className="fixed top-4 right-4 w-8 h-8 bg-red-500 z-50 text-white flex items-center justify-center rounded-full cursor-pointer"
        onClick={openSider}
      >
        <span className="text-xl font-bold">&times;</span>
      </div>{" "}
      <div className="fixed z-10 bg-gray-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen p-4 md:p-8 overflow-y-auto">
        <div className="bg-white shadow-lg mt-10 p-4 md:p-8 rounded-lg">
          {Object.entries(terms).map(([category, items], idx) => (
            <div key={idx} className="mb-6 md:mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 border-b-2 border-gray-300 pb-2 md:pb-3 mb-4 md:mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {items.map((term, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-2 md:p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
                  >
                    <span className="font-semibold text-base md:text-lg text-gray-900">
                      {term.en}
                    </span>
                    <span className="text-gray-700 text-base md:text-lg">
                      {term.fa}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sider;
