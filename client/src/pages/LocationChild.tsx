/**
 * Dispatches /locations/:metro/:child to neighborhood or service×metro pages.
 */

import { useParams } from "wouter";
import { getNeighborhood } from "@/data/neighborhoods";
import { getServiceMetro } from "@/data/serviceMetros";
import LocationNeighborhood from "@/pages/LocationNeighborhood";
import ServiceMetro from "@/pages/ServiceMetro";
import NotFound from "@/pages/NotFound";

export default function LocationChild() {
  const params = useParams<{ metro?: string; child?: string }>();
  const neighborhood = getNeighborhood(params.metro, params.child);
  if (neighborhood) {
    return <LocationNeighborhood neighborhood={neighborhood} />;
  }
  const serviceMetro = getServiceMetro(params.metro, params.child);
  if (serviceMetro) {
    return <ServiceMetro page={serviceMetro} />;
  }
  return <NotFound />;
}
