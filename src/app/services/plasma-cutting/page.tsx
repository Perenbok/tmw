import ServiceDetailView, { SERVICE_TREE } from "@/components/ServiceDetailView";

export default function PlasmaCuttingPage() {
  return <ServiceDetailView service={SERVICE_TREE[2]} />;
}
