import { ActionType, Plan, SidebarItem, UserWallet } from '../types';

export const plans: Plan[] = [
  {
    id: 1,
    title: 'Pion Starter',
    requiredNodePower: '500 - 1000',
    verificationMethods: '6 methods',
    APR: '10% - 15%',
    profitability: '200 - 250 days',
    backgroundColor: '#F58E8E80',
    shadowColor: 'text-[#F58E8E59]',
  },
  {
    id: 2,
    title: 'Pion Enhancer',
    requiredNodePower: '1000 - 5000',
    verificationMethods: 'Aura Bronze',
    APR: '20% - 30%',
    profitability: '100 - 180 days',
    backgroundColor: '#F3C95D80',
    shadowColor: 'text-[#F3C95D59]',
  },
  {
    id: 3,
    title: 'Pion Supreme',
    requiredNodePower: '+5000',
    verificationMethods: 'Aura Silver',
    APR: '35% - 50%',
    profitability: '50 - 80 days',
    backgroundColor: '#918EF580',
    shadowColor: 'text-[#918EF559]',
  },
];

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    title: 'Create',
    icon: '/assets/images/actions/create-icon.svg',
    hoverIcon: '/assets/images/actions/create-colored-icon.svg',
    link: ActionType.CREATE,
  },
  {
    id: 2,
    title: 'Upgrade',
    icon: '/assets/images/actions/upgrade-icon.svg',
    hoverIcon: '/assets/images/actions/upgrade-colored-icon.svg',
    link: ActionType.UPGRADE,
  },
  {
    id: 3,
    title: 'Merge',
    icon: '/assets/images/actions/merge-icon.svg',
    hoverIcon: '/assets/images/actions/merge-colored-icon.svg',
    link: ActionType.MERGE,
  },
  {
    id: 4,
    title: 'Split',
    icon: '/assets/images/actions/split-icon.svg',
    hoverIcon: '/assets/images/actions/split-colored-icon.svg',
    link: ActionType.SPLIT,
  },
  {
    id: 5,
    title: 'Transfer',
    icon: '/assets/images/actions/transfer-icon.svg',
    hoverIcon: '/assets/images/actions/transfer-colored-icon.svg',
    link: ActionType.TRANSFER,
  },
];

export const userWallets: UserWallet[] = [
  {
    id: 1,
    title: 'Deus Presale',
    address: '0x1234567890123456789012345678901234567890',
    balance: '+600 PION',
    verified: true,
  },
  {
    id: 2,
    title: 'Muon Presale',
    address: '0x1234567890123456789012345678901234567890',
    balance: '+400 PION',
    verified: false,
  },
  {
    id: 3,
    title: 'Alice Operator',
    address: '0x1234567890123456789012345678901234567890',
    balance: '+200 PION',
    verified: false,
  },
];
