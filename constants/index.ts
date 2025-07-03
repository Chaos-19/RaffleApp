import {
  Bell,
  CreditCard,
  Facebook,
  FileText,
  Ghost,
  Globe,
  HelpCircle,
  Lock,
  MessageCircleQuestion,
  Shield,
  Sun,
  Ticket,
  Trophy,
  UserCircle,
  UserSquare,
} from "@tamagui/lucide-icons";

export const settingMenu = [
  {
    label: "Payment History",
    link: "paymenthistory",
  },
  {
    label: "Setting",
    link: "settings",
  },
  {
    label: "Help/Support",
    link: "help",
  },
];

export const transactions = [
  {
    type: "Raffle",
    item: "Luxury Car",
    description: "Raffle Entry",
    amount: -10.0,
  },
  {
    type: "Deposit",
    item: "Deposit",
    description: "",
    amount: 50.0,
  },
  {
    type: "Raffle",
    item: "Vacation Package",
    description: "Raffle Entry",
    amount: -5.0,
  },
  {
    type: "Deposit",
    item: "Deposit",
    description: "",
    amount: 100.0,
  },
];
/*
export const settingsData = [
  {
    section: "Account",
    items: [
      {
        icon: UserSquare,
        title: "Account Details",
        description: "Edit your name, email, and phone number",
        action: "navigate",
        route: "AccountDetails",
      },
      {
        icon: Lock,
        title: "Change Password",
        description: "",
        action: "navigate",
        route: "ChangePassword",
      },
    ],
  },
  {
    section: "Notifications",
    items: [
      {
        icon: Bell,
        title: "Raffle Updates",
        description: "Get notified about new raffles",
        type: "toggle",
        valueKey: "raffleUpdates",
      },
      {
        icon: Trophy,
        title: "Winning Notifications",
        description: "Get notified when you win a raffle",
        type: "toggle",
        valueKey: "winningNotifications",
      },
    ],
  },
  {
    section: "Payment",
    items: [
      {
        icon: CreditCard,
        title: "Payment Methods",
        description: "",
        action: "navigate",
        route: "PaymentMethods",
      },
    ],
  },
  {
    section: "Linked Accounts",
    items: [
      {
        icon: Ghost,
        title: "Google",
        description: "",
        type: "linkAccount",
        provider: "google",
      },
      {
        icon: Facebook,
        title: "Facebook",
        description: "",
        type: "linkAccount",
        provider: "facebook",
      },
    ],
  },
  {
    section: "App Preferences",
    items: [
      {
        icon: Sun,
        title: "Theme",
        description: "Choose between light and dark mode",
        type: "option",
        valueKey: "theme",
        options: ["Light", "Dark"],
      },
      {
        icon: Globe,
        title: "Language",
        description: "Select your preferred language",
        type: "option",
        valueKey: "language",
        options: ["English", "Amharic"],
      },
    ],
  },
  {
    section: "Legal",
    items: [
      {
        icon: FileText,
        title: "Terms of Service",
        description: "",
        action: "navigate",
        route: "TermsOfService",
      },
      {
        icon: Shield,
        title: "Privacy Policy",
        description: "",
        action: "navigate",
        route: "PrivacyPolicy",
      },
    ],
  },
  {
    section: "Help & Support",
    items: [
      {
        icon: HelpCircle,
        title: "Help & Support",
        description: "",
        action: "navigate",
        route: "HelpSupport",
      },
    ],
  },
];
*/
export const settingsData = [
  {
    section: "Account",
    items: [
      {
        icon: UserSquare,
        title: "Account Details",
        description: "Edit your name, email, and phone number",
        variant: "navigate",
        route: "AccountDetails",
      },
      {
        icon: Lock,
        title: "Change Password",
        description: "",
        variant: "navigate",
        route: "ChangePassword",
      },
    ],
  },
  {
    section: "Notifications",
    items: [
      {
        icon: Bell,
        title: "Raffle Updates",
        description: "Get notified about new raffles",
        variant: "toggle",
        valueKey: "raffleUpdates",
      },
      {
        icon: Trophy,
        title: "Winning Notifications",
        description: "Get notified when you win a raffle",
        variant: "toggle",
        valueKey: "winningNotifications",
      },
    ],
  },
  {
    section: "Payment",
    items: [
      {
        icon: CreditCard,
        title: "Payment Methods",
        description: "",
        variant: "navigate",
        route: "PaymentMethods",
      },
    ],
  },
  {
    section: "Linked Accounts",
    items: [
      {
        icon: Ghost,
        title: "Google",
        description: "",
        variant: "linkAccount",
        provider: "google",
      },
      {
        icon: Facebook,
        title: "Facebook",
        description: "",
        variant: "linkAccount",
        provider: "facebook",
      },
    ],
  },
  {
    section: "App Preferences",
    items: [
      {
        icon: Sun,
        title: "Theme",
        description: "Choose between light and dark mode",
        variant: "option",
        valueKey: "theme",
        options: ["Light", "Dark"],
      },
      {
        icon: Globe,
        title: "Language",
        description: "Select your preferred language",
        variant: "option",
        valueKey: "language",
        options: ["English", "Amharic"],
      },
    ],
  },
  {
    section: "Legal",
    items: [
      {
        icon: FileText,
        title: "Terms of Service",
        description: "",
        variant: "navigate",
        route: "TermsOfService",
      },
      {
        icon: Shield,
        title: "Privacy Policy",
        description: "",
        variant: "navigate",
        route: "PrivacyPolicy",
      },
    ],
  },
  {
    section: "Help & Support",
    items: [
      {
        icon: HelpCircle,
        title: "Help & Support",
        description: "",
        variant: "navigate",
        route: "HelpSupport",
      },
    ],
  },
];

export const helpData = [
  { title: "Getting Started", icon: MessageCircleQuestion, link: null },
  { title: "Entering Raffles", icon: Ticket, link: null },
  { title: "Payment Issues", icon: CreditCard, link: null },
  { title: "Winning & Prizes", icon: Trophy, link: null },
  { title: "Account Help", icon: UserCircle, link: null },
];

/*[
  {
    section: "Popular Topics",
    items: [
      { title: "Getting Started", icon: "?", link: null },
      { title: "Entering Raffles", icon: "∑", link: null },
      { title: "Payment Issues", icon: "💳", link: null },
      { title: "Winning & Prizes", icon: "🏆", link: null },
    ],
  },
  {
    section: "Account Help",
    items: [{ title: "Account Help", icon: "👤", link: null }],
  },
  {
    section: "Contact Us",
    items: [
      { title: "Email Support", icon: "📧", link: ">" },
      { title: "Live Chat", icon: "💬", link: ">" },
    ],
  },
  {
    section: "Tab Bar",
    items: [
      { title: "Home", icon: "🏠", link: null },
      { title: "Raffles", icon: "∑", link: null },
      { title: "Winners", icon: "🏆", link: null },
      { title: "Profile", icon: "👤", link: null },
    ],
  },
];
*/
