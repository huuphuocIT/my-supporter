import {
  MessageSquareTextIcon,
  LibraryBigIcon,
  PaletteIcon,
  WorkflowIcon,
  BotIcon,
  ReceiptIcon,
} from "lucide-react";

export type Route = {
  label: string;
  href: string;
  icon: any;
};

export const ROUTES: Array<{ group: string; routes: Route[] }> = [
  {
    group: "Customer Support",
    routes: [
      {
        label: "Conversations",
        href: "/conversations",
        icon: MessageSquareTextIcon,
      },
      {
        label: "Knowledge Base",
        href: "/knowledge-base",
        icon: LibraryBigIcon,
      },
    ],
  },
  {
    group: "Configuration",
    routes: [
      {
        label: "Widget Customization",
        href: "/config/widget",
        icon: PaletteIcon,
      },
      {
        label: "Integrations",
        href: "/config/integrations",
        icon: WorkflowIcon,
      },
      {
        label: "Voice Assistants",
        href: "/config/voice-assistants",
        icon: BotIcon,
      },
    ],
  },
  {
    group: "Account",
    routes: [
      {
        label: "Billing",
        href: "/billing",
        icon: ReceiptIcon,
      },
    ],
  },
];
