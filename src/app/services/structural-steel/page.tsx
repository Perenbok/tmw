import ServiceDetailView from "@/components/ServiceDetailView";
import { SERVICE_TREE } from "@/components/ServicesTreeTabs";

export default function StructuralSteelPage() {
  return <ServiceDetailView service={SERVICE_TREE[0]} />;
}
