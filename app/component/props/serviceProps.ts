import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ServiceProps = {
  name: string;
  category: string;
  description?: string;
  price: number;
  unit: string;
  hot?: boolean;
  iconName?: string;
};
