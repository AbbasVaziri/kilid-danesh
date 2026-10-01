import {
  DoorOpen,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Siren,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/services";

const icons = {
  door: DoorOpen,
  shield: ShieldCheck,
  smart: Fingerprint,
  key: KeyRound,
  cylinder: LockKeyhole,
  siren: Siren,
} satisfies Record<IconName, unknown>;

export default function ServiceIcon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden {...props} />;
}
