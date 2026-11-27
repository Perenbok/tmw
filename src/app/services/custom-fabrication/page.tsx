import ServiceDetailView, { SERVICE_TREE } from "@/components/ServiceDetailView";

export default function CustomFabricationPage() {
  return <ServiceDetailView service={SERVICE_TREE[1]} />;
}
