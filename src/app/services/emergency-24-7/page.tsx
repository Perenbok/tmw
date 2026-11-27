import ServiceDetailView, { SERVICE_TREE } from "@/components/ServiceDetailView";

export default function EmergencyServicePage() {
  return <ServiceDetailView service={SERVICE_TREE[3]} />;
}
