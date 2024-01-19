import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  // 1. props 로 id 가져오기
  const id = params.id;

  // 2. 인보이스와 고객 목록 가져오기
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers()
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true
          }
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
